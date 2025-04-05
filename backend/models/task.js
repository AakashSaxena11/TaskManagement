const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
            unique: true,
        },
        important: {
            type: Boolean,
            default: false,
        },
        complete: {
            type: Boolean, // Corrected the 'boolean' to 'Boolean'
            default: false,
        },
    },
    { timestamps: true } // Added timestamps
);

module.exports = mongoose.model("Task", taskSchema);
