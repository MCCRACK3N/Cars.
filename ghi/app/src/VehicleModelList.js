import React from 'react'

function VehicleModelList(props) {
    // if (props.models === undefined) {
    //     return null;
    // }
    return (
        <>
        <header>Automobiles</header>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {props.models?.map(model => {
                    return (
                        <tr key={ model.href }>
                            <td>{ model.name }</td>
                            <td>{ model.manufacturer.name }</td>

                            <td> <img src={ model.picture_url }></img></td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>

    )
}
export default VehicleModelList
