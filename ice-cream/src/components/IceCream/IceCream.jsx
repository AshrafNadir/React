import React from 'react';
import classes from './IceCream.module.css';

export const IceCream = () => {
    return (
        <div>
            <div className={classes.icecream }>
              <p className={classes.cone}></p>
             { /* <p>Please start adding scoops</p> */}
             {/* scoop component*/ }
            
              <div className={classes.cherry}></div>
            </div>
          </div>
    )
}
