const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Services data
const services = [
  {
    id: 1,
    name: "Bridal Makeup Package",
    price: "₹15,000",
    description: "Complete bridal transformation with premium products",
    icon: "💍"
  },
  {
    id: 2,
    name: "Party Makeup",
    price: "₹4,000",
    description: "Glamorous looks for special occasions",
    icon: "✨"
  },
  {
    id: 3,
    name: "Non-Bridal Makeup",
    price: "₹4,000",
    description: "Professional makeup for any event",
    icon: "💄"
  },
  {
    id: 4,
    name: "Pre-Wedding Shoot Makeup",
    price: "₹3,500",
    description: "Picture-perfect looks for your pre-wedding photos",
    icon: "📸"
  },
  {
    id: 5,
    name: "Mehendi for Brides",
    price: "₹2,000",
    description: "Traditional and modern mehendi designs",
    icon: "🌸"
  },
  {
    id: 6,
    name: "Saree Pre-Pleating & Box Folding",
    price: "₹350",
    description: "Expert saree draping services",
    icon: "👗"
  },
  {
    id: 7,
    name: "Hairstyle",
    price: "Starts from ₹800",
    description: "Trendy and elegant hairstyling",
    icon: "💇"
  },
  {
    id: 8,
    name: "Nail Art",
    price: "Starts from ₹700",
    description: "Beautiful nail designs and art",
    icon: "💅"
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "Navya made my wedding day absolutely magical! Her attention to detail and skill is unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Ananya Reddy",
    text: "The bridal package was worth every penny. I looked stunning in all my wedding photos!",
    rating: 5
  },
  {
    id: 3,
    name: "Meera Krishnan",
    text: "Professional, punctual, and incredibly talented. Highly recommend for any special occasion!",
    rating: 5
  }
];

// Routes
app.get('/api/services', (req, res) => {
  res.json({ success: true, data: services });
});

app.get('/api/testimonials', (req, res) => {
  res.json({ success: true, data: testimonials });
});

// Booking endpoint
app.post('/api/book', (req, res) => {
  const { name, email, service, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !service) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a valid email address'
    });
  }

  // In a real application, you would save this to a database
  // and send confirmation emails
  console.log('New booking received:', { name, email, service, message });

  res.json({
    success: true,
    message: 'Thank you for your booking! We will contact you shortly.'
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields'
    });
  }

  console.log('New contact message:', { name, email, message });

  res.json({
    success: true,
    message: 'Thank you for your message! We will get back to you soon.'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Navya API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Navya Backend Server running on port ${PORT}`);
});
