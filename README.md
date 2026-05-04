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
- `GET /api/disasters`
- `POST /api/disasters`

### Sample create disaster payload

```json
{
  "title": "Urban Flood Response",
  "location": "Karachi",
  "severity": "high"
}
```

## Flutter setup

```bash
cd frontend_flutter
flutter pub get
flutter run
```

For Android emulator, backend URL uses `10.0.2.2:4000` in `main.dart`.
