# Express.js Server Tutorial

A simple Node.js Express.js server demonstrating basic HTTP endpoint handling. This tutorial project showcases how to create a minimal web server with multiple GET endpoints returning text responses.

## Features

- **Root Endpoint** (`GET /`): Returns "Hello world" response
- **Evening Endpoint** (`GET /evening`): Returns "Good evening" response
- Environment-configurable port (default: 3000)
- Comprehensive test suite with Jest and Supertest
- Production-ready module exports for testing

## Prerequisites

Before running this project, ensure you have the following installed:

| Requirement | Minimum Version |
|-------------|-----------------|
| Node.js     | 18.0.0+         |
| npm         | 8.0.0+          |

To check your installed versions:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd main
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Starting the Server

To start the Express.js server:

```bash
npm start
```

The server will start on port 3000 by default. You can customize the port using the `PORT` environment variable:

```bash
PORT=8080 npm start
```

### Running Tests

To execute the test suite:

```bash
npm test
```

## API Documentation

### Endpoints

#### GET /

Returns a "Hello world" greeting.

**Request:**

```bash
curl http://localhost:3000/
```

**Response:**

- **Status Code:** 200 OK
- **Content-Type:** text/html; charset=utf-8
- **Body:** `Hello world`

**Example Response:**

```
Hello world
```

---

#### GET /evening

Returns a "Good evening" greeting.

**Request:**

```bash
curl http://localhost:3000/evening
```

**Response:**

- **Status Code:** 200 OK
- **Content-Type:** text/html; charset=utf-8
- **Body:** `Good evening`

**Example Response:**

```
Good evening
```

---

#### Non-Existent Routes

Any request to an undefined route will return a 404 Not Found response.

**Example:**

```bash
curl http://localhost:3000/nonexistent
```

**Response:**

- **Status Code:** 404 Not Found

## Test Suite

The project includes a comprehensive test suite using Jest and Supertest. The tests verify:

| Test Case | Description |
|-----------|-------------|
| Root endpoint response | Verifies `GET /` returns "Hello world" |
| Root endpoint status | Confirms status code 200 |
| Root endpoint content-type | Validates text/html response type |
| Evening endpoint response | Verifies `GET /evening` returns "Good evening" |
| Evening endpoint status | Confirms status code 200 |
| Evening endpoint content-type | Validates text/html response type |
| Non-existent routes | Confirms 404 for undefined routes |

### Running Tests

```bash
npm test
```

**Expected Output:**

```
PASS ./index.test.js
  Express Server Endpoints
    GET /
      ✓ should return "Hello world" with status 200
      ✓ should respond with content-type text/html
    GET /evening
      ✓ should return "Good evening" with status 200
      ✓ should respond with content-type text/html
    Non-existent endpoints
      ✓ should return 404 for undefined routes
    HTTP Methods
      ✓ should handle GET method on root endpoint
      ✓ should handle GET method on evening endpoint

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
```

## Project Structure

```
main/
├── README.md          # Project documentation (this file)
├── index.js           # Express.js server with endpoint handlers
├── index.test.js      # Jest test suite
├── package.json       # Project configuration and dependencies
├── package-lock.json  # Dependency lock file
└── node_modules/      # Installed dependencies
```

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Express.js | 5.2.1   | Web framework for Node.js |
| Node.js    | 18+     | JavaScript runtime |
| Jest       | 30.x    | Testing framework |
| Supertest  | 7.x     | HTTP assertion library |

## License

This project is provided for educational and tutorial purposes.
