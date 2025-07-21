import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { EventRoutes } from './app/modules/event/event.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors({
  origin: ['https://event-scheduler-client-nine.vercel.app'],
  credentials: true
}));

// application routes
app.use('/api', EventRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send("Event Scheduler API is running 🚀");
});

export default app;
