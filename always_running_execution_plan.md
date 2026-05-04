# ReliefNet Always-Running Build & Operations Plan

## Goal
Build and operate ReliefNet so the platform remains continuously available (24/7), especially during active disaster response.

## Phase 1 — Foundation (Week 1–2)
1. Finalize scope from `final_documentation.md`:
   - Multi-role users (Donor, Volunteer, NGO, Admin, Victim)
   - Donations + escrow flow
   - Disaster events + map + notifications
2. Lock architecture:
   - Frontend: React (web dashboard) + Flutter (Android-first mobile)
   - Backend: Node.js + Express
   - Database: PostgreSQL (primary transactional data)
   - Queue/async jobs: Redis + BullMQ (notifications, retries)
3. Define uptime target:
   - Availability SLO: **99.9% minimum**
   - Recovery objective: RTO <= 30 minutes, RPO <= 5 minutes

## Phase 2 — Core Build (Week 3–6)
1. Implement role-based authentication and authorization.
2. Build critical modules in this order:
   - Disaster management
   - Donation + escrow lifecycle
   - Volunteer assignment
   - NGO distribution + inventory updates
   - Victim help requests
3. Add observability from day one:
   - Structured logs
   - Metrics (API latency, error rate, queue depth)
   - Health endpoints (`/health`, `/ready`)

## Phase 3 — Reliability Engineering (Week 7–8)
1. High availability deployment:
   - 2+ backend instances behind a load balancer
   - Managed PostgreSQL with automated backups
   - Multi-zone deployment (if supported by host)
2. Failure handling:
   - Retries + dead-letter queues for notification failures
   - Idempotency keys for donation/escrow actions
   - Circuit breaker for third-party APIs (SMS, maps, payments)
3. Zero-downtime releases:
   - Blue/green or rolling deployment
   - Backward-compatible DB migrations

## Phase 4 — Security + Compliance (Week 9)
1. Enforce MFA for Admin/NGO accounts.
2. Encrypt sensitive data in transit and at rest.
3. Add audit logs for all escrow and approval actions.
4. Apply least-privilege access controls per role.

## Phase 5 — Testing + Go-Live (Week 10)
1. Execute complete test plan from documentation:
   - Unit, integration, system, and UAT tests
2. Add reliability tests:
   - Load testing at disaster spike traffic
   - Chaos tests (instance restarts, DB failover)
3. Go-live checklist:
   - Backup restore verified
   - On-call runbook ready
   - Alert thresholds tuned

## Always-Running Operations Model (Post Launch)

### 1) 24/7 Monitoring
- Monitor uptime, API latency, DB health, queue backlog, and failed donations.
- Trigger pager alerts for:
  - Error rate > 2%
  - P95 API latency > 1.5s
  - Any escrow processing failure

### 2) Incident Response
- Severity levels: SEV1 (outage), SEV2 (critical degradation), SEV3 (minor)
- On-call rotation with clear ownership:
  - Backend owner
  - Mobile/Web owner
  - Database/Infra owner
- Target: acknowledge incidents in <= 10 minutes.

### 3) Disaster-Mode Scaling
- Auto-scale backend when traffic increases.
- Prioritize critical endpoints during overload:
  1. Help requests
  2. Donation processing
  3. Disaster updates
  4. Secondary analytics

### 4) Data Protection & Recovery
- Automated DB backups every 5 minutes (WAL/incremental + daily full backup).
- Monthly disaster recovery drill.
- Secondary read replica for fast failover.

### 5) Continuous Improvement Loop
- Weekly reliability review (incidents, near misses, MTTR).
- Monthly performance optimization sprint.
- Quarterly architecture resilience review.

## Definition of Success
ReliefNet is considered successful when:
1. Core user journeys (donate, request help, assign volunteer, approve escrow) work end-to-end.
2. Availability remains at or above 99.9%.
3. No single point of failure can fully stop relief operations.
4. Recovery procedures are tested and repeatable.

## Practical Rule
**System should always be in running stage:**
- If one service fails, another instance continues serving.
- If an external API fails, the platform degrades gracefully and retries.
- If deployment happens, users should experience no downtime.
