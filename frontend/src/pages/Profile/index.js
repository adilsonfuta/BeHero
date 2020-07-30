import React from 'react';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import './styles.css';

export default function Profile() {
    return (
        <div className="profile-container">
        <header>
            <img src={logo} alt="Be the hero"/>

            <span> Bem Vinda, NovaDEV</span>
           <Link to="/incidents/new" className="button">Cadastrar novo Caso </Link>
            <button type="button">
                <FiPower size={18} color="#E02041"></FiPower>    
            </button> 
         </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p> Caso de Teste </p>
                    <strong> DESCRIÇÃO: </strong>
                    <p> Descrição Teste</p>
                    <strong>VALOR:</strong>
                    <p>200.000 $kz</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                </button>
                </li>


                <li>
                    <strong>CASO:</strong>
                    <p> Caso de Teste </p>
                    <strong> DESCRIÇÃO: </strong>
                    <p> Descrição Teste</p>
                    <strong>VALOR:</strong>
                    <p>200.000 $kz</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p> Caso de Teste </p>
                    <strong> DESCRIÇÃO: </strong>
                    <p> Descrição Teste</p>
                    <strong>VALOR:</strong>
                    <p>200.000 $kz</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p> Caso de Teste </p>
                    <strong> DESCRIÇÃO: </strong>
                    <p> Descrição Teste</p>
                    <strong>VALOR:</strong>
                    <p>200.000 $kz</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                </button>
                </li>
                
            </ul>



        </div>
    );
}