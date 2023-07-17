import React, {useEffect, useState } from 'react';

function TechnicianForm(props){

    const [firstName, setFirstName] = useState('');
    const handleFirstName = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const [lastName, setLastName] = useState('');
    const handleLastName = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const [employeeId, setEmployeeId] = useState('');
    const handleEmployeeId = (event) => {
        const value = event.target.value;
        setEmployeeId(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;

        const technicianUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();

            setFirstName('');
            setLastName('');
            setEmployeeId('');
            
        } else {
            console.error("Error", response);
        }

    };
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
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add a Technician</h1>
                <form onSubmit={handleSubmit} id="add-technician-form">
                    <div className="form-floating mb-3">
                        <input
                        onChange={handleFirstName}
                        value={firstName}
                        required
                        type="text"
                        placeholder="First Name"
                        id="firstName"
                        className="form-control"/>
                        <label htmlFor="firstName">First Name...</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                        onChange={handleLastName}
                        value={lastName}
                        required
                        type="text"
                        placeholder="Last Name"
                        id="lastName"
                        className="form-control" />
                        <label htmlFor="lastName">Last Name...</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                        onChange={handleEmployeeId}
                        value={employeeId}
                        required
                        type="text"
                        placeholder="Employee Id"
                        id="employeeId"
                        className="form-control" />
                        <label htmlFor="employeeId">Employee Id...</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
    );
                        }; 
export default TechnicianForm;
