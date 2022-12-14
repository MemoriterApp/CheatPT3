import os
import discord
from discord import Client
from dotenv import load_dotenv
from discord.ext import commands

load_dotenv() # load the .env file
TOKEN = os.getenv('DISCORD_TOKEN') # get the token from the .env file
client = discord.Client(intents=discord.Intents.all()) # a client is a connection to Discord
bot = commands.Bot(command_prefix='$', intents=discord.Intents.all())

@bot.command()
async def prompt_example(ctx):
    # Ask the user a question
    await ctx.send("Tell me your task!")

    # Wait for the user's response
    response = await bot.wait_for("message", check=lambda message: message.author == ctx.author)

    # Do something with the user's response
    await ctx.send(f"I would answer the following: {response.content}")
   
@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content == 'hello':
        await message.channel.send('Hello!')



client.run(TOKEN)