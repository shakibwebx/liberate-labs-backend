Event Scheduler (Backend)
A clean, modular Express + TypeScript + MongoDB backend for managing events in the Event Scheduler application.

Features
✅ Built with Express and TypeScript
✅ Uses MongoDB via Mongoose
✅ Environment variable management with dotenv
✅ Handles CORS for secure API requests
✅ Uses UUID for consistent ID management if needed
✅ Linting with ESLint + Prettier
✅ Husky and lint-staged ready for pre-commit consistency
✅ Nodemon-like hot reload with ts-node-dev

Project Structure
src/ – Contains your TypeScript source files:

server.ts – Entry point

routes/ – API route handlers

controllers/ – Controller logic

models/ – Mongoose models

utils/ – Utility functions

dist/ – Compiled JavaScript files after build

Getting Started
1️⃣ Clone the repository
bash
Copy
Edit
git clone <repo-url>
cd event-scheduler-backend
2️⃣ Install dependencies
bash
Copy
Edit
npm install
# or
yarn
3️⃣ Create a .env file
env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
4️⃣ Run in development
bash
Copy
Edit
npm run dev
# or
yarn dev
5️⃣ Build for production
bash
Copy
Edit
npm run build
# or
yarn build
6️⃣ Run in production
bash
Copy
Edit
npm start
# or
yarn start
Available Scripts
npm run dev – Run in development with hot reload (ts-node-dev)

npm run build – Compile TypeScript to dist/

npm start – Run the compiled server

npm run lint – Lint TypeScript files

npm run lint:fix – Fix lint issues automatically

npm run prettier – Format files using Prettier

npm run prettier:fix – Format and fix using Prettier

Tech Stack
Node.js

Express

TypeScript

MongoDB (via Mongoose)

dotenv

UUID

ESLint + Prettier

Deployment
You can deploy to Railway, Render, Vercel (Serverless Functions), or DigitalOcean:

1️⃣ Build:

bash
Copy
Edit
npm run build
2️⃣ Ensure environment variables are configured on your platform.

3️⃣ Run:

bash
Copy
Edit
npm start
Recommended VS Code Extensions
✅ ESLint
✅ Prettier
✅ Dotenv
✅ Tailwind CSS IntelliSense (for full-stack workflow)

Author
Md Habibur Rahman

🌐 Portfolio: https://habiburwebx.vercel.app/
📦 Best projects:

https://gadgets-hub-topaz.vercel.app/

https://medinest-client.vercel.app/

https://fatema-telecom-skb.vercel.app/

🐙 GitHub: https://github.com/shakibwebx

