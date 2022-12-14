import os
#import openai
import discord
from discord import Client
from dotenv import load_dotenv
from discord.ext import commands

load_dotenv() # load the .env file
TOKEN = os.getenv('DISCORD_TOKEN') # get the token from the .env file
#openai.api_key = os.gentenv('API_TOKEN') # replace with your OpenAI API key

#client = discord.Client(intents=discord.Intents.all()) # a client is a connection to Discord
client = discord.Client(intents=discord.Intents.all())
client = commands.Bot(command_prefix='$', intents=discord.Intents.all())
@client.command()
async def prompt_example(ctx):
    print("1")
    await ctx.send("Tell me your task!")

    # Wait for the user's response
    response = await client.wait_for("message", check=lambda message: message.author == ctx.author)

    AiPrompt = response.content # get the user's response

    # Create a completion for the prompt using the GPT-3 model
    #completion = openai.Completion.create(
        #engine="text-ada-001",
        #prompt=AiPrompt,
        #max_tokens=1024,
        #n = 1,
        #stop = ".",
        #temperature = 0.25,
    #)

    # Do something with the user's response
    await ctx.send(f"Your task is the following: {AiPrompt}")
    #await ctx.send(f"My answer would be this: {completion.text}")
   
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