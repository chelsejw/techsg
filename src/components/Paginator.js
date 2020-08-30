import React from 'react'
import PaginatorBtn from './PaginatorBtn'
const Paginator = (props)=> {

    const {next, prev, count} = props.info
    const current = props.current
    let pageButtons = [];

    let totalPages = Math.ceil(count/20)

    for (let i=current-2; i < current+3; i++) {
      if (i > 0 && i <=totalPages) {
        pageButtons.push(
          <PaginatorBtn
            current={i===current ? true : false}
            setPage={props.setPage}
            num={i}
            text={i}
          />
        );
      }
    }


    return (
      <div className="my-3 text-center">
      
        <div className="pg-btns">
          {prev && (
            <PaginatorBtn setPage={props.setPage} num={current - 1} text="<" />
          )}
          {pageButtons}
          {next && (
            <PaginatorBtn setPage={props.setPage} num={current + 1} text=">" />
          )}
        </div>
      </div>
    );
}

export default Paginator