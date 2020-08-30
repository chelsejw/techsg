import React from 'react'
import StackOptions from './StackOptions'

const Options = (props) => {

    return (
      <div className="options-container">
        <div className="opt-headers row">
          <div className="col-md-3">Stack</div>
          <div className="col-md-7">Company</div>
          <div className="col-md-2">Sort</div>
        </div>
        <div className="options-items row">
          <StackOptions stack={props.stack} />

          <div className="col-md-7 opt opt-companies"></div>

          <div className="col-md-2 opt opt-sort"></div>
        </div>
      </div>
    );

}

export default Options