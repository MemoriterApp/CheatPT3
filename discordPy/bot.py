import os
import discord
from discord import Client
from dotenv import load_dotenv

load_dotenv() # load the .env file

TOKEN = os.getenv('DISCORD_TOKEN') # get the token from the .env file

client = discord.Client(intents=discord.Intents.default()) # a client is a connection to Discord

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

client.run(TOKEN)