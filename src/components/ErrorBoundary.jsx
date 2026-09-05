// src/components/ErrorBoundary.jsx
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
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7fafb] p-6">
          <div className="bg-white rounded-xl p-8 max-w-md shadow-lg border border-red-200">
            <h2 className="text-xl font-bold text-red-600 mb-4">⚠️ Terjadi Kesalahan</h2>
            <p className="text-slate-600 mb-4">
              Maaf, terjadi kesalahan saat memuat halaman. Silakan refresh atau kembali ke halaman sebelumnya.
            </p>
            <div className="bg-red-50 p-3 rounded-lg text-sm text-red-700 mb-4 overflow-auto max-h-32">
              {this.state.error?.message || 'Unknown error'}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#18aaa6] text-white px-4 py-2 rounded-lg hover:bg-[#108f8b]"
            >
              Refresh Halaman
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;