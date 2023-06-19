const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
    instructorName: {
        type: String,
        required: [true, "Instructor name is required"],
    },
    instrument: {
        type: String,
        required: [true, "Instrument is required"],
        enum: ["Drums", "Piano"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0.01]
    },
    availability: {
        type: String,
        required: [true, "Availability is required"]
    }
}, { timestamps: true });

const Lesson = mongoose.model("Lesson", LessonSchema)
module.exports = Lesson;