/**
 * Express.js Server Implementation
 * 
 * This module creates an Express.js HTTP server with two endpoints:
 * - GET / : Returns "Hello world" response
 * - GET /evening : Returns "Good evening" response
 * 
 * The server listens on a configurable port (via PORT environment variable)
 * and exports the Express app instance for testing purposes.
 * 
 * @module index
 * @requires express
 */

'use strict';

// Import Express.js web framework using CommonJS syntax
const express = require('express');

// Initialize Express application instance
const app = express();

// Configure port from environment variable with fallback to default 3000
const PORT = process.env.PORT || 3000;

/**
 * Root endpoint handler
 * 
 * Responds to GET requests on the root path with "Hello world" message.
 * 
 * @route GET /
 * @returns {string} "Hello world" - Plain text response
 * @example
 * // Request: GET http://localhost:3000/
 * // Response: "Hello world"
 */
app.get('/', (req, res) => {
    res.send('Hello world');
});

/**
 * Evening endpoint handler
 * 
 * Responds to GET requests on the /evening path with "Good evening" message.
 * 
 * @route GET /evening
 * @returns {string} "Good evening" - Plain text response
 * @example
 * // Request: GET http://localhost:3000/evening
 * // Response: "Good evening"
 */
app.get('/evening', (req, res) => {
    res.send('Good evening');
});

/**
 * Start the Express server
 * 
 * Only start listening if this module is run directly (not imported for testing).
 * This pattern allows the app to be tested with Supertest without starting
 * an actual HTTP server.
 */
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log('Available endpoints:');
        console.log(`  GET http://localhost:${PORT}/         - Returns "Hello world"`);
        console.log(`  GET http://localhost:${PORT}/evening  - Returns "Good evening"`);
    });
}

/**
 * Export the Express app instance for testing
 * 
 * This allows the app to be imported by test files (e.g., using Supertest)
 * to make HTTP assertions without starting an actual server.
 * 
 * @exports app - Express application instance
 */
module.exports = app;
