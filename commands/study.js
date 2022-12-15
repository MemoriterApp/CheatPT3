const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require ('openai');
const { APIKey } = require('../config.json');

// Set up the OpenAI API client
const configuration = new Configuration({
	apiKey: APIKey,
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
		const AiPrompt = interaction.options.getString('question');
		// Use the OpenAI API to generate a response to the given prompt
		const response = await openai.createCompletion({
			model: 'text-ada-001',
			prompt: AiPrompt,
			temperature: 0.25,
		});
		// Send the response back to the user
		await interaction.reply(response.data.choices[0].text);
	},
};