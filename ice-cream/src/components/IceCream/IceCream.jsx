import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

export const IceCream = () => {
    return (
        <div>
            <div className={classes.icecream }>
              <p className={classes.cone}></p>
             { /* <p>Please start adding scoops</p> */}
             {/* scoop component*/ }
             <Scoop />
            
              <div className={classes.cherry}></div>
            </div>
          </div>
    )
}
