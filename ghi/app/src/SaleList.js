import React, {useEffect, useState } from 'react'


function SaleList(props) {
    const [sales, setSales] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8090/api/sales/')
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales)

        }
    }
    useEffect(() => {
        fetchData();

    }, []);

    return (
        <>
        <h1 className="text-center mt-4">Sales</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Salesperson Employee ID</th>
                    <th>Salesperson Name</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {sales?.map(sale => {
                    return (
                        <tr key={ sale.id } value={sale.id}>
                            <td>{ sale.salesperson }</td>
                            <td>{sale.salesperson_first_name} {sale.salesperson_last_name}</td>
                            <td>{sale.customer} {sale.customer_last_name}</td>
                            <td>{ sale.automobile }</td>
                            <td>{sale.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>

    )
}
export default SaleList;
