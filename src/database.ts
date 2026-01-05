import { env } from '../src/env/index.js'
import setupKnex, { type Knex } from 'knex'

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT, // Usa a variável que criamos
  connection:
    env.DATABASE_CLIENT === 'sqlite3'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL, // O Postgres aceita a string direta
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
