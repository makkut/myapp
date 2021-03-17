import React from 'react'
import s from './Modal.module.css'

export default  class Modal extends React.Component{
    state ={
        isOpen: false
    }

    render() {
        return(
            <React.Fragment>
                <button onClick={()=>this.setState({isOpen:true})}> Open modal</button>

                {this.state.isOpen&& (<div className={s.modal}>
                    <div className={s.modalBody}>
                        <h1>Modal title</h1>
                        <p>I am awesome modal!</p>
                        <button onClick={()=>this.setState({isOpen:false})}>Close modal</button>
                    </div>
                </div>)}
            </React.Fragment>
        )
    }
}