const isEmailValid = (req, res, next) => {
  const { email } = req.body;
  
  const emailRegex = /\S+@\S+\.\S+/;

  const testEmail = emailRegex.test(email);

  if (email === '') {
    return res.status(400).json({ message: 'Email is not allowed to be empty' });
  }

  if (!email) return res.status(400).json({ message: 'Email is required' });

  if (!testEmail) return res.status(400).json({ message: 'Invalid email' });

  next();
};

const isPasswordValid = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({ message: 'Password is not allowed to be empty' });
  }
  if (!password) return res.status(400).json({ message: 'Password is required' });

  if (password.length < 6) {
    return res.status(400).json({
      message: 'Password length must be at least 6 characters long',
    });
  }
  
  next();
};

const isNameValid = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: 'Name is required' });

  if (name.length < 12) {
    return res.status(400).json({
      message: 'Name length must be at least 12 characters long',
    });
  }
  next();
};

module.exports = {
  isEmailValid,
  isPasswordValid,
  isNameValid,
};
