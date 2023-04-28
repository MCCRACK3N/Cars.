import React, { useEffect, useState } from 'react';

function ServiceHistory() {
    const [appointments, setAppointments] =useState([]);
    const [search, setSearch] = useState('');
    const [filteredappointments, setFilteredAppointments] =useState([]);


    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/api/appointments');

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);

        } else {
            console.error(response);
        }
    };

    const handleFindVin = (event) => {
      const value = event.target.value;
      setSearch(value)
    };

    const handleClear = () => {
      setSearch('');
      setFilteredAppointments(appointments);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (search === ''){
        setFilteredAppointments(appointments)
      } else {
      setFilteredAppointments(appointments.filter(appointment => {
        return appointment.vin.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      }));
    }
    };
    



    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
      setFilteredAppointments(appointments);
  }, [appointments]);

    return (
        <div>
        <h1>Service History</h1>
        <form onSubmit = {handleSubmit} style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by Vin..."
          value={search}
          onChange={handleFindVin}
          style={{ flex: 1 }}
          />
          <button type="submit" sytle={{ marginLeft: '1rem '}}>Search</button>
          <button type="button" onClick={handleClear} stlye ={{ marginLeft: '1rem '}}>Clear</button>
            </form>
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
          {filteredappointments.map((appointment) =>  {
                return (
                  <tr key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.vip ? 'Yes' : 'No'}</td>
                    <td>{appointment.customer}</td>
                    <td>{appointment.date_time}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.technician?.employee_id}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.status}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default ServiceHistory;

    