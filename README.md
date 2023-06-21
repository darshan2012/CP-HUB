# CP-HUB
This is a starter app for a MERN stack application with authentication. 
This is for a SPA (Single Page Application) workflow that uses the Vite Build tool.

# It includes the following:

* Backend API with Express & MongoDB
* Routes for auth, logout, register, profile, update profile
* JWT authentication stored in HTTP-only cookie
* Protected routes and endpoints
* Custom middleware to check JSON web token and store in cookie
* Custom error middleware
* React frontend to register, login, logout, view profile, and update profile
* React Bootstrap UI library
* React Toastify notifications

## Env Variables ##

Rename the `.env.example` file to `.env` and add the following

`NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'`

## Run ##

Run frontend (:3000) & backend (:5000)
`npm run dev`

Run backend only
`npm run server`

## Build and Deploy ##
Create frontend prod build
`cd frontend`
`npm run build`
