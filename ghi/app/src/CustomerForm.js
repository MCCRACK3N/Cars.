import React, {useState} from 'react'

function CustomerForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setnumber] = useState('')

    const firstNameChange = (event) => {
        setFirstName(event.target.value)
    }
    const lastNameChange = (event) => {
        setLastName(event.target.value)
    }
    const addressChange = (event) => {
        setAddress(event.target.value)
    }
    const numberChange = (event) => {
        setnumber(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data={}
        data.first_name = firstName;
        data.last_name = lastName;
        data.address = address;
        data.phone_number = number
        console.log(data)
        const customerUrl = "http://localhost:8090/api/customers/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(customerUrl, fetchConfig)
        if (response.ok) {
            const newCustomer = await response.json();
            console.log(newCustomer);
            setFirstName('');;
            setLastName('');
            setAddress('');
            setnumber('');
        }
    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Salesperson</h1>
                    <form onSubmit={handleSubmit} id="create-salesperson-form">
                        <div className="form-floating mb-3">
                            <input onChange={firstNameChange}
                            placeholder="first_name"
                            required type="text"
                            name="first_name" id="first_name"
                            className="form-control" value={firstName} />
                            <label htmlFor="first_name">First name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={lastNameChange}
                            placeholder="last_name"
                            required type="text"
                            name="last_name" id="last_name"
                            className="form-control" value={lastName} />
                            <label htmlFor="last_name">Last name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={addressChange}
                            placeholder="address"
                            required type="text"
                            name="address" id="address"
                            className="form-control" value={address} />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={numberChange}
                            placeholder="phone_number"
                            required type="text"
                            name="phone_number" id="phone_number"
                            className="form-control" value={number} />
                            <label htmlFor="phone_number">Phone number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default CustomerForm
