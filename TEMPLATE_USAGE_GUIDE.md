# BaseApp Template Usage Guide

This guide explains how to use the BaseApp template for creating new web applications. The template provides a full-stack setup with authentication, TypeScript, React, Node.js, and MongoDB.

## Table of Contents
- [Getting Started](#getting-started)
- [Template Features](#template-features)
- [Directory Structure](#directory-structure)
- [Step-by-Step Setup Guide](#step-by-step-setup-guide)
- [Customization Guide](#customization-guide)
- [Common Tasks](#common-tasks)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Method 1: Using GitHub Template
1. Visit https://github.com/Smart-saas-apps/BaseApp
2. Click "Use this template"
3. Choose "Create a new repository"
4. Name your repository and create it

### Method 2: Direct Clone
```bash
# Clone the repository
git clone https://github.com/Smart-saas-apps/BaseApp.git my-new-project

# Navigate to project directory
cd my-new-project

# Remove existing git history
rm -rf .git

# Initialize new git repository
git init

# Create new initial commit
git add .
git commit -m "Initial commit from BaseApp template"
```

## Template Features

### Frontend Features
- ✅ React with TypeScript
- ✅ Redux Toolkit for state management
- ✅ React Router for navigation
- ✅ Tailwind CSS for styling
- ✅ Authentication flow
- ✅ Protected routes
- ✅ Responsive components
- ✅ Form validation
- ✅ TypeScript configurations
- ✅ Environment variables setup

### Backend Features
- ✅ Node.js/Express server
- ✅ MongoDB integration
- ✅ JWT authentication
- ✅ Password hashing
- ✅ User management
- ✅ Protected routes
- ✅ Error handling
- ✅ Environment variables setup

## Directory Structure

```
my-new-project/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
│   ├── src/                 # Source code
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store and slices
│   │   ├── utils/          # Utility functions
│   │   └── styles/         # CSS styles
│   ├── .env.example        # Example environment variables
│   └── package.json        # Frontend dependencies
│
└── backend/                 # Node.js backend application
    ├── middleware/         # Express middleware
    ├── models/            # MongoDB models
    ├── routes/            # API routes
    ├── .env.example       # Example environment variables
    └── package.json       # Backend dependencies
```

## Step-by-Step Setup Guide

### 1. Environment Setup

#### Backend (.env)
```bash
cd backend
cp .env.example .env
```

Edit `.env` with your values:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

#### Frontend (.env)
```bash
cd frontend
cp .env.example .env
```

Edit `.env` with your values:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

### 2. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install
```

### 3. Start Development Servers

```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm start
```

## Customization Guide

### 1. Branding Changes
- Update `frontend/public/index.html` with your app name
- Modify `frontend/src/components/Navbar.tsx` with your logo and branding
- Update `package.json` in both directories with your app name

### 2. Adding New Features

#### Adding New Pages
1. Create new page component in `frontend/src/pages/`
2. Add route in `frontend/src/App.tsx`
3. Update navigation in `Navbar.tsx`

Example:
```tsx
// frontend/src/pages/NewPage.tsx
import React from 'react';

const NewPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>New Page</h1>
    </div>
  );
};

export default NewPage;

// Add to App.tsx routes
<Route path="/new-page" element={<NewPage />} />
```

#### Adding New API Routes
1. Create new route file in `backend/routes/`
2. Add controller logic
3. Register route in `server.js`

Example:
```javascript
// backend/routes/newRoute.js
const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  // Your route logic here
});

module.exports = router;

// Add to server.js
app.use('/api/new-route', require('./routes/newRoute'));
```

### 3. Database Changes
To add new fields to User model:

```javascript
// backend/models/User.js
const userSchema = new mongoose.Schema({
  // Existing fields...
  newField: {
    type: String,
    required: false
  }
});
```

## Common Tasks

### Adding Authentication to New Routes
Frontend:
```tsx
// Wrap route with PrivateRoute component
<Route
  path="/protected"
  element={
    <PrivateRoute>
      <ProtectedComponent />
    </PrivateRoute>
  }
/>
```

Backend:
```javascript
// Use auth middleware
router.get('/protected', auth, (req, res) => {
  // Protected route logic
});
```

### Adding New Redux State
```typescript
// frontend/src/store/slices/newSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const newSlice = createSlice({
  name: 'newFeature',
  initialState: {},
  reducers: {
    // Add reducers
  }
});
```

## Best Practices

1. **Code Organization**
   - Keep components small and focused
   - Use TypeScript interfaces for props
   - Implement proper error handling
   - Use environment variables for configuration

2. **Security**
   - Never commit `.env` files
   - Always validate user input
   - Use HTTPS in production
   - Implement rate limiting
   - Keep dependencies updated

3. **Performance**
   - Implement proper loading states
   - Use React.memo for expensive components
   - Implement proper caching strategies
   - Use pagination for large datasets

## Troubleshooting

### Common Issues and Solutions

1. **MongoDB Connection Issues**
   - Check MONGODB_URI in `.env`
   - Ensure MongoDB is running
   - Check network connectivity
   - Verify IP whitelist in MongoDB Atlas

2. **Authentication Issues**
   - Check JWT_SECRET in `.env`
   - Verify token expiration
   - Clear browser storage
   - Check CORS settings

3. **Build Issues**
   - Clear `node_modules` and reinstall
   - Check TypeScript errors
   - Verify environment variables
   - Update dependencies

### Getting Help
- Check the [GitHub Issues](https://github.com/Smart-saas-apps/BaseApp/issues)
- Create new issues for bugs
- Review existing pull requests
- Contribute improvements

## Updates and Maintenance

1. **Keeping Dependencies Updated**
```bash
# Check for updates
npm outdated

# Update dependencies
npm update
```

2. **Regular Maintenance**
- Review and update dependencies monthly
- Test authentication flow regularly
- Keep environment variables documented
- Update security measures
- Monitor for security advisories

---

Remember to star ⭐ the repository if you find it helpful!
