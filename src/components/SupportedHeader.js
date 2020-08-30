import React from 'react'
import StackBtn from "./StackBtn";

const SupportedHeader = (props)=> {

    const stackItems = props.stack.map((item) => {
      return <StackBtn name={item.name} />;
    });

    return (
        <div className="mb-3">
          <div className="text-center">Supported Technologies as of {props.lastUpdate}</div>
          <div className="mt-3 w-75 mx-auto text-center">{stackItems}</div>
        </div>
    )
}

export default SupportedHeader