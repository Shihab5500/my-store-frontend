# MyStore - Next.js E-Commerce Application

A simple e-commerce application built with **Next.js 15/16 (App Router)** and **Express.js**. This project features a dynamic landing page, product listing, details view, and a protected route for adding new items with basic authentication.

## 🚀 Features

- **Dynamic Landing Page:** Contains 7 sections including Hero, Features, Featured Products, About Us, Stats, Testimonials, and Newsletter.
- **Authentication:** Mock login system using cookies (Credentials: `admin@example.com` / `123456`).
- **Protected Routes:** The `/add-item` page is protected via Middleware; only logged-in users can access it.
- **Dynamic Data Fetching:** Products are fetched from an Express.js backend API.
- **Add Product:** Authenticated users can add new products which are saved to the server.
- **Responsive Design:** Fully responsive UI with a mobile-friendly drawer menu.
- **Animations:** Smooth scrolling and fade-in animations using Framer Motion.
- **Toast Notifications:** Real-time feedback for user actions.

## 🛠️ Technologies Used

- **Frontend:** Next.js 16 (App Router), Tailwind CSS, Framer Motion, React Icons, React Hot Toast.
- **Backend:** Express.js, CORS, Body-Parser.
- **Authentication:** JS-Cookie.

## ⚙️ Setup & Installation Instructions

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have **Node.js** installed on your system.

### 1. Clone the Repository
```bash
git clone (https://github.com/Shihab5500/my-store-frontend.git)
cd mystore
# If you are in the root directory
npm install
# Start the development server
npm run dev
