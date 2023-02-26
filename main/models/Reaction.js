const { Schema, model } = require('mongoose');
const responseSchema = require('../../../UCF-VIRT-FSF-FT-12-2022-U-LOLC/18-NoSQL/01-Activities/25-Ins_CRUD-Subdoc/models/Response');

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


module.exports = responseSchema;
