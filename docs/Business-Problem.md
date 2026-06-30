# Business Problem

## Background

SL Cloud Technologies is a multinational enterprise with over 12,000 employees operating across Finance, Human Resources, Procurement, Sales, IT, Security, and Internal Audit departments. The organization uses SAP S/4HANA to manage critical business operations and AWS Cloud to host supporting applications and infrastructure.

As the company continues to grow, managing user identities, business roles, and application access becomes increasingly complex. A secure Identity and Access Management (IAM) strategy is required to protect sensitive business information and maintain operational efficiency.

## Business Problem

The organization currently manages user access manually across multiple SAP modules. This process creates several security and operational challenges:

- Excessive user permissions
- Unauthorized access to sensitive business data
- Segregation of Duties (SoD) conflicts
- Delays in onboarding and offboarding employees
- Compliance and audit findings
- Limited visibility into user activities

These challenges increase security risks and make it difficult to maintain regulatory compliance.

## Proposed Solution

This project proposes the design of an Enterprise SAP Cloud Security Platform that integrates SAP security with AWS cloud services.

The solution includes:

- SAP Identity and Access Management (IAM)
- Role-Based Access Control (RBAC)
- Joiner, Mover, Leaver (JML) process
- Principle of Least Privilege
- Segregation of Duties (SoD) analysis
- AWS IAM integration
- AWS CloudTrail for auditing
- AWS CloudWatch for monitoring
- Infrastructure automation using Terraform
- Python automation for user onboarding and audit reporting

## Expected Benefits

The proposed solution will provide:

- Improved enterprise security
- Faster user provisioning
- Reduced insider threats
- Better compliance with security standards
- Simplified access reviews
- Improved audit readiness
- Centralized identity and access management
