const Lesson = require("../models/lesson.model");

module.exports.findAllLessons = (req, res) => { 
    Lesson.find()
        .then(allLessons => res.json({ lessons: allLessons }))
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.create = (req, res) => {
    Lesson.create(req.body)
        .then(newLesson => res.json({ lesson: newLesson }))
        .catch(err =>res.json({ message: "Something went wrong", error: err}))
}