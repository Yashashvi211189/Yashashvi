export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      success: false,
      message: 'Only POST requests are accepted'
    });
  }

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

  // Send success response
  res.status(200).json({
    success: true,
    message: 'Transmission received successfully! Response incoming...',
    data: {
      name,
      email,
      timestamp: new Date().toISOString()
    }
  });
}