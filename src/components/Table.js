import React from 'react'
import TableRow from './TableRow'
var moment = require('moment'); // require


const Table = (props) => {
    const rows = props.data.map((job, index) => {
        return (
            <TableRow key={job.id} created={moment(job.created_at).format("DD/MM/YYYY")} num={props.firstIndex+index} data={job}/>
        )
    })

    return (
      <div className="table-responsive">
        <table className="mt-2 table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company</th>
              <th scope="col">Title</th>
              <th scope="col">Stack</th>
              <th scope="col">Added</th>

            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>

        {props.data.length < 1 && "There is no data."}
      </div>
    );
}

export default Table