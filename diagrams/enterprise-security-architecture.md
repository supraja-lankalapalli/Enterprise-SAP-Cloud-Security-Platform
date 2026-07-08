# Enterprise Security Architecture

```mermaid
flowchart TD

    User[User / Security Administrator]

    Login[Login & Authentication]

    Portal[Enterprise SAP Cloud Security Portal]

    Identity[Identity Administration]
    Departments[Department Management]
    Users[User Management]
    Roles[Role Management]
    Provisioning[User Provisioning]

    Governance[Access Governance]
    Requests[Access Requests]
    RBAC[RBAC Matrix]
    SoD[SoD Analysis]
    JML[JML Workflow]
    Password[Password Reset]
    Emergency[Emergency Access / Firefighter ID]

    Monitoring[Monitoring & Compliance]
    Audit[Audit Logs]
    Compliance[Compliance Dashboard]

    Cloud[AWS Security Visibility]
    AWS[AWS Security Dashboard]

    User --> Login
    Login --> Portal

    Portal --> Identity
    Identity --> Departments
    Identity --> Users
    Identity --> Roles
    Identity --> Provisioning

    Portal --> Governance
    Governance --> Requests
    Governance --> RBAC
    Governance --> SoD
    Governance --> JML
    Governance --> Password
    Governance --> Emergency

    Portal --> Monitoring
    Monitoring --> Audit
    Monitoring --> Compliance

    Portal --> Cloud
    Cloud --> AWS