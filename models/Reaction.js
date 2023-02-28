const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
    {
  
      reactionId: [
          //references the Thought model
          {
              type: Schema.Types.ObjectId,
              default: () => new Types.ObjectId(),
          },
      ],

      reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
      },

      username: {
        type: String,
        required: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
        get createdAt() {
          // unsure of this part
          return Date
        }
    },
},
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
    )

    const Reaction = model('reaction', reactionSchema)

module.exports = Reaction;
