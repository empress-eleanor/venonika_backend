/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Guilds {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
}

export interface IQuery {
  getBotGuilds(): Guilds[] | Promise<Guilds[]>;
  getUserGuilds(userId: string): Guilds[] | Promise<Guilds[]>;
}

type Nullable<T> = T | null;
