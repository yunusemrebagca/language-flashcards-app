This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To start, you can connect your own database with [vercel](https://vercel.com/) serverless postgresgl.\
Or you can use another database and api for site with a modification to the services. You can use the [dbml](https://dbdiagram.io/d/Language-Flashcards-App-659b12c8ac844320ae694ba5) to create a database schema.

Run the development server:\
(Also you should add --experimental-https in the dev script in the package.json if you are using HTTPS.)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Live Preview

[Live Preview](https://language-flashcards-app.vercel.app/)

## Used Technologies

- vercel serverless postgresql
- tailwindcss
- shadcn ui
- api routes
- react query (for server state management)
- axios
- zustand (for client state management)

## Database Schema

[dbml for database schema](https://dbdiagram.io/d/Language-Flashcards-App-659b12c8ac844320ae694ba5)
