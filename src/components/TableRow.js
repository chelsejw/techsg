import React from 'react'
import StackBtn from './StackBtn'

const TableRow = (props) => {

    const stackButtons = props.data.stack.map((tech, i) => {
        return <StackBtn key={i} name={tech} />;
    })

    return (
      <tr>
        <th scope="row">{props.num}</th>
        <td>{props.data.company}</td>
        <td>
          <a target="_blank" rel="noopener noreferrer" href={props.data.link}>
            {props.data.title}
          </a>
        </td>
        <td>{stackButtons.length > 0 ? stackButtons : "-"}</td>
        <td>{props.created}</td>
      </tr>
    );
}

export default TableRow