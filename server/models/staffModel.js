const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true // e.g., Instructor, Manager, Assistant, etc.
    },
    availability: {
        type: String,
        required: true // e.g., "Full-time", "Part-time", "Weekends"
    }
});

module.exports = mongoose.model("Staff", staffSchema);
