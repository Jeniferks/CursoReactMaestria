import React from 'react'

const TemplateExpressions = () => {
    const name="Jenifer"
    const data = {
        age: 30,
        job: "Programmer"
    }
  return (
    <div>
        <h2>Olá! Me chamo {name}, tenho {data.age} anos e trabalho com {data.job} </h2>
        <p>{4+5}</p>
        <p>{console.log("teste")}</p>
    </div>
  )
}

export default TemplateExpressions