import React from 'react'
import TableData from './TableData'

export default function List() {
    let List =[
        {
            id : "1",
            name : "joe",
            marks : "100"
        },
        {
            id : "1",
            name : "joe",
            marks : "100"
        },
        {
            id : "1",
            name : "joe",
            marks : "100"
        }
    ]

  return (
    <div>
        <table>
        <tr>
        
            <th>Id</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Marks 2</th>
            </tr>

            {List.map(x => <TableData id={x.id} name={x.name} marks={x.marks} />)}

            
        </table>
    </div>
  )
}
