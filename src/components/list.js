import React from 'react';

export default props => (
    <div>
        <h1 className="center">{props.title}</h1>
        <ul className="collection">
            {
                props.list.map(name => <li className="collection-item" key={name}>{name}</li>)
            }
        </ul>
    </div>
);
