const mongoose = require('mongoose');
const { Schema } = mongoose;

const fields = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
    trim: true,
    maxLength: 255,
  },
  link: {
    type: String,
    default: '',
    trim: true,
    maxLength: 400,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now()
  }
};

const references = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
};

const taskSchema = Schema(Object.assign(fields, references), { timestamps: true });

module.exports = {
    //Model: mongoose.model('Task', taskSchema),
  Model: mongoose.model('Fav', taskSchema),
  fields,
  references
};
