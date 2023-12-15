import { Args, Query, Resolver } from '@nestjs/graphql';
import { DISCORD_BOT_TOKEN } from 'src/constant';
import { Guilds } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => Guilds)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [Guilds])
  getBotGuilds() {
    return this.userService.getBotGuilds(DISCORD_BOT_TOKEN);
  }

  @Query(() => [Guilds])
  getUserGuilds(@Args('userId', { type: () => String }) userId: string) {
    return this.userService.getUserGuilds(userId);
  }
}
