# Blood Management System (BMS) - Frontend

![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router_DOM-7.13.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![React Icons](https://img.shields.io/badge/React_Icons-5.5.0-e91e63?style=for-the-badge&logo=react&logoColor=white)

---

## 🌟 Overview
The frontend application for the **Blood Management System (BMS)** offers an intuitive, modern, and highly responsive user interface. It bridges the gap between voluntary blood donors and those in urgent need of blood. Built with cutting-edge tools, this project ensures a rich user experience across all devices.

---

## ✨ Key Features
* **🏢 Verified Blood Banks**: Locate nearby blood banks with real-time data sourced directly from official government websites.
* **🔍 Intelligent Donor Search**: Find available donors in your vicinity using precise filters for blood group and location.
* **📝 Donor Registration**: A seamless and user-friendly onboarding process to become a voluntary lifesaver.
* **🩸 Apply for Blood**: A streamlined module to quickly request and apply for blood during emergencies.
* **🔐 OTP Verification**: Secure authentication and identity verification flows powered by real-time OTP validation.
* **✉️ Email Verification**: Additional layers of security to authenticate users and ensure clean data.
* **📰 Information Hub**: Access useful blogs, articles, and educational content about the importance of blood donation.
* **📱 Responsive Design**: Fully optimized layouts ensuring perfect usability on mobile phones, tablets, and desktop computers.

---

## 📂 Project Structure
```text
src/
├── api/             # API integration and service functions
├── assets/          # Static assets like images and global stylesheets
├── components/      # Reusable UI components (Navbar, Footer, Cards, etc.)
├── pages/           # Application route pages (Home, Search, Register, etc.)
├── App.jsx          # Main application routing and layout
└── main.jsx         # Application entry point
```

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Make sure you have Node.js and npm installed on your system.
* Node.js (v18 or higher recommended)
* npm (Node Package Manager)

### Installation Steps

1. **Clone the repository** and navigate to the frontend directory:
   ```bash
   cd RTBMS_Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The application will quickly compile and run locally at `http://localhost:5173`.*

---

## 🛠️ Build for Production
When you are ready to deploy to production, run the build command to generate a highly optimized static bundle:
```bash
npm run build
```
The optimized files will be ready in the `dist` folder, which can be deployed to any static hosting provider.

---

## 💻 Technology Stack

* **Frontend Framework:** React (v19.2.0)
* **Build Tool:** Vite (v7.3.1)
* **Styling:** Tailwind CSS (v4.2.1)
* **Routing:** React Router DOM (v7.13.1)
* **Icons:** React Icons (v5.5.0)
* **Linting:** ESLint (v9.39.1)
