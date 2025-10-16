import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css"
import { useState } from 'react';
import { MatrixRain } from './MatrixRain';
import { motion } from 'framer-motion';

function App() {
  const [isLoaded, setIsLoaded] = useState(false)


return (
  <>
    <div className="relative min-h-screen overflow-hidden">
      {/* Background animation */}
      <MatrixRain />
      
      {/* Foreground content */}
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div className="relative z-10">
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
            ⚠️ I'm currently developing the site. Expect updates to be complete by 10/20/2025!
          </div>

          <h1 className="text-green-400 text-4xl justify-center">My Portfolio</h1>

          {/* Main app content */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p> &copy; 2025 Michael Primavera. All rights reserved.</p>
      </motion.footer>
        </div>

      )}
    </div>
  </>
);
}

export default App

