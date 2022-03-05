import React from "react";
import { useGlobalContext } from '../hooks'

const Droparea = () => {
    const { handleDrop } = useGlobalContext()
    return (
      <div className="container col-12 col-md-9 d-flex droparea p-5">
        <div className="row">
          <header className="offset-md-3">
            <h1 className="title headtitle">contatos.csv</h1>
            <h6 className="title">Crie ou atualize seu arquivo contatos.csv</h6>
          </header>
          {/* Modal */}
          <div className="container offset-md-3 mt-2">
           <div class="container mb-4">
             <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Modelo contatos.csv
             </button>
           </div>  
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog">
               <div class="modal-content">
                 <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel">Modelo de como deve ser o seu arquivo contatos.csv</h5>
                 </div>
                 <div class="modal-body">
                   <p>id;nome;telefone<br/>
                       1;John Doe;(51)9827493<br/>
                       2;Luis Inacio;(31)9388409<br/>
                       3;Dilma R;(21)983898992<br/>
                   </p>
                 </div>
                 <div class="modal-footer">
                   <button type="button" class="btn btn-success" data-bs-dismiss="modal">Fechar</button>
                 </div>
               </div>
             </div>
           </div>
          </div>        
          <div
           id="droparea"
           className="form-control p-4 m-2"
           onDragOver={(e) =>  e.preventDefault()}
           onDrop={(e) => handleDrop(e)}
          >
              <p className="subtitle">Coloque aqui seu contatos.csv</p>
          </div>
        </div>
      </div>
    )
}
export default Droparea;