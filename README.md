# Custom Blog with API

This project is a custom blog application that integrates a backend API to handle blog posts, users, and interactions. The blog allows users to view, create, update, and delete posts, as well as interact with the system in a dynamic way.

## Features

- **Create, Read, Update, Delete (CRUD) Blog Posts**: Manage blog posts with a full set of CRUD operations.
- **Responsive UI**: A user-friendly interface that works on both desktop and mobile devices.
- **API Integration**: Backend API designed to handle blog post management, user authentication, and more.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla or Framework-based like React or Next.js if used)
- **Template Engine**: EJS
- **Backend**: Node.js with Express (or another backend framework as per your implementation)
- **Database**: MongoDB
- **API**: RESTful API for handling all client-server communication

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/AdityaNPatil/custom_blog_with_API.git
```

### 2. Install dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

### 3. Run the Application

```bash
nodemon index.js
nodemon api.js
```

### 5. Access the Blog

Once the application is running, visit `http://localhost:3000` (or any configured port) to view the blog.

## API Endpoints

### Blog Posts

- **GET /api/posts**: Fetch all blog posts
- **GET /api/posts/:id**: Fetch a specific blog post by ID
- **POST /api/posts**: Create a new blog post 
- **PUT /api/posts/:id**: Update a specific blog post by ID 
- **DELETE /api/posts/:id**: Delete a specific blog post by ID 

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request
