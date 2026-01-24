# Video Streaming Platform Backend

A backend system for a video streaming platform (YouTube-like) built using Node.js, Express, MongoDB, and JWT authentication.  
Supports user authentication, video uploads, likes, comments, channels, subscriptions, watch history, and search functionality.

---

## 🚀 Features

- User registration and login with JWT authentication
- Protected routes with middleware-based authorization
- Video upload and management
- Like and comment system
- Channel creation and subscriptions
- User watch history tracking
- Search videos and channels
- Cloudinary integration for video and image storage
- Centralized error handling

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **Storage:** Cloudinary
- **Tools:** Postman, GitHub


## ⚙️ Setup & Run Locally

```bash
git clone https://github.com/ayushijogi08-art/video_streaming_platform_backend.git
cd video_streaming_platform_backend
npm install
npm run dev


---



```md
## 📂 Project Structure


SRC/
├── app.js # Express app configuration
├── index.js # Server entry point
├── constants.js # Application-wide constants
│   
├───controllers/ # Request handling & business logic
│ ├── admin.controller.js
│ ├── comment.controller.js
│ ├── dashboard.controller.js
│ ├── healthcheck.controller.js
│ ├── like.controller.js
│ ├── passwordReset.controller.js
│ ├── playlist.controller.js
│ ├── search.controller.js
│ ├── subscription.controller.js
│ ├── tweet.controller.js
│ ├── user.controller.js
│ └── video.controller.js
├───db/ # Database connection
│ └── index.js
│
├───middlewares/ # Custom middleware
│ ├── auth.middleware.js
│ ├── verifyJWT.js
│ ├── error.middleware.js
│ └── multer.middleware.js
│
├───models/ # MongoDB schemas
│ ├── comment.model.js
│ ├── like.model.js
│ ├── playlist.model.js
│ ├── subscription.model.js
│ ├── tweet.model.js
│ ├── user.model.js
│ └── video.model.js
│
├───routes/ # API route definitions
│ ├── admin.routes.js
│ ├── comment.routes.js
│ ├── dashboard.routes.js
│ ├── healthcheck.routes.js
│ ├── like.routes.js
│ ├── passwordReset.routes.js
│ ├── playlist.routes.js
│ ├── search.routes.js
│ ├── subscription.routes.js
│ ├── tweet.routes.js
│ ├── user.routes.js
│ └── video.routes.js
│
└───utils/ # Utility helpers
├── ApiError.js
├── ApiResponse.js
├── asyncHandler.js
└── cloudinary.js

## 📌 API Overview

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Users
- GET `/api/users/profile`
- GET `/api/users/history`

### Videos
- POST `/api/videos/upload`
- GET `/api/videos`
- GET `/api/videos/:id`

### Interactions
- POST `/api/videos/:id/like`
- POST `/api/videos/:id/comment`

### Search
- GET `/api/search?query=keyword`

## 🧪 API Testing

All APIs were tested using Postman.
JWT-protected routes require the Authorization header.

Postman collection is available in the `/postman` directory.

