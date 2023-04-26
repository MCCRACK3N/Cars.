import React, {useEffect, useState} from 'react'

function SaleForm() {
    const [vin, setVin] = useState('')
    const [salesperson, setSalesperson] = useState('')
    const [customer, setCustomer] = useState('')
    const [price, setPrice] = useState('')

    const [vins, setVins] = useState([])
    const [salespersons, setSalespersons] = useState([])
    const [customers, setCustomers] = useState([])

    const vinChange = (event) => {
        setVin(event.target.value)
    }
    const salepersonChange = (event) => {
        setSalesperson(event.target.value)
    }
    const customerChange = (event) => {
        setCustomer(event.target.value)
    }
    const priceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data= {}
        data.customer = customer;
        data.salesperson = salesperson;
        data.vin = vin
        data.price = price;


        console.log(data)
        const saleUrl = "http://localhost:8090/api/sales/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(saleUrl, fetchConfig);
        if (response.ok) {
            const newSale = await response.json();
            console.log(newSale);
            setVin('');
            setSalesperson('');
            setCustomer('');
            setPrice('');
        }
        window.location.reload();
    }
    const customerfetchData = async () => {
        const customerurl = 'http://localhost:8090/api/customers/';
        const response = await fetch(customerurl);
        if (response.ok) {
            const data = await response.json();
            console.log(data, "data")

            setCustomers(data.customers)

        }
    }
    const vinfetchdata = async () => {
        const vinurl = "http://localhost:8100/api/automobiles/"
        const response = await fetch(vinurl)
        if (response.ok) {
            const data = await response.json();
            console.log(data, "auto data")
            setVins(data.autos)
        }
    }
    const salefetchdata = async () => {
        const saleurl = "http://localhost:8090/api/salespeople/"
        const response = await fetch(saleurl)
        if (response.ok) {
            const data = await response.json();
            console.log(data, "salesperson data")
            setSalespersons(data.salepeople)
        }
    }
    useEffect(() => {
        customerfetchData();
        vinfetchdata();
        salefetchdata();
    }, []);

    return (
        <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Record a new sale</h1>
          <form onSubmit={handleSubmit} id="create-sale-form">
            <div className="mb-3">
              <select onChange={vinChange} required name="vin"
              id="vin"
              className="form-select" value={vin} >
                <option value="">Choose an automobile VIN</option>
                {vins?.map(vin => {
                    return (
                        <option key={vin.href} value={vin.href}>
                            {vin.vin}
                        </option>
                    )
                })}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={salepersonChange} required name="saleperson"
              id="saleperson"
              className="form-select" value={salesperson} >
                <option value="">Choose a salesperson</option>
                {salespersons?.map(salesperson => {
                    return (
                        <option key={salesperson.id} value={salesperson.id}>
                            {salesperson.first_name} {salesperson.last_name}
                        </option>
                    )
                })}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={customerChange} required name="customer"
              id="customer"
              className="form-select" value={customer} >
                <option value="">Choose a customer</option>
                {customers.map(cust => {
                    return (
                        <option key={cust.id} value={cust.id}>
                            {cust.first_name} {cust.last_name}
                        </option>
                    )
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input onChange={priceChange} placeholder="price"
              required type="number"
              name="price" id="price"
              className="form-control" value={price} />
              <label htmlFor="price">Price</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>



    );
}
export default SaleForm
