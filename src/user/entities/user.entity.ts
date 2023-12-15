import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Guilds {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  icon: string;

  @Field(() => Boolean)
  owner: boolean;

  @Field(() => String)
  permissions: string;

  @Field(() => [String])
  features: [string];
}
