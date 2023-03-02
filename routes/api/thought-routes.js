const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getSingleThought,
    deleteThought,
    updateThought,
} = require('../../controllers/thought-controller')

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);


module.exports = router;