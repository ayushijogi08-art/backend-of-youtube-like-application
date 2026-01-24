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

---

## 📂 Project Structure

VIDEO_STREAMING_PLATFORM_BACKEND\SRC
│   app.js
│   constants.js
│   index.js
│   
├───controllers
│       admin.controller.js
│       comment.controller.js
│       dashboard.controller.js
│       healthcheck.controller.js
│       like.controller.js
│       passwordReset.controller.js
│       playlist.controller.js
│       search.controller.js
│       subscription.controller.js
│       tweet.controller.js
│       user.controller.js
│       video.controller.js
│
├───db
│       index.js
│
├───middlewares
│       auth.middleware.js
│       error.middleware.js
│       multer.middleware.js
│       verifyJWT.js
│
├───models
│       comment.model.js
│       like.model.js
│       playlist.model.js
│       subcription.model.js
│       tweet.model.js
│       user.model.js
│       video.model.js
│
├───routes
│       admin.routes.js
│       comment.routes.js
│       dashboard.routes.js
│       healthcheck.routes.js
│       like.routes.js
│       passwordReset.routes.js
│       playlist.routes.js
│       search.routes.js
│       subscription.routes.js
│       tweet.routes.js
│       user.routes.js
│       video.routes.js
│
└───utils
        ApiError.js
        ApiResponse.js
        asyncHandler.js
        cloudinary.js


