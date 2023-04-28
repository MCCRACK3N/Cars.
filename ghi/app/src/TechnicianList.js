import React, { useEffect, useState } from 'react';

function TechnicianList() {

  const [technicians, setTechnicians] = useState([]);
  const getTechnicians = async () => {
    const response = await fetch('http://localhost:8080/api/technicians/')

    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
    else {
      console.error(response);
    }
  }

  useEffect(() => {
    getTechnicians ();
  }, []);


    return (
      <>
        <div>
          <h1>Technicians</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {technicians.map((technician) => {
                const uniqueKey = `${technician.employee_id}-${technician.first_name}-${technician.last_name}`;
                return (
                  <tr key={uniqueKey}>
                    <td>{technician.employee_id}</td>
                    <td>{technician.first_name}</td>
                    <td>{technician.last_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  export default TechnicianList;