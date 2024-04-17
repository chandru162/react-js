import React, { useState } from "react";

function Employee() {
  const [name, setname] = useState('');
  const [id, setid] = useState('');
  const [job, setjob] = useState('');
  const[show,setshow] = useState(true)

  const [list,setlist]=useState([]);



const changejob=(e)=>{
    setjob(e.target.value)
}

const handleClick=(e)=>{
  
   setlist([...list,{id :id,name:name,job:job }])
}
  return (
    <>
    <button></button>
    
    <div>
      <label>Employee ID :</label>
      <input type="text" value={id} onChange={(e)=>{setid(e.target.value)}}/>

      <br />
      <label> Employee Name</label>
      <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>

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

       <div>
        
         <table border={1}>
          
            <thead>
              <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Employee Job</th>
              </tr>
            </thead>
          
          
            <tbody>
              {list.map(x => (<tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.job}</td>
              </tr>))}
            </tbody>
          
        </table> 
      </div> 

    </div>
    </>
  );
}

export default Employee;
