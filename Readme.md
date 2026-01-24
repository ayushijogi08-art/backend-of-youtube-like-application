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
```

## 🔑 Environment Variables

This project uses environment variables for configuration.  
Create a `.env` file in the root directory and add the following:

```env
PORT=5000
NODE_ENV=development

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=15m

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```


## 📂 Project Structure

src/
app.js 
index.js 
constants.js 

controllers/ 
| ├─ admin.controller.js
| ├─ comment.controller.js
| ├─ dashboard.controller.js
| ├─ healthcheck.controller.js
│ ├─ like.controller.js
│ ├─ passwordReset.controller.js
│ ├─ playlist.controller.js
│ ├─ search.controller.js
│ ├─ subscription.controller.js
│ ├─ tweet.controller.js
│ ├─ user.controller.js
│ └─ video.controller.js
db/ 
│ └─ index.js

middlewares/ 
│ ├─ auth.middleware.js
│ ├─ verifyJWT.js
│ ├─ error.middleware.js
│ └─ multer.middleware.js

models/ 
│ ├─ comment.model.js
│ ├─ like.model.js
│ ├─playlist.model.js
│ ├─ subscription.model.js
│ ├─ tweet.model.js
│ ├─ user.model.js
│ └─ video.model.js
│
routes/ 
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
utils/ 
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

## 🔐 Authentication Flow

This project uses **JWT-based authentication** with **Access Tokens** and **Refresh Tokens**.

### Access Token
- Short-lived token (e.g. 15 minutes)
- Used to access protected APIs
- Sent in `Authorization` header

### Refresh Token
- Long-lived token (e.g. 7 days)
- Stored securely (DB or HttpOnly cookie)
- Used to generate new access tokens without re-login

### Flow
1. User logs in with email & password
2. Server returns:
   - Access Token
   - Refresh Token
3. Client uses Access Token for API requests
4. When Access Token expires:
   - Client sends Refresh Token
   - Server issues new Access Token

## 📌 API Examples

### Register User
**POST** `/api/users/register`

#### Request Body
```json
{
  "username": "ayushi",
  "email": "ayushi@example.com",
  "password": "StrongPassword123"
}
```

###Response
{
  "success": true,
  "message": "User registered successfully"
}

Login User
POST /api/users/login

Response
{
  "accessToken": "jwt_access_token_here",
  "refreshToken": "jwt_refresh_token_here",
  "user": {
    "_id": "userId",
    "username": "ayushi",
    "email": "ayushi@example.com"
  }
}

###Upload Video (Protected)

POST /api/videos/upload

###Headers

Authorization: Bearer <access_token>


###Response

{
  "success": true,
  "videoId": "video_id_here",
  "message": "Video uploaded successfully"
}

###  Postman Collection 
## Folder structure
postman/
└── video_streaming_platform.postman_collection.json

## 🧪 API Testing (Postman)

All APIs have been tested using **Postman**.

### How to use
1. Import the Postman collection from `/postman`
2. Set environment variables:
   - `base_url`
   - `access_token`
3. Test protected routes using JWT Authorization

📁 Postman Collection:
`/postman/video_streaming_platform.postman_collection.json`

## 🗄 Database Design Overview

### User
- Can create one Channel
- Can upload multiple Videos
- Can like & comment on Videos
- Has Watch History

### Video
- Belongs to a User (creator)
- Has likes and comments
- Stored in Cloudinary

### Channel
- Owned by a User
- Can have multiple subscribers

### Relationships
- User ↔ Channel (1:1)
- User ↔ Video (1:N)
- Video ↔ Comment (1:N)
- User ↔ Video (Likes, History)











