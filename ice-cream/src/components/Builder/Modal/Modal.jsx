import React from 'react'
import classes from './Modal.module.css'

export const Modal = ({children}) => {
    return (
        <div>
              <div class={classes.backdrop} />
              <div class={classes.modalBody}>
                  {children}
                
                </div>
        </div>
    
    )
}
