import React from 'react';
import styles from './Sticky.module.css'



export class StickyNote extends React.Component {
    
    constructor(props) {
        super(props);
        this.posRef = React.createRef();
        this.state = {
            xoffset:0,
            yoffset:0,
            mousex:0,
            mousey:0,
            draggable:false
        }

     
      }


     handleMouseMove = event => {
        if (!this.state.draggable){
        this.setState({
          mousex: event.clientX - this.state.xoffset,
          mousey: event.clientY - this.state.yoffset,
        });
        
    }
       console.log(this.state.draggable)
      };

    
    render() {

        


      return (


        <>
        <div ref={this.posRef} className={styles.sticky}
        style={{
            position: "absolute",
            left: `${this.state.draggable?this.props.x - this.state.mousex:this.state.xoffset}px`,
            top: `${this.state.draggable?this.props.y - this.state.mousey:this.state.yoffset}px`,
          }}
            onMouseUp={()=>this.state.draggable?this.setState({draggable:false,xoffset:this.props.x  - this.state.mousex, yoffset:this.props.y  - this.state.mousey}):''}
        >
            <div className={styles.header}
            onMouseDown={()=>this.setState({draggable:true})}
            onMouseUp={()=>this.setState({draggable:false,xoffset:this.props.x  - this.state.mousex, yoffset:this.props.y  - this.state.mousey})}
            onMouseMove={this.handleMouseMove}

         
            >
             
            </div>
            
            <textarea className={styles.TextArea}>
                    
            </textarea>
        </div>
        </>
        
      )
    }
  }