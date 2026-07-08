# Access Governance Workflow

```mermaid
flowchart TD

    Request[Access Request Submitted]
    Manager[Manager Review]
    RBAC[RBAC Permission Check]
    SoD[SoD Conflict Analysis]
    Decision{Approve or Reject?}
    Approved[Access Approved]
    Rejected[Access Rejected]
    Audit[Audit Logs Updated]
    Compliance[Compliance Dashboard Updated]

    Request --> Manager
    Manager --> RBAC
    RBAC --> SoD
    SoD --> Decision

    Decision -->|Approved| Approved
    Decision -->|Rejected| Rejected

    Approved --> Audit
    Rejected --> Audit
    Audit --> Compliance