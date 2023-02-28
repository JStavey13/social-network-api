const { Schema, model } = require('mongoose');

// schema for the user model
const userSchema = new Schema(
  {
    username: { 
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        // a regex for email validation
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },

    thoughts: [
        //references the Thought model
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],

    friends: [
        // references the User model
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
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

// virtual that returns the length of the friends field 
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })

  //initialize the model
  const User = model('user', userSchema);

  // exports the model
  module.exports = User;