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
<img width="1920" height="1080" alt="Screenshot (186)" src="https://github.com/user-attachments/assets/da2bf467-4697-421b-9597-6203ac22745e" />
<img width="1920" height="1080" alt="Screenshot (187)" src="https://github.com/user-attachments/assets/3442d3dc-8659-45b2-a8a6-e807a65b5ed2" />
<img width="1920" height="1080" alt="Screenshot (188)" src="https://github.com/user-attachments/assets/b7245fdb-6b54-480c-ae57-d537be5020d5" />

<img width="1920" height="1080" alt="Screenshot (189)" src="https://github.com/user-attachments/assets/fc20a48a-542f-44f1-a5cb-f316738dec8f" />


<img width="1920" height="1080" alt="Screenshot (190)" src="https://github.com/user-attachments/assets/f2961236-3844-438d-a5a0-54f83a2f0003" />

<img width="1920" height="1080" alt="Screenshot (191)" src="https://github.com/user-attachments/assets/b6961baa-e54b-4649-82d3-4bacac5717ff" />

<img width="1920" height="1080" alt="Screenshot (192)" src="https://github.com/user-attachments/assets/d1565be1-49b9-499f-8b15-c21dd303b3b1" />

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
