import React from 'react';

const Event = (props) => {
    const handleClick =()=>{
        window.open(props.link, '_blank');
    }
    return (
        <>
        <div className='Event'>
        <img src={props.img}style={{ width: '200px', height: '150px' }}/>
         <h2>{props.name}</h2>
         <h3>{props.country}</h3>
         <button onClick={handleClick}>Details</button>
        </div>
        </>
    );
};

export default Event;