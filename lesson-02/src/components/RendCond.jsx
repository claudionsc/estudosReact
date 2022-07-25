import React from "react"

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Cadastrar Clientes</button>

const hasCostumer = true

const renderShowHistory = () => (
  <div>
        Clique no botão abaixo para visualizar o histótico dos clientes
        <br />
        {buttonA}
      </div>
)

const renderAddCostumer = () =>(
  <div>
        Clique abaixo para cadastrar
        <br />
        {buttonB}
      </div>
)

const costumer = 'Claudio Nascimento'
const showCostumer = () => {

  if (!hasCostumer) return null

  return (
    <div>
      <h1>Nome do Cliente: {costumer}</h1>
    </div>
  )
}


function RendCond() {
  return (
   <div className="comp1">
    <h1>Renderização Condicional Componente 1</h1>
    {/* {hasCostumer && (

    <div>
      Clique no botão abaixo para visualizar o histótico dos clientes
    <br />
    {buttonA}
    </div>
    )} */
    hasCostumer ? renderShowHistory() : renderAddCostumer()}
    <div>
      {showCostumer()}
    </div>
  </div>
  );
};

export default RendCond