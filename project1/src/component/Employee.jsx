import React, { useState } from "react";

function Employee() {
  const [name, setname] = useState();
  const [id, setid] = useState();
  const [job, setjob] = useState();



const changeid=(e)=>{
    setid(e.target.value)
}

const changename=(e)=>{
    setname(e.target.value)
}

const changejob=(e)=>{
    setjob(e.target.value)
}

const handleClick=()=>{
    console.log(id,name,job)
}
  return (
    <div>
      <label>Employee ID :</label>
      <input type="text" value={id} />

      <br />
      <label> Employee Name</label>
      <input type="text" value={name} />

      <br />
      <select onChange={changejob}>
        <option value="">select one</option>
        <option value="developer">Developer</option>
        <option value="tester">Tester</option>
      </select>

      <br />
      <button onClick={handleClick}>Add Employee</button>
      
      <br />

      <h1>Employee List</h1>

      {/* <div>
        <table>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Job</th>
          </tr>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{job}</td>
          </tr>
        </table>
      </div> */}

    </div>
  );
}

export default Employee;
