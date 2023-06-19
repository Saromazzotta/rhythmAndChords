const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const secret = process.env.FIRST_SECRET_KEY;
const bcrypt = require("bcrypt");

module.exports = {
    register: async (req, res) => {
        try {
            const potentialUser = await User.findOne({ email: req.body.email });
            if (potentialUser) {
                res.status(400).json({ message: "Email already exists" })
            } else {
                const newUser = await User.create(req.body);

                const userToken = jwt.sign({ _id: newUser.id, email: newUser.email }, secret, { expiresIn: "1d" });
                res.cookie("usertoken", userToken, {
                    httpOnly: true
                }).json({ message: "success", user: newUser });
                // res.json({ message: "succes", user: newUser });
            }
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                const passwordMatch = await bcrypt.compare(req.body.password, user.password);
                if (passwordMatch) {
                    const userToken = jwt.sign({ _id: user.id, email: user.email }, secret, { expiresIn: "1d" });
                    res.cookie("usertoken", userToken, {
                        httpOnly: true
                    }).json({ message: "success", user: user });
                }
                else { //else for if passwords don't match
                    res.status(400).json({ message: "Invalid login attempt" });
                }
            } else { //else there was no user with that email
                res.status(400).json({ message: "Invalid login attempt" });
            }
        }
        catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    logout: (req, res) => {
        res.clearCookie("usertoken").json({ message: "success" });
    }
}

module.exports.findOneUser = (req, res) => {
    User.findById(req.params.id)
        .then(oneUser => res.json({ user: oneUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json({ users: allUsers }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}



