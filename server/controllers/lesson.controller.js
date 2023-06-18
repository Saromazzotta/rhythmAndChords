const Lesson = require("../models/lesson.model");

//Find all lessons
module.exports.findAllLessons = (req, res) => { 
    Lesson.find()
        .then(allLessons => res.json({ lessons: allLessons }))
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}

//Create lesson
module.exports.create = (req, res) => {
    Lesson.create(req.body)
        .then(newLesson => res.json({ lesson: newLesson }))
        .catch(err =>res.json({ message: "Something went wrong", error: err}))
}

//Find one lesson
module.exports.findOneLesson = (req, res) => {
    Lesson.findById(req.params.id)
        .then(oneLesson => res.json({ lesson: oneLesson }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

//Update lesson
module.exports.updateLesson = (req, res) => {
    Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedLesson => res.json({ lesson: updatedLesson }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

//Delete lesson
module.exports.deleteLesson = (req, res) => {
    Lesson.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}