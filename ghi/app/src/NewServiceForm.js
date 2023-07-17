import React, {useEffect, useState } from 'react';

function ServiceForm(props){
    
    const [vin, setVin] = useState('');
    const handleVin = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const [vip, setVip] = useState('');
    const handleVip = (event) => {
        const value = event.target.value;
        setVip(value);
    }

    const [customer, setCustomer] = useState('');
    const handleCustomer= (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const [date_time, setDateTime] = useState('');
    const handleDateTime = (event) => {
        const value = event.target.value;
        setDateTime(value);
    }

    const [technician, setTechnician] = useState([]);
    const [selectedTechnician, setSelectedTechnician] = useState('');
    const handleTechnician = (event) => {
        const value = event.target.value;
        setSelectedTechnician(value);
    }

    const [reason, setReason] = useState('');
    const handleReason = (event) => {
        const value = event.target.value;
        setReason(value);
    }

    const [time, setTime] = useState('');
    const handleTime = (event) => {
        const value = event.target.value;
        setTime(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {};
        data.vip = vip;
        data.vin = vin;
        data.customer = customer;
        data.date_time = date_time;
        data.time = time;
        data.technician = selectedTechnician;
        data.reason = reason;

        const vinUrl = "http://localhost:8100/api/automobiles/"
        const pull = await fetch(vinUrl)
        const info = await pull.json();
        const autoData = info.autos

        let vinCheck = autoData.some(auto => vin === auto.vin);
        data.vip = vinCheck
        
    
        const newAppointment = "http://localhost:8080/api/appointments/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json",
            }
        }
        

        const response = await fetch(newAppointment, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();


            setVin('');
            setCustomer('');
            setDateTime('');
            setTime('');
            setTechnician('');
            setReason('');

            
        } else {

        }

    };

    const fetchData = async () => {
        const url = "http://localhost:8080/api/technicians/"
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnician(data.technicians)
        }
    }

useEffect(() => {
    fetchData();

}, []);

return (
    <>
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a service appointment</h1>
                    <form onSubmit={handleSubmit} id="create-service-appointment">
                        <div className="form-group mb-3">
                            <label htmlFor="vin">Automobile Vin</label>
                            <input
                            onChange={handleVin}
                            value={vin}
                            required
                            type="text"
                            placeholder=""
                            id="vin"
                            className="form-control"/>
                        </div>
                        
                        <div className="form-group mb-3">
                        <label htmlFor="customer">Customer</label>
                            <input
                            onChange={handleCustomer}
                            value={customer}
                            required
                            type="text"
                            placeholder=""
                            id="customer"
                            className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                        <label htmlFor="date">Date</label>
                            <input
                            onChange={handleDateTime}
                            value={date_time}
                            required
                            type="date"
                            placeholder="mm/dd/yyyy"
                            id="date_time"
                            className="form-control" />
                            <label htmlFor="date_time"></label>
                        </div>
                        <div className="form-group mb-3">
                        <label htmlFor="time">Time</label>
                            <input
                            onChange={handleTime}
                            value={time}
                            required
                            type="time"
                            placeholder="--:-- --"
                            id="time"
                            className="form-control" />
                            <label htmlFor="time"></label>
                        </div>
                        <div className="form-group mb-3">
                        <label htmlFor="technician">Technician</label>
                            <select onChange={handleTechnician}
                            value={selectedTechnician}
                            name="technician"
                            id="technician"
                            className="form-control"
                            required>
                                <option value="">Choose a technician...</option>
                                {technician && technician.map((technicians) => {
                                return (
                                <option key={technicians.id} value={technicians.id}>
                                {technicians.first_name}, {technicians.last_name }
                                </option>
                                );
                                })}
                            </select>
                        </div>
                        <div className="form-group mb-3">
                        <label htmlFor="reason">Reason</label>
                            <input
                            onChange={handleReason}
                            value={reason}
                            required
                            type="text"
                            placeholder=""
                            id="reason"
                            className="form-control" />
                            <label htmlFor="reason"></label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
                        }; 
export default ServiceForm;                                             