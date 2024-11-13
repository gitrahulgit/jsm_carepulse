# CarePulse - Patient Management System

CarePulse is a comprehensive healthcare patient management system designed to facilitate streamlined scheduling, registration, and appointment management. Built with Next.js, the platform provides an efficient user experience for both patients and administrators, integrating advanced features such as SMS notifications and file storage.

<img src="https://github.com/gitrahulgit/jsm_carepulse/blob/main/public/assets/images/home-page-img.png" alt="Project Banner">

## Contributers:
This project was made possible by the collaborative efforts of a dedicated team. We extend our thanks to **V. Rahul**, **Sanket Satish Kale**, **Ankit Kumar**, and **Sonu Parmanik** for their invaluable contributions and commitment to bringing this project to life. Your hard work and teamwork are greatly appreciated!
## Table of Contents

- [CarePulse - Patient Management System](#carepulse---patient-management-system)
  - [Contributers:](#contributers)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
    - [Patient-Side Features](#patient-side-features)
    - [Admin-Side Features](#admin-side-features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Quick Start](#quick-start)
  - [Project Dependencies](#project-dependencies)
  - [Assets](#assets)
  - [More Resources](#more-resources)

---

## Introduction

CarePulse is a robust web-based application designed for healthcare organizations to manage patient registrations and appointments efficiently. The application allows patients to register, book, and manage their appointments seamlessly. Administrators have access to additional features, including appointment confirmations, cancellations, and SMS notifications to patients. The platform leverages Next.js for the front end, Appwrite for backend services, and Twilio for SMS functionality.

## Tech Stack

- **Next.js**: A powerful React framework for building web applications.
- **Appwrite**: Backend-as-a-Service (BaaS) for database and storage management.
- **TypeScript**: Provides static type-checking for improved code quality.
- **TailwindCSS**: A utility-first CSS framework for responsive design.
- **ShadCN**: For advanced UI components.
- **Twilio**: SMS notification services.

---

## Features

### Patient-Side Features

1. **Patient Registration**: Users can create a profile with essential details for appointment management.
2. **Appointment Booking**: Patients can book multiple appointments with available doctors.
3. **File Upload**: Secure file storage through Appwrite for patient documents or reports.
4. **Responsive Design**: Accessible across various devices and screen sizes.

### Admin-Side Features

1. **Appointment Management**: View and manage all scheduled appointments.
2. **Appointment Confirmation and Scheduling**: Admins can confirm and schedule appointment times.
3. **Appointment Cancellation**: Allows admins to cancel appointments when necessary.
4. **SMS Notifications**: Automatically sends SMS notifications on appointment confirmation.
5. **Performance Monitoring**: Integrated with Sentry for performance monitoring and error tracking.

---

## Getting Started

To set up CarePulse on your local environment, follow the steps below.

### Prerequisites

- **Git**: Version control for cloning and managing the repository.
- **Node.js**: Required for running the project.
- **npm**: Node Package Manager for installing dependencies.

### Quick Start

1. **Clone the Repository**

   ```bash
   git clone https://github.com/thehackersbrain/carepulse.git
   cd carepulse
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env.local` file in the root directory and include the following variables:

   ```env
   # Appwrite Configuration
   NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
   PROJECT_ID=
   API_KEY=
   DATABASE_ID=
   PATIENT_COLLECTION_ID=
   APPOINTMENT_COLLECTION_ID=
   NEXT_PUBLIC_BUCKET_ID=

   # Admin Passkey
   NEXT_PUBLIC_ADMIN_PASSKEY=111111
   ```

   Replace the placeholders with your Appwrite credentials, which can be obtained by signing up on the [Appwrite website](https://appwrite.io/).

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Project Dependencies

The CarePulse application relies on a variety of libraries and frameworks to deliver a seamless experience. Key dependencies include:

- **Next.js**: For building scalable and performant web applications.
- **React**: Core library for building interactive user interfaces.
- **Tailwind CSS**: For responsive and flexible styling.
- **Appwrite**: Backend management for handling database operations and file storage.
- **Radix UI**: Accessible UI components for a consistent user experience.
- **React Hook Form**: Simplifies form management.
- **Zod**: Provides schema validation for better data handling.
- **TypeScript**: Ensures static type checking for improved code quality.

For a complete list of dependencies, refer to the `package.json` file.

---

## Assets

All public assets used within this project can be found [here](https://drive.google.com/file/d/1yGvWFeSaH1_-aiQ1gejT23lqz5979RKB/view?usp=sharing).

---

## More Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Twilio Documentation](https://www.twilio.com/docs)
  
---
Check out the website [here](https://jsm-carepulse-rho.vercel.app/)