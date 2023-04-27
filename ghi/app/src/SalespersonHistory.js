import React, {useEffect, useState} from 'react'

function SalespersonHistory() {
    const [sales, setSales] = useState([])
    const [search, setSearch] = useState('')

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
    
    const handleSearch = event => {
        setSearch(event.target.value.toLowerCase())
    }
    const filterName = sales.filter(sale =>
        sale.salesperson_first_name.toLowerCase().includes(search))

    return (
        <>
        <h1 className="text-center mt-4">Salesperson History</h1>
        <form className="searchBar">
            <input type="text"
            className="searchBarinput"
            placeholder='search Salesperson name'
            value={search}
            onChange={handleSearch} />
        </form>
        <table className="table table-striped">
            <thead>
                <tr>

                    <th>Salesperson Name</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {filterName.map(sale => {
                    return (
                        <tr key={ sale.id } value={sale.id}>

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
export default SalespersonHistory;
