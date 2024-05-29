import express from 'express';
import { Todo } from '../models/todo.js';
import { stringToDate } from '../utils/dateConversion.js';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/todos', async (req, res) => {
  const { title, startDate, endDate } = req.body;
  if (title && startDate && endDate) {
    const startdate = stringToDate(startDate);
    const enddate = stringToDate(endDate);

    const todo = new Todo({
      title,
      startdate,
      enddate
    });
    await todo.save();
    res.send(todo);
  } else {
    res.status(400).send('data missing or validation failed');
  }
});

router.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

router.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, startDate, endDate } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send('Invalid ID format');
  }

  const objectId = new mongoose.Types.ObjectId(id);
  const todo = await Todo.findByIdAndUpdate(
    objectId,
    { title, startDate, endDate },
    { new: true }
  );
  res.send(todo);
});

export default router;
