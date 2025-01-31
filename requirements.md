# Full Stack Node React Typescript Code Test

## Revision 7

Thank you for taking the time to complete our code assessment. We appreciate your interest in the position and are excited to see your work.

The assessment will be a chance for you to demonstrate your coding skills. It will consist of a series of questions that will test your knowledge of programming concepts and your problem-solving ability.

The assessment should take about **2-3 hours** to complete. If you have any questions, please feel free to contact us. We look forward to seeing your work!

---

## Important

This assignment is to show your development skills and key functionalities. It's not about being perfect but showcasing your abilities. **KEEP IT SIMPLE.**

Keep it in **1 mono repo:**

```
/root
|--/client   (Vite)
|--/server (Nestjs)
```

_Not doing Optional / Bonus will not impact your performance._

---

## Backend API Development

### Requirements:

- Create a basic backend API using **Node.js with NestJS in TypeScript**. ([NestJS Docs](https://docs.nestjs.com/first-steps))
- Use **Node with Nest, Prisma** ([Prisma Docs](https://www.prisma.io/docs/getting-started/quickstart-prismaPostgres))
- Use **JWT with passport** ([Passport Docs](https://docs.nestjs.com/recipes/passport))
- Use **Zod** or **Class Validators** for DTOs
- Create an **invoice route**:
  - `/invoices` - Displays a list of invoices fetched from the backend API.
  - `/invoices/:id` - Display an individual invoice.
  - `/auth/login` - Login endpoint.
- Use **PostgreSQL**
- Use **Docker** to set it up.
- Use **Prisma ORM** to access your data.
- Use **Prisma** to seed all demo data. Provide a username and password for login in documentation.

### Bonus/Optional:

- Implement **pagination middleware**
- Proper **middleware for logging**
- Good use of **exceptions**
- Use **Vitest (or Jest) to write unit tests**
- Create a **proper README**

### Backend Resources:

#### Database Schema:

- **User**: `id`, `email`, `password`, `name`
- **Invoice**: `id`, `vendor_name`, `amount`, `due_date`, `description`, `user_id`, `paid` (boolean)

#### API Endpoints:

- **POST** `/auth/login`: Authenticate a user and return an authentication token.
- **GET** `/invoices`: Retrieve all invoices.
- **GET** `/invoices/:id`: Retrieve details of a specific invoice for modal display.

### Expected Features and Functionalities:

- **Seed user data** and have a simple login using Prisma Seed.
- **Fetching invoices**: API should be able to serve invoices.
- **Detailed View**: Provide detailed information on a specific invoice when queried by its ID.

### Steps:

1. **Setup**: Initialize a new backend server project using NestJS. ([NestJS Docs](https://docs.nestjs.com/first-steps))
2. **Database Connection**: Connect your backend to a database and define schemas/models for invoices. ([Prisma Docs](https://www.prisma.io/docs/getting-started/quickstart-prismaPostgres))
3. **API Routes**: Set up the necessary API routes.
4. **Error Handling**: Ensure the API has appropriate error-handling mechanisms.
5. **Authentication**: Implement an authentication mechanism to secure your API.
6. **Bonus/Optional**:
   - Add error handling mechanisms.
   - Write unit tests with **Vitest**.
   - Implement **logging middleware**.

---

## Frontend

### Requirements:

- Set up a **React application using Vite**. ([Vite Guide](https://vite.dev/guide/))
- Use **TypeScript + React**.
- Use **Redux Toolkit** for state management.
- Use **React Query**.
- Use **Zod for frontend validation** and **Tailwind for styling**.
  - [Tailwind Docs](https://tailwindcss.com/docs/guides/vite)
  - [Zod Docs](https://zod.dev/?id=installation)
- Simple Login (**Registration is not needed**).
- Create **two main routes/pages**:
  - `/login`: Login Page
  - `/invoices`: Displays a list of invoices fetched from the backend API.
- Use **MUI, Shadcn, or Tanstack Table**.
- Clicking on a row of an invoice should open a **popup/modal** to show its details.

### Bonus/Optional:

- Implement **error handling** for failed API requests.
- Implement **pagination**.
- Use **Playwright** to test auto logging in and checking if the invoice page has invoices.
- Keep it simple.
- Create a **proper README**.

### Frontend Mock-up:

We have provided a **basic mock-up** of the website's layout. Use this as a guideline.

**(Mock-up Image: PL_frontend.png)**

### Steps:

1. **Setup**: Initialize a new React app using Vite. Install required dependencies like Redux, Axios, etc.
2. **Use Tailwind** for styling.
3. **Redux Toolkit Setup**: Implement Redux for state management.
4. **Routing**: Set up React Router with `/invoices`.
5. **UI Components**:
   - **InvoiceList**: Display a list of invoices.
   - **Popup/Modal**: Display invoice details.
6. **Fetch and Display Data**: Connect components to the Redux store and fetch data from the API.
7. **Popup/Modal**: Clicking an invoice should open a modal with detailed information.
8. **Bonus/Optional**:
   - Implement error handling.
   - Add a **Registration page**.
   - Use Playwright to test login and invoice display.

---

## Final Notes

- Create a **docker-compose** for the database and/or other services.
- Make the app as **easy as possible** to seed the database and build/run for testing.
- Keep it **simple** but **well-structured**.
- Not doing Bonus/Optional **will not impact your performance**.

---

## Submission

Once you have completed the assignment, follow these steps:

1. **Create a GitHub repo**.
2. **Email repo URL link** to:
   - 📧 [cghiurea@altametrics.com](mailto:cghiurea@altametrics.com)
   - 📧 CC: [hserafinjr@altametrics.com](mailto:hserafinjr@altametrics.com)
3. **Include**:
   - First Name
   - Last Name
   - Any comments you wish to include.

---

### References:

- [Vite Guide](https://vite.dev/guide/)
- [Tailwind Setup](https://tailwindcss.com/docs/guides/vite)
- [Zod Docs](https://zod.dev/?id=installation)
