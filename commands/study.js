const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');
// Set up the OpenAI API client
const configuration = new Configuration({
    apiKey: process.env.API_KEY,
    organization: 'org-S1UJXi06d6Dk4asCwduIssYC',
});
const openai = new OpenAIApi(configuration);
module.exports = {
    data: new SlashCommandBuilder()
        .setName('study')
        .setDescription('Generates answer to question')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('The question to be answered')
                .setRequired(true)),
    async execute(interaction) {
        const prepromt = 'Write a short essay about the following question:';
        const AiPrompt = prepromt + `
` + interaction.options.getString('question');
        try {
            await interaction.deferReply();
            // Use the OpenAI API to generate a response to the given prompt
            const response = await openai.createCompletion({
                // model: 'text-curie-001',
                model: 'text-davinci-003',
                prompt: AiPrompt,
                temperature: 0.75,
                max_tokens: 512,
            });
            console.log(response.data);
            // await interaction.reply({ content: 'I know it!', ephemeral: true });
            // Send the response back to the user
            await interaction.editReply({ content: response.data.choices[0].text });
        }
        catch (error) {
            console.error(error.response);
            await interaction.reply({ content: 'Try asking better questions!', ephemeral: true });
        }
    },
};









