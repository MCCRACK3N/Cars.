import React, {useEffect, useState } from 'react'

function ManufacturerList(props) {
    const [manufacturers, setManufacturers] = useState([])
    const fetchData = async () => {
        const response = await fetch('http://localhost:8100/api/manufacturers/');
        if (response.ok) {
          const data = await response.json();
          setManufacturers(data.manufacturers)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
        <div id="list">
        <h1 className="text-center mt-4">Manufacturers</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>

                {manufacturers?.map(man => {
                    return(
                    <tr key={ man.id }>
                        <td>{ man.name}</td>
                    </tr>)
                })}
            </tbody>
        </table></div>
        </>
    )
}
export default ManufacturerList
