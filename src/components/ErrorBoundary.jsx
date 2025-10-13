import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo);
    
    // Log device info for mobile debugging
    console.log('Device Info:', {
      userAgent: navigator.userAgent,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary p-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-white mb-4">
              🛸 Houston, We Have a Problem
            </h1>
            <p className="text-neutral-300 max-w-md mx-auto">
              Something went wrong with the Force. Please refresh the page or try again later.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gradient-to-r from-aqua/30 to-mint/30 border-2 border-aqua/50 rounded-full text-white font-bold hover:border-mint/70 transition-all duration-300"
              >
                🔄 Restart Hyperdrive
              </button>
              <details className="text-sm text-neutral-500 mt-4">
                <summary className="cursor-pointer text-aqua">Technical Details</summary>
                <pre className="mt-2 text-left bg-navy/50 p-4 rounded-lg overflow-auto">
                  {this.state.error?.toString()}
                </pre>
              </details>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;