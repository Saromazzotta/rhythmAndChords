const LessonController = require("../controllers/lesson.controller");

module.exports = app => {
    app.get("/api/lessons", LessonController.findAllLessons);
    app.post("/api/lessons", LessonController.create);
}