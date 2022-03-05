import React from "react";
import { FaTrash } from 'react-icons/fa'
import { useGlobalContext } from '../hooks'

const Tablearea = () => {
    const { contacts, removeItem } = useGlobalContext()

    return (
        <div className="container col-12 col-md-9 tablearea">
          <table className="table  col-12 col-md-9 title">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Telefone</th>
              </tr>
            </thead>
            <tbody>
              {contacts.sort((a, b) => a.id - b.id).map(({id, nome, telefone}, index) => (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{nome}</td>
                    <td>{telefone}</td>
                    <td>
                        <button 
                            type='buttom' 
                            className='delete-btn'
                            onClick={() => removeItem(id)}
                        >
                            <FaTrash className="btnDelete btn-sucess"/>
                        </button>
                      </td>
                  </tr> 
              ))}
            </tbody>
          </table>
        </div>
    )
}
export default Tablearea;