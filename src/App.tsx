import React, { useState } from 'react';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        {!isSubmitted ? (
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-lg font-medium text-gray-700 mb-3 text-center"
                >
                  State your name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-400 focus:outline-none transition-colors duration-200 text-center text-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-red-500 animate-pulse select-none">
              <span className="inline-block drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] filter">
                Thank you
              </span>
            </h1>
            <style jsx>{`
              @keyframes neon-glow {
                0%, 100% {
                  text-shadow: 
                    0 0 5px #ef4444,
                    0 0 10px #ef4444,
                    0 0 15px #ef4444,
                    0 0 20px #ef4444;
                }
                50% {
                  text-shadow: 
                    0 0 2px #ef4444,
                    0 0 5px #ef4444,
                    0 0 8px #ef4444,
                    0 0 12px #ef4444;
                }
              }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;