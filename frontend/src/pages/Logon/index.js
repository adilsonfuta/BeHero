import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import heroesfoto from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';

 /** falta os icons */
export default function Logon(){

    return (
       <div className="logon-container">
           <section className="form">
                <img src={logo} alt=""/>
                <form action="">
                    <h1>Iniciar Sessão</h1>
                    <input type="text" placeholder="Sua ID"/>
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho Cadastro</Link>                    
                </form>
           </section>
           <img src={heroesfoto} alt=""/>
       </div>
    );
}

