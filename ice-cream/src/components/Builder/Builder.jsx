import React from 'react'
import classes from './Builder.module.css'
import Items from './Itmes/Items'
import TotalPrice from './TotalPrice/TotalPrice'

export const Builder = () => {
    return (
        <div className={classes.builder}>
              <h3>Build your own Ice Cream Sundae</h3>
              <Items />

              <TotalPrice />

              <button type="button" className={[classes.order,'rounder'].join(' ')}>
                Add to Cart
              </button>
            </div>
    )
}
