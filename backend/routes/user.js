const router = require("express").Router();
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGN-UP API
router.post("/sign-in", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if username exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Check if email exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Validate username length
        if (username.length < 4) {
            return res.status(400).json({ message: "Username should have at least 4 characters" });
        }

        // Hash password
        const hashpass = await bcrypt.hash(password, 10);

        // Save user
        const newUser = new User({
            username,
            email,
            password: hashpass,
        });
        await newUser.save();

        res.status(200).json({ message: "Sign in successfully" });
    } catch (error) {
        console.error("Sign-in Error:", error);
        res.status(500).json({ message: "Internal system error!" });
    }
});

// LOGIN API
router.get("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid Credentials!" });
        }

        // Compare password
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid Credentials!" });
        }

        // Generate JWT Token
        const token = jwt.sign({ name: username }, "Aakash", { expiresIn: "2d" });

        res.status(200).json({ id: existingUser._id, token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Internal system error!" });
    }
});

module.exports = router;
