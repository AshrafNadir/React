import React from 'react'
import classes from './Item.module.css'

export const Item = ({name}) => {
    return (
        <div>
            <li className={classes.item}>
                    <span>{name}</span>
                    <span className={classes.quantity}>2</span>
                    <div class="right">
                      <button type="button" class={[classes.plus,'rounded'].join(' ')}>+</button>
                      <button type="button" class={[classes.minus,'rounded'].join(' ')}>-</button>
                    </div>
                  </li>
        </div>
    )
}
