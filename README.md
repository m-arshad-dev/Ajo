# ReliefNet Starter Stack

This repository now includes an initial implementation baseline:

- **Backend:** Node.js + Express (`/backend`)
- **Database:** PostgreSQL via `pg`
- **Frontend:** Flutter app (`/frontend`)

## Backend setup

1. Copy env file:
   ```bash
   cp backend/.env.example backend/.env
   ```
2. Install dependencies:
   ```bash
   cd backend && npm install
   ```
3. Ensure PostgreSQL is running and database exists (`reliefnet`).
4. Start server:
   ```bash
   npm run dev
   ```

APIs:
- `GET /health`
- `GET /api/disasters`
- `POST /api/disasters`

## Flutter setup

1. Install Flutter SDK.
2. Fetch packages:
   ```bash
   cd frontend && flutter pub get
   ```
3. Run app:
   ```bash
   flutter run
   ```

By default, Flutter fetches from `http://localhost:4000/api/disasters`.
