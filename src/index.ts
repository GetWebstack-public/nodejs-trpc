import express from 'express';
import { initTRPC } from '@trpc/server';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

const t = initTRPC.create();
const router = t.router({
  hello: t.procedure.query(() => 'Hello World'),
});

const app = express();
app.use('/trpc', createExpressMiddleware({ router }));
app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000, '0.0.0.0');
