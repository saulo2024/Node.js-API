import setupKnex, { type Knex } from 'knex'
import { env } from './env/index.js'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found.')
}

// Adicionamos o ": Knex.Config" para o VS Code ajudar com autocompletar
export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts', // Avisa que os arquivos serão TypeScript
    directory: './db/migrations', // Define a pasta onde eles serão salvos
  },
}

export const knex = setupKnex(config)
