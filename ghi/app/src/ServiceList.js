import React, { useEffect, useState } from 'react';

function ServiceList() {
    const [appointments, setAppointments] =useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/api/appointments');

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);

        } else {
            console.error(response);
        }
    };

    const handleStatusUpdt = async (id, status) => {
      const response = await fetch(`http://localhost:8080/api/appointments/${id}/finish/`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
    });
    if (response.ok) {setAppointments(appointments.filter(appointment => appointment.id !== id));
    
    } else {
       console.error("It didn't work")
    }
  };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
        <h1>Service Appointments</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Vin</th>
              <th>Is VIP?</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
          {appointments?.map((appointment) => {
              if (appointment.status === 'created') {
                return (
                  <tr key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.vip ? 'Yes' : 'No'}</td>
                    <td>{appointment.customer}</td>
                    <td>{appointment.date_time}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.technician?.employee_id}</td>
                    <td>{appointment.reason}</td>
                    <td>
                      {appointment.status !== 'canceled' && appointment.status !== 'finished' ? (
                        <>
                          <button onClick={() => handleStatusUpdt(appointment.id, 'canceled')} style ={{ backgroundColor:  '#db3544', borderRadius: '4px', color: 'white', border: 'none',fontSize: '1rem',height: '35px',width: '70px' }}>Cancel</button>
                          <button onClick={() => handleStatusUpdt(appointment.id, 'finished')} style ={{ backgroundColor: '#188753', borderRadius: '4px', color: 'white', border: 'none',fontSize: '1rem',height: '35px',width: '70px' }}>Finish</button>
                          
                        </>
                      ) : null}
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default ServiceList