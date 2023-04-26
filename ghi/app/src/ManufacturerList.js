import React from 'react'

function ManufacturerList(props) {
    // if (props.manufacturers === undefined) {
    //     return null;
    //   }
    return (
        <>
        <header>Manufacturers</header>
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
