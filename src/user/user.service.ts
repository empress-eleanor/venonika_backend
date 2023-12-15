import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getBotGuilds(token: string) {
    try {
      const response = await axios.get(
        'https://discord.com/api/v10/users/@me/guilds',
        {
          headers: {
            Authorization: `Bot ${token}`,
          },
        },
      );

      const guilds = response.data;
      return guilds;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error fetching guilds:',
        error.message,
      );
    }
  }

  async getUserGuilds(userId: string) {
    try {
      const userData = await this.prisma.session.findFirst({
        where: { user_id: userId },
      });

      const response = await axios.get(
        'https://discord.com/api/v10/users/@me/guilds',
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        },
      );

      const guilds = response.data;
      return guilds;
    } catch (error) {
      console.error('Error fetching user guilds:', error.message);
      throw error;
    }
  }
}
