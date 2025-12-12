/**
 * Jest Test Suite for Express.js Server Endpoints
 * 
 * This test file provides comprehensive testing coverage for the Express.js
 * server endpoints defined in index.js. It tests:
 * - GET / endpoint returning "Hello world"
 * - GET /evening endpoint returning "Good evening"
 * - HTTP status codes (200 for success, 404 for not found)
 * - Content-type headers verification
 * - HTTP method handling
 * 
 * Uses Supertest library to make HTTP assertions against the Express app
 * instance without starting an actual server.
 * 
 * @module index.test
 * @requires supertest
 * @requires ./index
 */

'use strict';

// Import Supertest for HTTP assertion testing
const request = require('supertest');

// Import Express application instance from index.js for testing
const app = require('./index');

/**
 * Express Server Endpoints Test Suite
 * 
 * Organized test suite covering all endpoint behaviors including:
 * - Response content verification
 * - HTTP status code verification
 * - Content-type header verification
 * - 404 handling for undefined routes
 */
describe('Express Server Endpoints', () => {
    /**
     * Test Suite for GET / (Root Endpoint)
     * 
     * Verifies that the root endpoint correctly returns "Hello world"
     * with appropriate status code and content type.
     */
    describe('GET /', () => {
        /**
         * Test Case 1: Verify root endpoint returns "Hello world" with status 200
         * 
         * This test confirms that:
         * - The endpoint responds to GET requests
         * - Returns HTTP status code 200 (OK)
         * - Response body contains exactly "Hello world"
         */
        test('should return "Hello world" with status 200', async () => {
            const response = await request(app)
                .get('/')
                .expect(200);
            
            expect(response.text).toBe('Hello world');
        });

        /**
         * Test Case 2: Verify root endpoint responds with content-type text/html
         * 
         * Express.js res.send() with a string automatically sets
         * Content-Type to text/html; charset=utf-8
         */
        test('should respond with content-type text/html', async () => {
            const response = await request(app)
                .get('/')
                .expect('Content-Type', /text\/html/);
            
            expect(response.status).toBe(200);
        });

        /**
         * Test Case 6: Verify HTTP GET method handling on root endpoint
         * 
         * Confirms that the root endpoint properly handles GET HTTP method
         * and returns the expected response.
         */
        test('should handle GET method on root endpoint', async () => {
            const response = await request(app)
                .get('/');
            
            expect(response.status).toBe(200);
            expect(response.text).toBe('Hello world');
            expect(response.request.method).toBe('GET');
        });
    });

    /**
     * Test Suite for GET /evening (Evening Endpoint)
     * 
     * Verifies that the /evening endpoint correctly returns "Good evening"
     * with appropriate status code and content type.
     */
    describe('GET /evening', () => {
        /**
         * Test Case 3: Verify evening endpoint returns "Good evening" with status 200
         * 
         * This test confirms that:
         * - The endpoint responds to GET requests at /evening
         * - Returns HTTP status code 200 (OK)
         * - Response body contains exactly "Good evening"
         */
        test('should return "Good evening" with status 200', async () => {
            const response = await request(app)
                .get('/evening')
                .expect(200);
            
            expect(response.text).toBe('Good evening');
        });

        /**
         * Test Case 4: Verify evening endpoint responds with content-type text/html
         * 
         * Express.js res.send() with a string automatically sets
         * Content-Type to text/html; charset=utf-8
         */
        test('should respond with content-type text/html', async () => {
            const response = await request(app)
                .get('/evening')
                .expect('Content-Type', /text\/html/);
            
            expect(response.status).toBe(200);
        });

        /**
         * Test Case 7: Verify HTTP GET method handling on evening endpoint
         * 
         * Confirms that the evening endpoint properly handles GET HTTP method
         * and returns the expected response.
         */
        test('should handle GET method on evening endpoint', async () => {
            const response = await request(app)
                .get('/evening');
            
            expect(response.status).toBe(200);
            expect(response.text).toBe('Good evening');
            expect(response.request.method).toBe('GET');
        });
    });

    /**
     * Test Suite for Non-existent Endpoints
     * 
     * Verifies that requests to undefined routes return 404 status code.
     */
    describe('Non-existent endpoints', () => {
        /**
         * Test Case 5: Verify non-existent routes return 404
         * 
         * Express.js returns 404 for routes that are not defined.
         * This test confirms proper 404 handling for undefined routes.
         */
        test('should return 404 for undefined routes', async () => {
            const response = await request(app)
                .get('/nonexistent');
            
            expect(response.status).toBe(404);
        });

        /**
         * Additional test: Verify 404 for another non-existent path
         * 
         * Tests another undefined route to ensure consistent 404 behavior.
         */
        test('should return 404 for /unknown path', async () => {
            const response = await request(app)
                .get('/unknown');
            
            expect(response.status).toBe(404);
        });
    });

    /**
     * Test Suite for HTTP Methods Verification
     * 
     * Additional tests to verify HTTP method handling across endpoints.
     */
    describe('HTTP Methods', () => {
        /**
         * Verify that POST method on root endpoint returns appropriate response
         * 
         * Since only GET is defined for /, POST should return 404 or 405.
         * Express.js by default returns 404 for undefined method+path combinations.
         */
        test('should not accept POST on root endpoint', async () => {
            const response = await request(app)
                .post('/');
            
            // Express returns 404 for undefined routes/methods by default
            expect(response.status).toBeGreaterThanOrEqual(400);
        });

        /**
         * Verify that POST method on evening endpoint returns appropriate response
         * 
         * Since only GET is defined for /evening, POST should return 404 or 405.
         */
        test('should not accept POST on evening endpoint', async () => {
            const response = await request(app)
                .post('/evening');
            
            // Express returns 404 for undefined routes/methods by default
            expect(response.status).toBeGreaterThanOrEqual(400);
        });
    });
});
