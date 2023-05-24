import React from 'react'

const Events = () => {
    const handleMyEvent = () => {
        console.log("ativou o evento")
    }

    const renderSomething = (x) => {
        if (x){
            return <h1>Renderizando isso</h1>
        } else{
            return <h1>Também posso renderizar</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={handleMyEvent}>clique aqui</button>
        </div>
        <div>
            <button onClick={() => console.log("clicou")}>
                Clique aqui também
            </button>
        </div>
        <div>
            <button onClick={() => {//esse metódo com função mais completa nao deve ser feito
                if (true){
                    console.log("isso nao deveria existir")
                }
            }}>Clica aqui, porfavor</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events