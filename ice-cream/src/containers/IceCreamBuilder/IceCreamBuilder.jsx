import React, { Component } from 'react';
import { Builder } from '../../components/Builder/Builder';
import { IceCream } from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component{
    state={
        items:{
            vanilla:45,
            chocolate:50,
            lemon:30,
            orange:70,
            strawberry:80,



        },
      scoops: [],
      totalPrice :0,

        
    };

    render(){
        const{items}=this.state;
        return (
            <div className={[classes.container,'container'].join(' ')}>
               <IceCream items={items}/>
               <Builder />
                
            </div>
        )
    }
   
}
