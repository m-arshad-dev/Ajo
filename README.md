# ReliefNet Starter Implementation

This repository now includes a starter implementation based on the project plan:

- **Backend:** Node.js + Express + PostgreSQL (`backend/`)
- **Frontend:** Flutter Android-first app (`frontend/`)

## Backend setup
1. Copy env:
   ```bash
   cp backend/.env.example backend/.env
   ```
2. Install deps:
   ```bash
   cd backend && npm install
   ```
3. Ensure PostgreSQL is running and DB exists.
4. Run migration:
   ```bash
   npm run db:migrate
   ```
5. Start API:
   ```bash
   npm run dev
   ```

API endpoints:
- `GET /api/health`
- `GET /api/ready`
- `GET /api/disasters`
- `POST /api/disasters`

## Flutter setup
1. Install Flutter SDK.
2. Get packages:
   ```bash
   cd frontend && flutter pub get
   ```
3. Run app:
   ```bash
   flutter run
   ```

By default, the app calls `http://localhost:4000/api/disasters`.
