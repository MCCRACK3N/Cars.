import React, {useEffect, useState } from 'react'


function VehicleModelList(props) {
    const [models, setModel] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8100/api/models/')
        if (response.ok) {
            const data = await response.json();
            setModel(data.models)
        }
    }
    useEffect(() => {
        fetchData();

    }, []);

    return (
        <>
        <h1 className="text-center mt-4">Automobiles</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {models?.map(model => {
                    return (
                        <tr key={ model.href }>
                            <td>{ model.name }</td>
                            <td>{ model.manufacturer.name }</td>

                            <td><img src={ model.picture_url }></img></td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>

    )
}
export default VehicleModelList
