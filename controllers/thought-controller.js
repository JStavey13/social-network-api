const Thought = require('../models/Thought')
const { Reaction } = require('../models')

const thoughtController = {
    getThoughts(req, res) {
        Thought.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },
}




module.exports = thoughtController