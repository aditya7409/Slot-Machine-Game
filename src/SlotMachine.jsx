import React from 'react';

const SlotMachine = (props) => {
    let x=props.x;
    let y=props.y;
    let z=props.z;
  
    if ((x === y) && (y === z)) {
      return (
        <>
          <div className='slot_inner' >
            <h1 id="lower">
              {x} {y} {z}
            </h1>
            <h1 style={{color:'yellow'}}>Wohoooooo,You won 10 coins</h1>
          </div>
        </>
      )
    }
    else {
      return (
        <>
          <div className='slot_inner'>
            <h1 id="lower">
              {x} {y} {z}
            </h1>
            <h1 style={{color:'yellow'}}>Ah,try again!</h1>
          </div>
        </>
      )
    }
  }

  export default SlotMachine;