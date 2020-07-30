
import React from 'react' 
import './styles.css';
import logo from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';


export default function NewIncident() {
    return (

      
        <div className="new-incident-container">
        <div className="content">

              <section>
                      <img src={logo} alt=""/>    
                      <h1>Cadastrar novo caso</h1>
                      <p>Descreva o caso de forma detalhada para encontrarmos o heroi para salva-lo</p>

            <Link className="back-link" to="/profile">
                      <FiArrowLeft size={16} color="#e02041" />
                   Voltar para Home
            </Link>  

              </section>
          
          <form action="">
          <input placeholder="Titulo do Caso"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="Valores em Kwanza"/>
          
          <button className="button"
           type="submit">Cadastrar</button>
          </form> 


        </div>

    </div>

    );
}