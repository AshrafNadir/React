import React from 'react'
import classes from './Builder.module.css'

export const Builder = () => {
    return (
        <div className={classes.builder}>
              <h3>Build your own Ice Cream Sundae</h3>
              {/*itmes*/}

              {/*total Price*/}

              <button type="button" className={[classes.order,'rounder'].join(' ')}>
                Add to Cart
              </button>
            </div>
    )
}
