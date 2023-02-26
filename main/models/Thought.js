const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

// schema for the thought model
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
  
      // references the reaction model
      reactions: [
         reactionSchema
      ]
  },
  {
      //allows virtuals to be included
      toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
  }
  );

  // virtual that returns the length of the reactions field
  thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

  // initialize the model
  const Thought = model('thought', thoughtSchema)

  // export model
  module.exports = Thought