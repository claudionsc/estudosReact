import React from "react"


const listCustomer = [
    {
        id: 1,
        name: 'Claudio',
        skills: ['react', 'js', 'css', 'html']
    },
    {
        id: 2,
        name: 'Luis',
        skills: ['node', 'php']
    },
    {
        id: 3,
        name: 'Carine',
        skills: ['penal', 'constitucional']
    },
    {
        id: 4,
        name: 'Nascimento',
        skills: ['']
    },
]

function ListasEChaves(){

    const renderCustomers = (customer, index) => {
        return(
            <div  key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skills, index) => {
        return (
            
        <div style={{paddingLeft: '30px' }} key={`skill-${index}`}>
            <li >{skills}</li>
        </div>
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