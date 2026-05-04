# ReliefNet Starter Build

This repository includes an active starter for:

- **Backend:** Node.js + Express + PostgreSQL
- **Frontend:** Flutter (Android-first)

## Structure

- `backend/` Express API server + SQL migrations + backend tests
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
- `POST /api/disasters` (admin token required)
- `POST /api/donations` (donor token required)
- `PATCH /api/donations/:donationId/approve` (admin token required)
- `POST /api/help-requests` (victim token required)
- `GET /api/help-requests` (admin/ngo token required)
- `PATCH /api/help-requests/:requestId/status` (admin/ngo token required)
- `POST /api/assignments` (admin token required)
- `GET /api/assignments` (admin/ngo/volunteer token required)
- `PATCH /api/assignments/:assignmentId/status` (admin/volunteer token required)

### Run backend tests

```bash
cd backend
npm test
```

## Flutter setup

```bash
cd frontend_flutter
flutter pub get
flutter run
```

For Android emulator, backend URL uses `10.0.2.2:4000` in `main.dart`.
