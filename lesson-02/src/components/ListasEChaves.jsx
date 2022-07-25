import React from "react"


const listCustomer = [
    {
        id: 1,
        name: 'Claudio'
    },
    {
        id: 2,
        name: 'Luis'
    },
    {
        id: 3,
        name: 'Carine'
    },
    {
        id: 4,
        name: 'Nascimento'
    },
]

function ListasEChaves(){

    const renderCustomers = (customer, index) => {
        return(
            <li>{customer.name}</li>
        )
    }
    return(
        <div className="listasEc">
            <h1>Listas e Chaves 1</h1>
            <div>
                <ul>
                  {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )
}

export default ListasEChaves