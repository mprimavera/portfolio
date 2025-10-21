import { LoadingScreen } from './components/LoadingScreen';
import "./index.css"
import { useState } from 'react';
import { MatrixRain } from './components/MatrixRain';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background animation */}
        <MatrixRain />

        {/* Foreground content */}
        {!isLoaded ? (
          <LoadingScreen onComplete={() => setIsLoaded(true)} />
        ) : (
          <div className="relative z-10 flex flex-col min-h-screen">
            {/* Development notification banner */}
            <div
              style={{
                backgroundColor: '#73de4f9d',
                color: '#000',
                padding: '10px',
                textAlign: 'center',
                fontWeight: 'bold',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
              }}
            >
              ⚠️ I'm currently developing the site. Expect updates to be complete by 12/31/2025!
            </div>

            {/* Main content */}
            <div className="flex-grow flex items-center justify-center">
              <a
                href="https://www.youtube.com/watch?v=EnIhbuE6zA0&list=PL1Ee_XSiTSM2jPBlFlSY1ZYh4nsHU77T-&index=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-lg text-3xl"
              >
                My Projects
              </a>
            </div>

            {/* Footer at bottom */}
            <footer className="bg-gray-800 text-white text-center py-4">
              <p>&copy; 2025 Michael Primavera. All rights reserved.</p>
            </footer>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
