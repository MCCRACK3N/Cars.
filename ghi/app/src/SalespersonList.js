import React, {useEffect, useState } from 'react'


function SalespersonList(props) {
    const [salespersons, setSalespersons] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8090/api/salespeople/')
        if (response.ok) {
            const data = await response.json();
            setSalespersons(data.salepeople)
        }
    }
    useEffect(() => {
        fetchData();

    }, []);

    return (
        <>
        <h1 className="text-center mt-4">Salespeople</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {salespersons?.map(person => {
                    return (
                        <tr key={ person.id }>
                            <td>{person.employee_id}</td>
                            <td>{ person.first_name }</td>
                            <td>{person.last_name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>

    )
}
export default SalespersonList;
