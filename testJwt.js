const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

 dotenv.config();

 const secretKey = process.env.JWT_SECRET;

 const token = jwt.sign({ id: "user123" }, secretKey, { expiresIn: '1h' });
console.log('Generated Token:', token);

 try {
    const decoded = jwt.verify(token, secretKey);
    console.log('Decoded Token:', decoded);
} catch (err) {
    console.error('Invalid Token:', err.message);
}
