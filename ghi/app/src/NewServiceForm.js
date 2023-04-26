// import React, {useEffect, useState } from 'react';

// function ServiceForm(props){

// // Check on Create a service appointment, there is a date field, AND a time field
//     const [vin, setVin] = useState('');
//     const [customer, setCustomer] = useState('');
//     const [date_time, setDateTime] = useState('');
//     const [technician, setTechnician] = useState('');
//     const [reason, setReason] = useState('');
//     const [time, setTime] = useState('');



//     const handleVin = (event) => {
//         const value = event.target.value;
//         setVin(value);
//     }

//     const handleCustomer= (event) => {
//         const value = event.target.value;
//         setCustomer(value);
//     }

//     const handleDateTime = (event) => {
//         const value = event.target.value;
//         setDateTime(value);
//     }

//     const handleTechnician = (event) => {
//         const value = event.target.value;
//         setTechnician(value);
//     }

//     const handleReason = (event) => {
//         const value = event.target.value;
//         setReason(value);
//     }

//     const handleTime = (event) => {
//         const value = event.target.value;
//         setTime(value);
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault()

//         const data = {};
//         data.vin = vin;
//         data.customer = customer;
//         data.date_time = dateTime;
//         data.reason = reason;
//         data.time = time;
//         data.technician = technician;
//         console.log(data);

//         const technicianUrl = "http://localhost:8080/api/technicians/";
//         const fetchConfig = {
//             method: "post",
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };
//         const response = await fetch(technicianUrl, fetchConfig);
//         if (response.ok) {
//             const newTechnician = await response.json();
//             console.log(newTechnician);

//             setFirstName('');
//             setLastName('');
//             setEmployeeId('');
            
//         } else {
//             console.log("Wrong!", response);
//         }

//     };

// useEffect(() => {
//     fetchData();

// }, []);

// return (
//     <div className="row">
//         <div className="offset-3 col-6">
//             <div className="shadow p-4 mt-4">
//                 <h1>Create a service appointment</h1>
//                 <form onSubmit={handleSubmit} id="create-service-appointment">
//                     <div className="form-floating mb-3">
//                         <input
//                         onChange={handleVin}
//                         value={vin}
//                         required
//                         type="text"
//                         placeholder=""
//                         id="vin"
//                         className="form-control"/>
//                         <label htmlFor="vin">Automobile Vin</label>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input
//                         onChange={handleCustomer}
//                         value={customer}
//                         required
//                         type="text"
//                         placeholder=""
//                         id="customer"
//                         className="form-control" />
//                         <label htmlFor="customer">Customer</label>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input
//                         onChange={handleDateTime}
//                         value={dateTime}
//                         required
//                         type="text"
//                         placeholder="mm/dd/yyyy"
//                         id="dateTime"
//                         className="form-control" />
//                         <label htmlFor="dateTime">Date</label>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input
//                         onChange={handleTime}
//                         value={time}
//                         required
//                         type="text"
//                         placeholder="--:-- --"
//                         id="time"
//                         className="form-control" />
//                         <label htmlFor="time">Time</label>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <select onChange={handleTechnician}
//                         value={technician}
//                         name="technician"
//                         id="technician"
//                         required>
//                             <option value="">Choose a technician...</option>
//                                 {technician.map((technician) => {
//                                     return (
//                                         <option key={technician.href} value={technician.href}>
//                                             {technician.first_name}, {technician.last_name }
//                                         </option>
//                                     );
//                                 })}
//                         </select>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input
//                         onChange={handleReason}
//                         value={reason}
//                         required
//                         type="text"
//                         placeholder=""
//                         id="reason"
//                         className="form-control" />
//                         <label htmlFor="reason">Reason</label>
//                     </div>
//                     <button className="btn btn-primary">Create</button>
//                 </form>
//             </div>
//         </div>
//     </div>
//     );
//                         }; 
// export default ServiceForm;