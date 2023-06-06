import React, { useState } from 'react'
import "./MyForm.css"

const MyForm = ({ user }) => {
    // controlled inputs
    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleName = (event) => {
        setName(event.target.value)
    }
    console.log(name)
    console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("enviando o formulario")
        console.log(name, email,bio, role)

        //Limpar formulários
        setName("")
        setEmail("")
        setBio("")
    }
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    return (
        <div>
            {/* envio de form */}
            {/* criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input type='text' name="name" placeholder='Digite seu nome' onChange={handleName} value={name} />
                </div>

                {/* Label envolvendo Input */}
                <label>
                    {/* simplificação de manipulação de state */}
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder='Digite seu email' onChange={(event) => setEmail(event.target.value)} value={email} />
                    
                </label>
                {/* Textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do usuário" onChange={(event) => setBio(event.target.value)} value={bio}></textarea>
                </label>
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(event) =>setRole(event.target.value)} value={role}>
                        <option value = "user">Usuário</option>
                        <option value = "editor">Editor</option>
                        <option value="admin"> Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" /> 
            </form>
        </div>
    )
}

export default MyForm