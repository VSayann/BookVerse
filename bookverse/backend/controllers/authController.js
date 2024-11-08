
exports.signUp = async (req, res) => {
    try {
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error signing up user', error: error.message });
    }
};

exports.signIn = async (req, res) => {
    try {
        res.status(200).json({ message: 'User signed in successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error signing in user', error: error.message });
    }
};
