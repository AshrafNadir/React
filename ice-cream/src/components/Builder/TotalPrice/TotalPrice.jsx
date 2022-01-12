import React from 'react'
import classes from './TotalPrice.module.css'

export const TotalPrice = ({price=0}) => {
    return (
        <div class={classes.total}>
           <div>Total Price</div>
           <div>{price.toFixed(2)} Tk</div>
      </div>
    )
}
