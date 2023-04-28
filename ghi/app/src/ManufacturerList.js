import React from 'react'

function ManufacturerList(props) {

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

                {props.manufacturers?.map(man => {
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
