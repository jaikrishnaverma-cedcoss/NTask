import React from 'react';
import { UserConsumer } from './ContextApi';
function ComponentD() {
    return ( 
        <>
        <div style={{border:"2px solid black"}}>
        <h2>ComponentD</h2>
        <UserConsumer>
      {  
      username=>{
        return <h3>Hello {username}</h3>
      }
      }
        </UserConsumer>
        </div>
        </>
     );
}

export default ComponentD;