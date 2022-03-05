import React from "react";
import { useGlobalContext } from '../hooks'
import { CSVLink } from "react-csv";

const Inputarea = () => {
    const { handleSubmit, nome, setNome, telefone, setTelefone, newContacts } = useGlobalContext()

    return (
      <div className="container col-12 col-md-9 inputarea">
        <form onSubmit={handleSubmit} className='m-3 p-3'>
          <h3 className="title">Insira um novo contato abaixo:</h3>
          <div className='form-control pt-3 contentarea'>
            <div className="form-floating mb-3">
              <input 
                type="text"
                id="nomeInput"
                className='form-control'
                placeholder='Ex: João da silva'
                value={nome}
                onChange={(e)=> setNome(e.target.value)}
              />
              <label for="nomeInput" className="subtitle">Nome</label>
            </div>
            <div className="form-floating mb-3">
              <input 
                type="text"
                id="telefoneInput"
                className='form-control'
                placeholder='Ex: (31)99995555'
                value={telefone}
                onChange={(e)=> setTelefone(e.target.value)}
              />
              <label for="telefoneInput" className="subtitle">Telefone</label>
            </div>
            <div className="row align-items-center pt-2">
              <button 
                type='submit'
                id="btnCadastrar" 
                className='submit-btn mb-1 btn-success'
              >
                Cadastrar
              </button>
              <button
                id="btnBaixar"                 
                className='btn-success'
              >
                <CSVLink {...newContacts } id="txtLink" >
                  Baixar contatos.csv
                </CSVLink>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}
export default Inputarea;