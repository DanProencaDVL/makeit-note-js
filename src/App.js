import { useState} from 'react';
import StickyNote from './components/sticky';
export default function App() {
  const [coords, setCoords] = useState({x: 0, y: 0});

  
  

  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{display:'flex', height:'100vh'}}>
    <StickyNote  x={coords.x} y={coords.y }/>
    </div>
  );
}
