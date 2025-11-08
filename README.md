# Slot Swapper (Local Only)

A mini MERN application that allows users to create events and swap slots between users.

This project runs **locally only** (no deployment).

## Features

- Register / Login users (JWT auth)
- Create events with date/time range
- Mark events as `SWAPPABLE`
- View other users’ swappable events
- Send swap request
- Accept / Reject swap requests

## Tech Used

| Part | Tech |
|------|------|
| Frontend | React |
| Backend | Node.js + Express |
| Database | MongoDB Atlas / Local MongoDB |
| Auth | JWT |

---

## Run Project Locally

### Backend

cd backend
npm install
npm run dev


Create a `.env` file inside backend folder:

MONGO_URI=<your mongodb connection string>
JWT_SECRET=<any random secret>
PORT=5000


---

### Frontend


cd frontend
npm install
npm start

Create `.env` inside frontend folder:


REACT_APP_API_URL=http://localhost:5000

---

## Usage Flow

### User 2 (create swappable slot)
1. login as user2  
2. create an event  
3. update event status to `SWAPPABLE`

### User 1 (request swap)
1. login as user1  
2. go to **Swappable Slots page**  
3. press **request swap** button  
4. paste your own event ID (which should be SWAPPABLE also)

### User 2 (respond to swap)
1. login as user2  
2. go to **Swap Requests page**  
3. Accept or Reject

-------------------------