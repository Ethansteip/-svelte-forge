// server.js or in the entry point like build/index.js
import { handler } from './build/handler.js'; // Adjust path if necessary
import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set

app.use(handler);

app.listen(port, '0.0.0.0', () => {
	console.log(`Server running on http://0.0.0.0:${port}`);
});
