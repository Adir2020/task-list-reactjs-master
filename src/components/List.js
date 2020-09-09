import React from 'react';

export default function List(props) {
    const { tasks } = props;

    return (
        <div id="list">
            { tasks.map(task => {
                return (
                    <div>
                        <h2>{ task }</h2>
                    </div>  
                );
            })}
        </div>
    );
}