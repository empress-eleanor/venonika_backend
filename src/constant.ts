import { config } from 'dotenv';
config();

export const API_PORT = process.env.API_PORT || 3000;
export const API_URL = process.env.API_URL;

export const WEBSITE_URL = process.env.WEBSITE_URL;

export const API_SECRET =
  process.env.API_SECRET || '74633551CD67D854CB4385E5463C5';

export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
export const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
export const DISCORD_REDIRECT_URL = `${API_URL}/api/auth/discord/login`;
export const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
