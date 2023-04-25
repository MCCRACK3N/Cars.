import React, { useEffect, useState } from 'react';

function TechnicianList({technicians, setTechnicians}) {
    const handleDelete = async (technicianId) => {
        const response = await fetch(`http://localhost:8080//technicians${technicianId}/`, {
        method:'DELETE',
    });
    if (response.ok) {
        const updateTechnicians = technicians.filter((technician) => technician.id != parseInt(technicianId));
        setTechnicians(updateTechnicians);

        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8080//technicians');

            if (response.ok) {
                const data = await response.json();
                setTechnicians(data.technicians);
            } else {
                console.error(response);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Employee Id</th>
            </tr>
          </thead>
          <tbody>
            {technicians.map((technician) => {
              return (
                <tr key={technician.id}>
                  <td>{technician.first_name}</td>
                  <td>{technician.last_name}</td>
                  <td>{technician.employee_id}</td>
                  {/* <td>
                    <img src={technician.picture_url} width="100" alt="" />
                  </td> */}
                  <td>
                    <button onClick={() => handleDelete(technician.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default TechnicianList;