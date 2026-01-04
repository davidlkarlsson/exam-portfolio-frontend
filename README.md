# Portfolio – Frontend

This repository contains the frontend for my exam portfolio project.
The application is built with modern React tooling and focuses on clean architecture,
accessibility, and secure authentication using HttpOnly cookies.

The frontend communicates with a Spring Boot backend (Java) and provides both
public and protected content, including an admin interface.

---

## Features

- Public portfolio pages (About, Services, Projects, Contact)
- Authentication using JWT stored in HttpOnly cookies
- Role-based access (Admin / Public)
- Protected admin panel
- Project and content management (admin)
- Responsive and accessible UI
- Reusable component-based architecture
- Environment-based configuration

---

## Tech Stack

- **Next.js 16 (App Router)**
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Fetch API**
- **Lucide Icons**
- **JWT authentication via HttpOnly cookies**
- **Deployed with Render**

---

## Project Structure

```text
app/
├─ _components/        # Reusable UI components (no routing)
│  ├─ about/           # About section components
│  ├─ admin/           # Admin panel UI
│  ├─ buttons/         # Reusable button components
│  ├─ contact/         # Contact section components
│  ├─ footer/          # Footer component
│  ├─ header/          # Header / hero components
│  ├─ home/            # Home page sections
│  ├─ navbar/          # Navigation bar
│  ├─ projects/        # Projects section components
│  └─ services/        # Services section components
│
├─ _types/             # Shared TypeScript interfaces and types
├─ _utility/           # Utility functions (apiFetch, date helpers, jwt utils)
│
├─ (routes)/           # Route groups (URL structure)
│  ├─ login/           # /login – authentication page
│  └─ logout/          # /logout – logout handler and redirect
│
├─ layout.tsx          # Root layout
└─ page.tsx            # Home page (/)
```
---

## Authentication
Authentication is handled using JWT stored in HttpOnly cookies.

On the initial page load, the frontend reads the authentication cookie
on the server side and decodes the JWT to determine the authenticated user
and their role.

The decoded user information is passed to client components as props
and is used for conditional UI rendering (e.g. admin panel access).

All sensitive operations and admin endpoints are protected server-side
by the backend and do not rely on frontend role checks for security.


---

## Pages and Routes

### Public Routes

- `/` – Home page containing About, Services, Projects and Contact sections
- `/login` – Login page
- `/logout` – Logout handler and redirect

### Admin Access

Admin functionality is implemented as a protected UI component
that is conditionally rendered on the home page.
It is not exposed as a standalone route.

---

## API Integration

The frontend uses a combination of Next.js route handlers and shared fetch utilities
to communicate with the backend.

Public functionality (such as contact forms and project listings) is handled through
Next.js route handlers, while protected admin operations are performed via a shared
API helper that includes authentication credentials.

All sensitive operations are secured server-side by the backend, and the frontend
does not rely on client-side authorization for security.

---

## Styling

The application uses Tailwind CSS for styling.

Styles are applied directly in components to enable responsive layouts,
state-based styling (e.g. scroll and menu states), and consistent design
without relying on large global stylesheets.

---

## Environment Variables

The application uses environment variables for backend configuration.

For local development, create a `.env.local` file in the project root:

```env
BACKEND_URL=http://localhost:8080/api/v1
```

For production, configure the environment variable according to your deployment setup:

```env
BACKEND_URL=https://your-backend-url/api/v1
```

---

## How to run the Project

### Development

In the terminal:

```bash
npm install
npm run dev
```

The application will be available at:

http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

---

## Author

**David Karlsson**
Java Developer Student – STI Yrkeshögskola
Exam Portfolio Project