# Enterprise SAP Cloud Security Platform

## About My Project

I created this project to learn and demonstrate my understanding of SAP Security, Identity and Access Management (IAM), access governance, cloud security, and enterprise security concepts.

My goal was to create one connected enterprise security platform instead of building separate and unrelated features.

The project demonstrates how users, departments, managers, SAP roles, access requests, RBAC, Segregation of Duties (SoD), Joiner-Mover-Leaver (JML) processes, user provisioning, audit logs, compliance, emergency access, and AWS security concepts can work together as part of an enterprise security environment.

This is a portfolio and learning project built with simulated enterprise data. It is not connected to a live SAP or AWS production environment.

---

## Why I Built This Project

I am building my skills in SAP Security, SAP Cloud Security, IAM, access governance, and cloud security.

I wanted to create a project that would help me understand how security concepts are connected in a real enterprise environment.

While building this project, I focused on understanding questions such as:

- How are enterprise users organized?
- How are users assigned to departments and managers?
- How are SAP roles assigned to users?
- How does Role-Based Access Control work?
- How can conflicting access be identified?
- What happens when an employee joins, changes roles, or leaves a company?
- How are access requests approved or rejected?
- How is privileged emergency access controlled?
- Why are audit logs important?
- How can compliance and cloud security information be monitored?

The project helped me organize these concepts into one connected security platform.

---

## What I Built

I developed an Enterprise SAP Cloud Security Portal using HTML, CSS, and JavaScript.

The portal includes the following security modules.

### Authentication and Access Control

- Login portal
- Protected pages
- Session-based authentication demonstration
- Logout functionality

### Identity Administration

- Department Management
- User Management
- Role Management
- User Provisioning

### Access Governance

- Access Requests
- RBAC Matrix
- Segregation of Duties Analysis
- Joiner-Mover-Leaver Workflow
- Password Reset Requests
- Emergency Access / Firefighter ID

### Monitoring and Compliance

- Audit Logs
- Compliance Dashboard

### Cloud Security

- AWS Security Dashboard
- AWS IAM concepts
- AWS CloudTrail concepts
- Amazon CloudWatch concepts
- Amazon S3 security concepts
- Amazon EC2 security concepts
- Security Group concepts

---

## How My Project Is Connected

One of my main goals was to keep the project consistent.

The same departments, users, managers, and SAP roles are used across the different security modules.

The project follows this general structure:

```text
User / Security Administrator
            |
            v
Login and Authentication
            |
            v
Enterprise SAP Cloud Security Portal
            |
            +-------------------------------+
            |               |               |
            v               v               v
Identity             Access Governance   Monitoring &
Administration                           Compliance
     |                      |                 |
     v                      v                 v
Departments          Access Requests      Audit Logs
Users                RBAC Matrix          Compliance Dashboard
Roles                SoD Analysis
Provisioning         JML Workflow
                     Password Reset
                     Emergency Access
                            |
                            v
                    AWS Security Visibility
```

More detailed architecture and workflow diagrams are available in the `diagrams` folder.

---

## Department and User Structure

The project contains different business departments to demonstrate an enterprise environment.

The departments include:

- Finance
- Human Resources
- Procurement
- Sales
- Information Technology
- Security Operations
- Internal Audit
- Executive Management

Each department has its own users, manager, and SAP roles.

I used consistent department, manager, user, and role information throughout the portal so that the different modules remain connected.

---

## User and Role Management

The User Management module demonstrates how enterprise users can be organized and managed.

The Role Management module demonstrates SAP-style roles assigned to different business departments and responsibilities.

The roles are used throughout the project in:

- User Management
- Access Requests
- RBAC Matrix
- SoD Analysis
- JML Workflow
- User Provisioning
- Emergency Access

This helped me understand why consistent identity and role information is important in an enterprise security environment.

---

## Role-Based Access Control

The RBAC Matrix demonstrates how access can be assigned based on a user's role and business responsibilities.

The project includes permissions such as:

- Read
- Create
- Update
- Delete

Different SAP-style roles receive different permission levels based on their responsibilities.

Building this module helped me understand the principle of assigning access based on job responsibilities instead of giving every user the same permissions.

---

## Segregation of Duties

The SoD Analysis module demonstrates how conflicting roles can create security and business risks.

The module includes:

- Conflict identification
- Role comparison
- Department information
- Risk levels
- Security recommendations

Building this module helped me understand why one user should not have excessive or conflicting responsibilities.

For example, a user should not be able to perform and approve the same sensitive business process without proper controls.

---

## Joiner-Mover-Leaver Workflow

The JML Workflow demonstrates the identity lifecycle of employees.

### Joiner

A new employee joins the organization and receives appropriate access based on their department and responsibilities.

### Mover

An employee changes departments or job responsibilities and their access needs to be reviewed and updated.

### Leaver

An employee leaves the organization and their access needs to be removed.

Building this module helped me understand why user access should be managed throughout the entire employee lifecycle.

---

## User Provisioning

The User Provisioning module demonstrates the process of creating and assigning access to an enterprise user.

The workflow includes:

- Employee ID
- Employee name
- Department
- Manager
- SAP role
- Provisioning status

The module uses the same departments, managers, and SAP roles used throughout the project.

---

## Access Requests

The Access Requests module demonstrates how users can request access to enterprise roles.

The workflow demonstrates:

```text
Access Request
      |
      v
Manager Review
      |
      v
RBAC Check
      |
      v
SoD Analysis
      |
      v
Approval or Rejection
      |
      v
Audit Logging
      |
      v
Compliance Monitoring
```

This helped me understand how access governance controls can be used before access is granted.

---

## Password Reset Requests

The Password Reset module demonstrates common identity support activities.

The module includes examples such as:

- Forgotten passwords
- Locked accounts
- Expired passwords
- Request status tracking

This demonstrates how identity support activities can be tracked as part of an enterprise security environment.

---

## Emergency Access / Firefighter ID

The Emergency Access module demonstrates the SAP Firefighter concept.

Emergency access can be used when temporary privileged access is required for an urgent business or technical situation.

The module includes:

- Employee information
- Department
- Emergency role
- Business reason
- Access duration
- Approval status

Building this module helped me understand why privileged access should be temporary, approved, monitored, and auditable.

---

## Audit Logs

The Audit Logs module demonstrates the importance of recording security activities.

Audit information can help security teams understand:

- What action occurred
- Who performed the action
- When the action occurred
- Whether the activity needs further investigation

Building this module helped me understand why logging and monitoring are important parts of enterprise security.

---

## Compliance Dashboard

The Compliance Dashboard provides an overview of different security areas in the project.

It includes information related to:

- Users
- Roles
- Pending access requests
- SoD conflicts
- IAM controls
- RBAC
- JML
- Audit logging

The purpose of this dashboard is to demonstrate how security and compliance information can be presented in one location.

---

## AWS Security Dashboard

I also created an AWS Security Dashboard to demonstrate my understanding of cloud security concepts.

The dashboard includes concepts related to:

- AWS Identity and Access Management
- AWS CloudTrail
- Amazon CloudWatch
- Amazon S3
- Amazon EC2
- Security Groups

The AWS Security Dashboard is a portfolio demonstration and is not connected to a live AWS production environment.

---

## Architecture and Workflow Diagrams

I created Mermaid diagrams to document the project.

The diagrams include:

### Enterprise Security Architecture

This diagram demonstrates how authentication, identity administration, access governance, monitoring, compliance, and AWS security visibility are organized in the project.

### Access Governance Workflow

This diagram demonstrates how an access request moves through:

- Manager Review
- RBAC Validation
- SoD Analysis
- Approval or Rejection
- Audit Logging
- Compliance Monitoring

The diagrams are available in the `diagrams` folder.

---

## Technologies I Used

### Frontend Development

- HTML5
- CSS3
- JavaScript

### Security Concepts

- SAP Security
- Identity and Access Management
- Role-Based Access Control
- Segregation of Duties
- Joiner-Mover-Leaver Lifecycle
- Access Governance
- User Provisioning
- Emergency Access
- Audit Logging
- Compliance
- Cloud Security

### Development and Documentation

- Git
- GitHub
- Visual Studio Code
- Mermaid

---

## Project Structure

```text
Enterprise-SAP-Cloud-Security-Platform/
|
├── docs/
│   └── portal/
│       ├── index.html
│       ├── login.html
│       ├── dashboard.html
│       ├── departments.html
│       ├── user-management.html
│       ├── role-management.html
│       ├── access-requests.html
│       ├── audit-logs.html
│       ├── rbac-matrix.html
│       ├── sod-analysis.html
│       ├── jml-workflow.html
│       ├── compliance-dashboard.html
│       ├── aws-security.html
│       ├── user-provisioning.html
│       ├── password-reset.html
│       ├── emergency-access.html
│       ├── style.css
│       ├── app.js
│       └── README.md
│
├── diagrams/
│   ├── enterprise-security-architecture.md
│   └── access-governance.md
│
└── README.md
```

---

## What I Learned From This Project

While building this project, I gained a better understanding of:

- SAP Security concepts
- Identity and Access Management
- Enterprise user management
- SAP-style role management
- Role-Based Access Control
- Segregation of Duties
- Identity lifecycle management
- Joiner-Mover-Leaver processes
- User provisioning
- Access request workflows
- Password reset processes
- Emergency privileged access
- Audit logging
- Compliance monitoring
- AWS security concepts
- Git and GitHub version control
- Project organization
- Architecture documentation

One of the most important things I learned was how these security concepts connect to each other as part of an enterprise security process.

---

## Current Project Status

The core Enterprise SAP Cloud Security Portal and project documentation are complete.

My current focus is on reviewing the project, strengthening my SAP Security knowledge, and preparing to explain the security concepts and project decisions in technical interviews.

---

## Future Enhancements

As I continue learning and improving the project, possible future enhancements include:

- Backend development
- Database integration
- Python security automation
- Terraform Infrastructure as Code
- Live AWS integration
- SAP S/4HANA integration
- SAP BTP
- SAP Cloud Identity Services
- Identity Authentication Service (IAS)
- Identity Provisioning Service (IPS)
- SAP GRC
- Multi-factor authentication
- Advanced security reporting

I plan to add future technologies only after learning and implementing them as working project components.

---

## Project Note

This project was created as part of my learning journey in SAP Security, IAM, access governance, and cloud security.

The enterprise information used in the portal is simulated for demonstration purposes.


---

## Project Creator

**Supraja Lankalapalli**

Enterprise SAP Cloud Security Portfolio Project