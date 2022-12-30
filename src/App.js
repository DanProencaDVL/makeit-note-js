import { WorkSpace } from './components/workspace/Workspace';
export default function App() {
  
  
/*const [coords, setCoords] = useState({x: 0, y: 0});


  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };*/

  return (
  /*  <div onPointerMove={handleMouseMove} style={{display:'flex', height:'100vh'}}>
    <StickyNote  x={coords.x} y={coords.y }/>
    </div>*/

    <WorkSpace></WorkSpace>
  );
}
