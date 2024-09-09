# Mailtrap-Auth

Email authentication practice using mailtrap. Users can register to receive an email containing a verification code which is then inputted into the site for access to the dashboard.
Password reset is also done via an email where users can enter their email associated with their account to get a change password link.

This app is using the Mailtrap free tier and demo domain which only allows emails to be sent to yourself.

## Details

- React JS and TailwindCSS styling, framer motion animations for frontend
- Node, Express, with noSQL mongoDB backend
- API endpoints for login, signup, logout, verify email, reset password, check token, etc.
- Protected routes, JWT token authentication, and Mailtrap for email delivery.

## Setup

Initialize .env file

```
PORT=5000
MONGO_URI=YOUR_MONGO_URI
JWT_SECRET=YOUR_JWT_SECRET_KEY
NODE_ENV=development
MAILTRAP_TOKEN=YOUR_MAILTRAP_TOKEN
MAILTRAP_ENDPOINT=send.api.mailtrap.io
CLIENT_URL= http://localhost:5000

```

Build and run with

```
npm run build
npm start
```
