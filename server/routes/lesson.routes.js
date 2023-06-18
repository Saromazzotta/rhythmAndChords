const LessonController = require("../controllers/lesson.controller");
const Lesson = require("../models/lesson.model");

module.exports = app => {
    app.get("/api/lessons", LessonController.findAllLessons);
    app.get("/api/lessons/:id", LessonController.findOneLesson);
    app.post("/api/lessons", LessonController.create);
    app.put("/api/lessons/:id", LessonController.updateLesson);
    app.delete("/api/lessons/:id", LessonController.deleteLesson);
}