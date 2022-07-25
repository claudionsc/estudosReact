
import { useState } from "react"

function RendCond2() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()


    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
      
        setUserEmail('') //ao colocar o valor vazio, a func setUser retorna falso e 
        //n renderiza nada userEmail. o state é alterado
        console.log('limpo')
    }

    return (
        <div className="comp2">
            <h1>Renderização Condicional Componente 2 com state</h1>
            <h2>Cadastre seu email</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite o seu email..." 
                onChange={(e) => setEmail(e.target.value)}
                />
            <button type="submit" onClick={enviarEmail}>
                Enviar email
                </button>
                {userEmail && (
                    <div>
                       <p>
                        O e-mail do usuário é: {userEmail}
                        </p> 
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default RendCond2