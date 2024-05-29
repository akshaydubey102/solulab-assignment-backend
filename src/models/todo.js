import mongoose, { Schema } from 'mongoose';

const todos = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: true
    },
    startdate: {
      type: Date,
      required: true
    },
    enddate: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

export const Todo = mongoose.model('todo', todos);
