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
                backgroundColor: 'rgba(0, 166, 62, 0.15)',
                color: 'rgba(202, 213, 226, .9)',
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
            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-8">
              <p className="text-slate-300/90 text-2xl font-semibold max-w-2xl">
                Hello, I'm Michael, a robotics engineer with a focus on developing agentic electro-mechanical
                systems.
              </p>

              <a
                href="https://www.youtube.com/watch?v=EnIhbuE6zA0&list=PL1Ee_XSiTSM2jPBlFlSY1ZYh4nsHU77T-&index=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-black font-bold py-4 px-8 rounded-lg text-2xl transition-colors"
              >
                My Projects
              </a>
            </div>
            {/* Footer at bottom */}
            <footer className="text-slate-300/90 text-center py-4 bg-green-600/15">
              <p>&copy; 2025 Michael Primavera. All rights reserved.</p>
            </footer>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
