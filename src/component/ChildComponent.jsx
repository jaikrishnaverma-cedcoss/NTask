import React from 'react';
import { memo } from "react";
function ChildComponent(props) {
    console.log("CC")
    return ( 
        <>
        </>
     );
}

export default memo(ChildComponent);