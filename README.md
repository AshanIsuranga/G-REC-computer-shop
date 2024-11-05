# TechGear Hub - Computer Accessories Shop

A full-stack e-commerce web application for computer accessories with user authentication, product management, and shopping cart functionality.

## 🌟 Features

### User Authentication & Authorization
- Secure user registration and login system
- Password hashing and encryption
- Role-based access control (Admin/Customer)
- Express Session and passport.js based authentication

### Product Management
- Comprehensive product catalog with categories
- Detailed product descriptions and specifications
- Product image support
  
### Shopping Experience
- Intuitive shopping cart functionality
- Real-time cart updates
- Customer reviews and ratings

### User Interface
- Responsive design for all devices
- Interactive product galleries
- User-friendly navigation
- Modern and clean interface
- Loading animations and transitions

## 🚀 Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- EJS (Embedded JavaScript templates)
- Bootstrap (optional - add if you're using it)

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Security
- bcrypt.js for password hashing
- Express Session

## 📦 Installation

1. Clone the repository
```bash
https://github.com/AshanIsuranga/G-REC-computer-shop.git
cd computer-accessories-shop
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add:
```
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string
SESSION_SECRET=your_SESSION_secret_key
```

4. Start the application
```bash
npm start
```

The application will be running at `http://localhost:3000`

## 💻 Usage

### Customer Features
- Browse products by category
- Add items to cart
- Leave product reviews

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server port number |
| MONGODB_URI | MongoDB Atlas connection string |
| SESSION_SECRET | Secret key for SESSION |

## 👨‍💻 Author

Your Name
- GitHub: @AshanIsuranga(https://github.com/AshanIsuranga)
- LinkedIn: Ashan Isuranga(https://linkedin.com/in//ashan-isuranga-9a6a2b246/)

## 📱 Screenshots


```markdown
![Homepage](screenshots/homepage.png)
![Product Page](screenshots/product-page.png)
![Cart](screenshots/cart.png)
```

## 🚧 Future Improvements

- [ ] Implement payment gateway integration
- [ ] Add email notifications
- [ ] Develop mobile application
- [ ] Add social media authentication
- [ ] Add product recommendations
