import React from "react"



const ManipulandoEventos = () => {

    const name = 'DIO'

    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }

    const showEvent = (e) => {
        console.log('evento clicado')
        console.log(e)
        alert(name)

    }
    
    const ButtonManiEvents = <button onClick={showEvent}>Mostrar Evento</button>
    
    return (
        <div className="maniEvents">
            <h1>Manipulando eventos 1</h1>
            {ButtonManiEvents}
            <input onChange={handleChange} type="text" />
        </div>
    )
}

export default ManipulandoEventos