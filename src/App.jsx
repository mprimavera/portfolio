import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css"
import { useState } from 'react';
import { MatrixRain } from './MatrixRain';

function App() {
  const [isLoaded, setIsLoaded] = useState(false)


  return (
    <> 
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} /> }

        <div className="relative w-full h-screen overflow-hidden">
      <MatrixRain />
      <div className="absolute inset-0 flex items-center justify-center">

      </div>
    </div>
    
    </>
  );
}

export default App

