import React from 'react';

export const Items = ({items,add,remove}) => {
    const flavors = Object.keys(items);
    return (
        <div>
            <ul>
                {flavors.map(flavor=><item key={flavor} name={flavor} add={add} remove={remove}/>)}
            </ul>
        </div>
    )
}
