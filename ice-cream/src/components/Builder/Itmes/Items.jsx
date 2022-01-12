import React from 'react';

export const Items = ({items}) => {
    const flavors = Object.keys(items);
    return (
        <div>
            <ul>
                {flavors.map(flavor=><item key={flavor} name={flavor}/>)}
            </ul>
        </div>
    )
}
