import React from 'react'
import "./MyComponent.css"

const MyComponent = () => {
    return (
        <div>
            <h1>CSS de componentes</h1>
            <p>Este é o paragrafo de componente</p>
            <p className='my-comp-paragraph'>Este tb é do componente</p>
        </div>
    )
}

export default MyComponent