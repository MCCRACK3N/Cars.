import React, { useEffect, useState } from 'react';

function ServiceList() {
    const [appointments, setAppointments] =useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/api/appointments');

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
            console.log(data.appointments, "Loookkkkk here!!")
        } else {
            console.error(response);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleStatusUpdt = async (id, status) => {
        const method = status === 'Canceled' || status === 'Finished' ? 'DELETE' : 'PUT';

        const response = await fetch(`http://localhost:8080/api/appointments/${id}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: method === 'PUT' ? JSON.stringify({ status }) : null,
        });

        if (response.ok) {
            setAppointments(appointments.filter(appointment => appointment.id !== id))
        } else {
            console.error("Delete", "The delete didn't work");
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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appointment) => {
              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.vip}</td>
                  <td>{appointment.customer}</td>
                  <td>{appointment.date_time}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.technician?.employee_id}</td>
                  <td>{appointment.reason}</td>
                  <td>
                    {appointment.status !== 'Canceled' && appointment.status !== 'Finished' ? (
                        <>
                            <button onClick={() => handleStatusUpdt(appointment.id, 'Finished')}>Finished</button>
                            <button onClick={() => handleStatusUpdt(appointment.id, 'Canceled')}>Canceled</button>
                        </>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default ServiceList



      //     const handleDelete = async (id) => {
    //     const response = await fetch(`http://localhost:8080/api/appointments/${id}`, {
    //         method: `DELETE`,
    //     });

    //     if (response.ok) {
    //         setAppointments(appointments.filter(appointment => appointment.id !== id))
    //     } else {
    //         console.error("DELETED!!!!!", "Check APPT");
    //     }
    // };



