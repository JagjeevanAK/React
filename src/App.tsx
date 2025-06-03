import { useEffect, useState } from 'react'
import { Timer } from './components/Timer'

function App() {
  const [showtimer, setShowtimer] = useState(true)

  useEffect(()=>{
    const interval = setInterval(() => {
      setShowtimer(currval => !currval)
    }, 5000);
    
    return () => {
      clearInterval(interval);
    }
  },[])

  return (
    <div>
     { showtimer && <Timer/>}
    </div>
  )
}

export default App
