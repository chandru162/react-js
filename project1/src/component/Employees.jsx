import React, { useEffect, useState } from "react";
import Axios from "axios";

function Employees() {
  const [list, setlist] = useState([]);
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState();
  const [job, setjob] = useState("");
  const [salary, setsalary] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3008/Employee")
      .then((res) => {
        setlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //creat opration........
  const handlecreat = () => {
    Axios.post(`http://localhost:3008/Employee`, {
      id: id,
      name: name,
      age: age,
      job: job,
      salary: salary,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };


  //DELETE OPRATION....
  const handledelete = (id1) => {
    Axios.delete(`http://localhost:3008/Employee/${id1}`)
      .then((res) => {
        console.log(res);
      }, alert("Deleted Sucsessfully...!"))

      .catch((err) => {
        console.log(err);
      });
  };


  // Update Opration.....

  const [id2, setid2] = useState("");
  const [name2, setname2] = useState("");
  const [age2, setage2] = useState();
  const [job2, setjob2] = useState("");
  const [salary2, setsalary2] = useState();
  const [ispopup, setispopup] = useState(false);

  const openpoup = (data) => {
    setispopup(true);
    setid2(data.id);
    setname2(data.name);
    setage2(data.age);
    setjob2(data.job);
    setsalary2(data.salary);
  };

  const handleupdate = () => {
    Axios.put(`http://localhost:3008/Employee`, {
      id: id2,
      name: name2,
      age: age2,
      job: job2,
      salary: salary2,
    })
      .then((res) => {
        console.log(res);
      },alert("Updated Sucessfully.....!"))
      .catch((err) => {
        console.log(err);
      });
  };


  
  return (
    <div>
      <form onSubmit={handlecreat}>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setid(e.target.value);
          }}
          required
        />
        <br />
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <label htmlFor="age">AGE</label>
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        <br />
        <label htmlFor="job">JOB</label>
        <input
          type="text"
          value={job}
          onChange={(e) => {
            setjob(e.target.value);
          }}
        />
        <br />
        <label htmlFor="salary">SALARY</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => {
            setsalary(e.target.value);
          }}
        />
        <br />
        <button type="submit">Add Employee</button>
      </form>

      {/* //-------------Table section */}

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>JOB</th>
            <th>SALARY</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {list.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td>{x.job}</td>
              <td>{x.salary}</td>
              <td>
                <button onClick={()=>{openpoup(x)}}>Update</button>
              </td>
              <td>
                <button onClick={() => handledelete(x.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update form............ */}

      {ispopup && <div>

        <button onClick={()=>{setispopup(false)}}>X</button>

        <form onSubmit={handleupdate}>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          value={id2}
          onChange={(e) => {
            setid(e.target.value);
          }}
          required
        />
        <br />
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          value={name2}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <label htmlFor="age">AGE</label>
        <input
          type="number"
          value={age2}
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        <br />
        <label htmlFor="job">JOB</label>
        <input
          type="text"
          value={job2}
          onChange={(e) => {
            setjob(e.target.value);
          }}
        />
        <br />
        <label htmlFor="salary">SALARY</label>
        <input
          type="number"
          value={salary2}
          onChange={(e) => {
            setsalary(e.target.value);
          }}
        />
        <br />
        <button type="submit">Update</button>
      </form>
        </div>}


    </div>
  );
}

export default Employees;
