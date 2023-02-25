const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
      thoughtText: { 
          type: String,
          required: true,
          maxLength: 289
      },
  
      createdAt: {
          type: Date,
          default: Date.now,
          get createdAt() {
            // unsure of this part
            return Date
          }
      },
  
      username: {
        type: String,
        required: true
      },
  
      reactions: [
         
      ]
  },
  {
      //allows virtuals to be included
      toJSON: {
          virtuals: true,
        },
        id: false,
  }
  );