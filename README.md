# Zen Task server

- [Live Server](https://zentask-server-gilt.vercel.app)

This is the backend API server for the Electro-Hub Kanban task management app. It provides secure user authentication and task management functionalities via RESTful APIs.

## Features

- Custom JWT-based authentication
- Password hashed with bcrypt before user data save

- User login and registration

- Task CRUD operations (Create, Read, Update, Delete)

- Task summary API for dashboard

- Real-time task status updates

---

## Technologies (Packages) Used

- `Node.js`
- `Express.js`
- `Mongoose`
- `cors`
- `dotenv`
- `bcrypt`
- `jsonwebtoken`

## Run the Server Locally

### Prerequisites

- Node.js (v20+)
- `pnpm` package manager
- if you prefer `npm` or `yarn`, delete `pnpm-lock.yaml` file and follow the following steps

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohaiminul375/zen-task-server
   cd zen-task-server
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

   for `npm`:

   ```bash
   npm install
   ```

   for `yarn`:

   ```bash
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following fields:

   ```env
   PORT=8800
   MONGO_CONNECTION_STRING=your_mongo_db_uri
   ```

4. Start the server:

   ```bash
   pnpm start
   ```

   for `npm`:

   ```bash
   npm start
   ```

   for `yarn`:

   ```bash
   yarn start
   ```

5. Access the API at:

   ```bash
   http://localhost:8800
   ```

---

## API Documentation

### Base URL

`http://localhost:8800`

### Endpoints

#### **Todo (Task)**

1. **Create a Task**

   - **POST** `/todo/create-todo`
   - Request body:

     ```json
     {
       "title": "Pending Home Work",
       "description": "Do Math Home work",
       "due_date": "2025-06-16T12:12:34.567Z",
       "status": "To Do",
       "priority": "Low",
       "tags": ['homework' 'Math'],
       "email": 'mohaiminul375@gmail.com'
     }
     ```

   - Response:

   ```json
   {
     "success": true,
     "message": "todo was created"
   }
   ```

2. **Get All Todo**

   - **GET** `/toto/all-todo/:email`

   - Response:

   ```json
    {

      "data": [
           {
               "_id": "6742c11a49c1956daec11abd",
               "title": "Pending Home Work",
               "description": "Do Math Home work",
               "due_date": "2025-06-16T12:12:34.567Z",
               "status": "To Do",
               "priority": "Low",
               "tags": ['homework' 'Math'],
               "email": 'mohaiminul375@gmail.com',
               "createdAt": "2024-11-24T06:00:58.848Z",
               "updatedAt": "2024-11-24T06:00:58.848Z"
    }
           ,

       ]
    }
   ```



3. **Update a Task**

   - **Patch** `/todo/update-todo/:id`
   - Request body contains fields to update:

   ```json
   {
      "title": "Pending Home Work",
      "description": "Do Math Home work",
      "due_date": "2025-06-16T12:12:34.567Z",
      "status": "To Do",
      "priority": "Low",
      "tags": ['homework' 'Math'],
    }
   ```

   - Response:

   ```json
   {
     "success": true,
     "message": "todo was created"
   }
   ```

4. **Delete a Bicycle**

   - **DELETE** `/todo/:id`

   - Response:

   ```json
   {
     "status": true
   }
   ```
# 🖥️ Client Side

- [Zen Task Client Repository](https://github.com/mohaiminul375/zen-task)