import React, {useState} from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from  'react-router-dom';

// chamar api que liga back ao front
import Api from '../../Service/api';


export default function Register(){
    
    const [uf,setUf]=useState(''); 
    const [name,setName]=useState(''); 
    const [city,setCity]=useState(''); 
    const [email,setEmail]=useState(''); 
    const [WhatsApp,setWhatsApp]=useState(''); 
    
    async function HandleRegister(e) {           
        e.preventDefault();

        const data={ name, email, WhatsApp, city,uf };
        // api nao esta a linkar com o back e front
        //   console.log(data);
            try {                
                const response = await Api.post('ongs',data);                
                alert(`Seu Id de acesso: ${response.data.id}`);
                console.log(data);
            } catch (error) {
                alert('erro no cadastro tente novamente')
            }            
    }

    return (

      <div className="register-container">
          <div className="content">

                <section>
                        <img src={logo} alt=""/>    
                        <h1>Cadastro</h1>
                        <p>Faça o seu Cadastro, entre na plataforma e ajude a salvar animais</p>

                        <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho Cadastro</Link>  

                </section>
            
            <form action="" onSubmit={HandleRegister} >
           
            <input placeholder="Nome da ONG"
            value={name}
            onChange={ e=>setName(e.target.value) }
            />
           
            <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
            />
           
            <input placeholder="WhatsApp" 
                          value={WhatsApp}
                        onChange={e =>setWhatsApp(e.target.value)}
            />

            <div className="input-group">
            <input placeholder="Cidade"
                        value={city}
                        onChange={ e=>setCity(e.target.value) }/>
            <input placeholder="UF" style={{width:80}}
                        value={uf}
                        onChange={  e=>setUf(e.target.value) } />
            </div>

             <button className="button" type="submit">Cadastrar</button>

            </form>

          </div>

      </div>
       
    );
}

