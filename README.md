# ReliefNet Starter Build

This repository includes an active starter for:

- **Backend:** Node.js + Express + PostgreSQL
- **Frontend:** Flutter (Android-first)

## Structure

- `backend/` Express API server + SQL migrations
- `frontend_flutter/` Flutter mobile app
- `always_running_execution_plan.md` availability and ops plan

## Backend setup

```bash
cd backend
npm install
cp .env.example .env
npm run migrate
npm run dev
```

### Backend endpoints

- `GET /health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/disasters`
- `POST /api/disasters`
- `POST /api/donations` (donor token required)
- `PATCH /api/donations/:donationId/approve` (admin token required)

### Sample register payload

```json
{
  "role": "donor",
  "fullName": "Ali Khan",
  "email": "ali@example.com",
  "password": "Pass@1234"
}
```

### Sample create donation payload

```json
{
  "disasterId": 1,
  "donationType": "money",
  "amount": 5000
}
```

## Flutter setup

```bash
cd frontend_flutter
flutter pub get
flutter run
```

For Android emulator, backend URL uses `10.0.2.2:4000` in `main.dart`.
