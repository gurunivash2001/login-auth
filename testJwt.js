const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Access the JWT_SECRET from .env
const secretKey = process.env.JWT_SECRET;

// Example: Sign a token
const token = jwt.sign({ id: "user123" }, secretKey, { expiresIn: '1h' });
console.log('Generated Token:', token);

// Example: Verify a token
try {
    const decoded = jwt.verify(token, secretKey);
    console.log('Decoded Token:', decoded);
} catch (err) {
    console.error('Invalid Token:', err.message);
}
