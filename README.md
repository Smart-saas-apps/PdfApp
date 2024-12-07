# BaseApp - Web Application Template

A full-stack web application template with authentication built using React, Node.js, and MongoDB.

## Features

- User authentication (Register/Login)
- Protected routes
- JWT-based authentication
- Modern UI with Tailwind CSS
- TypeScript support
- Redux state management
- MongoDB integration

## Tech Stack

### Frontend
- React
- TypeScript
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT
- Bcrypt

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Create .env files:

Backend (.env):
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

5. Start the servers:

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
