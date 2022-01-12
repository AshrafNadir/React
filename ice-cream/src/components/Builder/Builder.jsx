import React from 'react'
import classes from './Builder.module.css'
import { Items } from './Itmes/Items'
import { Modal } from './Modal/Modal'
import { TotalPrice } from './TotalPrice/TotalPrice'

 export const Builder = ({items,price,add,remove}) => {
    return (
      <div>
        <div className={classes.builder}>
              <h3>Build your own Ice Cream Sundae</h3>
              <Items items={items} add={add} remove={remove}/>

              <TotalPrice price={price} />

              <button type="button" className={[classes.order,'rounder'].join(' ')}>
                Add to Cart
              </button>
        </div>
            <Modal>Hello Modal</Modal>
      </div>    
    )
}

