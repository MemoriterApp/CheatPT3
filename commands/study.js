const { SlashCommandBuilder } = require('discord.js');

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
		await interaction.reply('You asked: ' + AiPrompt + '');
	},
};