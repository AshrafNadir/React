import React from 'react';
import classes from './IceCream.module.css';

export const IceCream = ({scoops}) => {
 
    return (
        <div>
            <div className={classes.icecream }>
              <p className={classes.cone}></p>
              
              {scoops.map(scoop=> <scoop key={`${scoop}${Math.random}`} scoop={scoop}/>)}
            
              <div className={classes.cherry}></div>
            </div>
          </div>
    )
}
