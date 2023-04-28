import React from 'react'

function ManufacturerList(props) {
    // if (props.manufacturers === undefined) {
    //     return null;
    //   }
    return (
        <>
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
        </table>
        </>
    )
}
export default ManufacturerList
