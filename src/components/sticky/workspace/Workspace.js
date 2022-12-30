import React,{ useState} from 'react';
import styles from './Workspace.module.css'
import { StickyNote } from '../Sticky';

export class WorkSpace extends React.Component {


    constructor(props){

        super(props)
        this.Ref = React.createRef();

        this.state = {
            x:0,
            y:0,
            stickNotes:[]
            
        }

        
    }


    componentDidMount = ()=>{

        const sticks = Object.values(localStorage).map(e=>JSON.parse(e))

        this.setState({stickNotes:sticks})
    }


    handleMouseMove = event => {
        this.setState({
          x: event.clientX - event.target.offsetLeft,
          y: event.clientY - event.target.offsetTop,
        });
    };



    newNote(color){

        let aux = this.state.stickNotes
        aux.push({color:color, id:Date.now()})
        localStorage.setItem(Date.now(),JSON.stringify({id:Date.now(), color:color, x:0, y:0}))
        return
    }

    render(){


    


    return(

<>
<div onMouseMove={this.handleMouseMove} style={{display:'flex', height:'100vh'}}>


<div>

<div className={`${styles.menuColor} ${styles.blue}`} onClick={()=>this.newNote(styles.blue)} >
</div>

<div className={`${styles.menuColor} ${styles.pink}`} onClick={()=>this.newNote(styles.pink)}>
</div>


<div className={`${styles.menuColor} ${styles.gold}`} onClick={()=>this.newNote(styles.gold)}> 
</div>


<div className={`${styles.menuColor} ${styles.green}`} onClick={()=>this.newNote(styles.green)}>
</div>

</div>


{this.state.stickNotes.length > 0 ?this.state.stickNotes.map(e=><StickyNote x={this.state.x} y={this.state.y} color={e.color} id={e.id}></StickyNote>):''}

</div>
</>


    )


    }

}
