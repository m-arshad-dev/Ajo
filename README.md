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
```bash
cd backend
npm test
```

## Flutter
```bash
cd frontend_flutter
flutter pub get
flutter run
```
Android emulator backend host is `10.0.2.2:4000`.
