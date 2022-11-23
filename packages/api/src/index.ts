import * as dotenv from 'dotenv';
import express from 'express'
import { Router, Request, Response } from 'express';
import prisma from '@bnsouzastests/repository'

dotenv.config()

const app = express();

const route = Router();

app.use(express.json());

route.get('/', async (req: Request, res: Response) => {
  const events = await prisma.events.findMany({})
  res.json(events)
})

route.post('/', async (req: Request, res: Response) => {
  const body = req.body
  const event = await prisma.events.create({ data: body })
  res.json(event)
})

app.use(route)

app.listen(3333, () => {
  console.log(process.env.DATABASE_URL)
  console.log('server running on port 3333')
})