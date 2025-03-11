# Task Manager Backend API

This project implements a RESTful API for managing tasks. It provides endpoints for creating, retrieving, updating, and deleting tasks.

## Table of Contents

-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Running the Application](#running-the-application)
-   [API Endpoints](#api-endpoints)
-   [Task Data Structure](#task-data-structure)
-   [Storage Method](#storage-method)
-   [Validation](#validation)
-   [Testing](#testing)
-   [Contributing](#contributing)
-   [License](#license)

## Technologies Used

-   **Node.js:** Runtime environment.
-   **Express.js:** Web application framework.
-   **TypeScript:** Static typing for improved code quality.
-   **uuid:** For generating unique task IDs.
-   **cors:** Middleware for enabling Cross-Origin Resource Sharing.
-   **dotenv:** For managing environment variables.
-   **Jest:** Testing framework.
-   **Supertest:** HTTP assertion library.
-   **nodemon:** For automatic server restarts during development.

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd task-manager-backend
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  (Optional) Create a `.env` file in the root directory and add environment variables (e.g., `PORT=3001`).

## Running the Application

1.  Start the development server:

    ```bash
    npm run dev
    ```

2.  The API will be available at `http://localhost:3001` (or the port specified in your `.env` file).

## API Endpoints

-   **GET /tasks:** Retrieves a list of tasks. Supports pagination via the `page` query parameter (e.g., `/tasks?page=2`). Defaults to page 1. Returns 10 tasks per page.
-   **POST /tasks:** Creates a new task.
-   **PUT /tasks/:id:** Updates an existing task.
-   **DELETE /tasks/:id:** Deletes an existing task.

## Task Data Structure

A task object has the following properties:

```typescript
interface Task {
  id: string;
  title: string;
  description?: string;
  status?: string;
  priority?: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}