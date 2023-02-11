import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transaction = await knex('transactions')
      .insert({
        id: randomUUID(),
        title: 'Transação de teste',
        amount: 1000,
      })
      .returning('*')

    return transaction
  })
}
