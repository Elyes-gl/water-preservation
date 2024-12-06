import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-b from-cyan-200 via-green-200 to-green-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-6">
          Explorez le corps humain et les systèmes océaniques
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
          Découvrez les liens profonds entre le corps humain et les océans, et comprenez comment nos organes reflètent les processus vitaux du monde marin.
        </p>
        <button
          onClick={() => navigate('/app')}
          className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-lg md:text-xl font-semibold hover:scale-105 transition-transform shadow-md"
        >
          Commencer l'exploration
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
