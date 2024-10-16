import React, { useState, useEffect } from 'react';

export default function VerificationPage() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move focus to next input
      if (value !== '' && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted code:', code.join(''));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="h-16 bg-teal-600"></div>
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center">
            <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="50" r="30" fill="url(#gradient1)" />
              <circle cx="70" cy="50" r="30" fill="url(#gradient2)" />
              <path d="M20 40L50 60L80 40" stroke="white" strokeWidth="6" />
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4FD1C5" />
                  <stop offset="1" stopColor="#14B8A6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="100" y1="100" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4FD1C5" />
                  <stop offset="1" stopColor="#14B8A6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-center mb-4">PLEASE VERIFY ACCOUNT</h1>
          <p className="text-sm text-center mb-6">
            ENTER THE 6 DIGIT CODE (CONTAINS LETTERS AND NUMBERS) THAT WE SENT TO YOUR EMAIL ADDRESS TO VERIFY YOUR NEW ACCOUNT
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between mb-6">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded focus:border-teal-500 focus:outline-none"
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                />
              ))}
            </div>
            <p className="text-sm text-center mb-2">VALID FOR {formatTime(timeLeft)}</p>
            <p className="text-sm text-center mb-6">
              <button type="button" className="text-teal-600 hover:underline">
                RESEND CODE
              </button>
            </p>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition duration-300"
            >
              VERIFY AND CONTINUE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
