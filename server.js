import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the dist directory when in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'All fields are required',
      success: false 
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      error: 'Invalid email format',
      success: false 
    });
  }

  // Log the transmission (in a real app, you'd save to database or send email)
  console.log('\n🚀 === GALACTIC TRANSMISSION RECEIVED ===');
  console.log(`📡 From: ${name}`);
  console.log(`🌌 Coordinates: ${email}`);
  console.log(`📝 Message: ${message}`);
  console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
  console.log('============================================\n');

  // Simulate processing delay (like real space communication!)
  setTimeout(() => {
    res.status(200).json({
      success: true,
      message: 'Transmission received successfully! Response incoming...',
      data: {
        name,
        email,
        timestamp: new Date().toISOString()
      }
    });
  }, 1000);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'operational',
    message: 'Galactic communication systems online',
    timestamp: new Date().toISOString()
  });
});

// Catch all handler for production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('🚨 Server Error:', error);
  res.status(500).json({
    error: 'Internal server error',
    success: false,
    message: 'The Death Star seems to be experiencing technical difficulties'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    success: false,
    message: 'This is not the endpoint you are looking for'
  });
});

app.listen(PORT, () => {
  console.log(`\n🌟 ================================`);
  console.log(`🚀 Star Wars Portfolio Server`);
  console.log(`📡 Communication systems online`);
  console.log(`🌌 Port: ${PORT}`);
  console.log(`⚡ Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🛰️  Health check: http://localhost:${PORT}/api/health`);
  console.log(`🌟 ================================\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🚀 Initiating graceful shutdown...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\n🚀 Shutting down galactic communication systems...');
  process.exit(0);
});

export default app;
