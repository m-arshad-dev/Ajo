# ReliefNet Starter Build

## Completed in this sprint
- Backend validation/error middleware foundation
- Escrow lifecycle extensions (NGO + Victim confirmation)
- Inventory module for NGO-managed resources
- Flutter auth + role-aware dashboard entry
- DevOps bootstrap: Docker Compose, worker service, backend CI workflow

## Run with Docker
```bash
docker compose up --build
```

Services:
- PostgreSQL: `localhost:5432`
- Backend API: `localhost:4000`
- Notification worker (polling stub)

## Backend local setup
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

## Key backend endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/disasters`
- `POST /api/disasters` (admin)
- `POST /api/donations` (donor)
- `PATCH /api/donations/:donationId/approve` (admin)
- `PATCH /api/escrow/:donationId/ngo-confirm` (ngo)
- `PATCH /api/escrow/:donationId/victim-confirm` (victim)
- `POST /api/help-requests` (victim)
- `GET /api/help-requests` (admin/ngo)
- `POST /api/assignments` (admin)
- `GET /api/assignments` (admin/ngo/volunteer)
- `POST /api/inventory` (ngo)
- `GET /api/inventory` (admin/ngo)

## Backend tests
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
- `POST /api/disasters`
- `POST /api/donations` (donor token required)
- `PATCH /api/donations/:donationId/approve` (admin token required)

### Run backend tests

```bash
cd backend
npm test
```

## Flutter
## Flutter setup

```bash
cd frontend_flutter
flutter pub get
flutter run
```
Android emulator backend host is `10.0.2.2:4000`.

For Android emulator, backend URL uses `10.0.2.2:4000` in `main.dart`.
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
