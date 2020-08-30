import React from 'react'
const PaginatorBtn = (props)=> {
    return (
      <button
        className={`direction-btn ${props.current && "direction-btn-active"}`}
        onClick={() => {
          props.setPage(props.num);
        }}
      >
        {props.text}
      </button>
    );
}

export default PaginatorBtn