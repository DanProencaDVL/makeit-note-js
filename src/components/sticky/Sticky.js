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
            draggable:false,
            display:true,
        }

     
      }

      componentDidMount = () => {

   

            const offset = JSON.parse(localStorage.getItem(this.props.id))
            console.log(offset)
            this.setState({xoffset:offset.x, yoffset:offset.y})
          

        console.log(this.props.id)

      }


      saveOffset(){


          localStorage.setItem(this.props.id,JSON.stringify({id:this.props.id, color:this.props.color,x:this.props.x  - this.state.mousex, y:this.props.y  - this.state.mousey}))
          this.setState({draggable:false,xoffset:this.props.x  - this.state.mousex, yoffset:this.props.y  - this.state.mousey})
        

      }


      destroy = ()=>{
        this.setState({display:false})
        localStorage.removeItem(this.props.id)
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
     
        {this.state.display?<div ref={this.posRef} className={`${styles.sticky} ${this.props.color?this.props.color:styles.gold}`}
        style={{
            position: "absolute",
            left: `${this.state.draggable?this.props.x - this.state.mousex:this.state.xoffset}px`,
            top: `${this.state.draggable?this.props.y - this.state.mousey:this.state.yoffset}px`,
          }}
            onMouseUp={()=>this.state.draggable?this.saveOffset():''}
        >
            <div 
            className={styles.header}
            onPointerDown={()=>this.setState({draggable:true})}
            onPointerUp={()=>this.saveOffset()}
            onPointerMove={this.handleMouseMove}

         
            >
             <span onClick={()=>this.destroy()} className={styles.close}></span>
            </div>
            
            <textarea className={styles.TextArea}>
                    
            </textarea>
        </div>:''}
        </>
        
      )
    }
  }