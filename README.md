# ChikitsaPlus

## Overview

The ChikitsaPlus is a web application designed to streamline and optimize the operations of clinics. It provides a user-friendly interface for receptionists and doctors to efficiently manage patient data, appointments, and payments. The system incorporates various technologies and design patterns to ensure robustness, security, and scalability.

## Tech Stack
- **FrameWork**: TurboRepo, Next.js
- **Frontend**: React, Material UI, Recoil
- **DataBase**: MongoDB, ( ongoing migrating to Prisma )
- **Backend**: NextJs(SSR)
- **Language**: TypeScript (strict typing)
- **Validation**: Zod
- **Testing**: Jest
- **Authentication**: JWT Tokens

## Features

- **Automated Patient Notifications**: The system includes an automatic messaging system that sends reminders to patients 15 minutes before their scheduled appointments. This eliminates the need for receptionists to manually call patients, reducing waiting times and anxiety.

- **Efficient Patient Data Management**: Receptionists and doctors can easily maintain patient records within the application. This not only saves time but also reduces paper usage.

- **Integrated Payment System**: The application includes an in-built payment system, streamlining the payment process and minimizing payment-related hassles for both clinics and patients.

- **Appointment Management**: The system provides a comprehensive appointment management module. This eliminates the need for manual registration of timings and available slots.

- **Automated Appointment Reminders**: Patients receive timely notifications for their future appointments, ensuring a steady flow of business for clinics and helping patients manage their time effectively.

## Design Patterns

- **Singleton Pattern**: This pattern is utilized to ensure that certain resources are instantiated only once, reducing unnecessary overhead and improving system efficiency.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/abhishekSolanki01/ChikitsPlus_TurboRepo.git`
2. Install dependencies: `npm install`
3. Start the development server:
   - For Receptionist's view
   ```
   cd apps/receptionist_client
   npm run dev
   ```
6. Open your browser and navigate to `http://localhost:3000`

## Testing

The project includes a suite of unit and integration tests written using Jest. To run the tests, use the following command:

```bash
npm run test
