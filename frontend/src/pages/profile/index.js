import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, APAD</span>
                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button">
                <FiPower style={{size: 18, color: "#E02041"}}/>
                </button>
            </header>

            <h1>Casos cadastros</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição do Teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 style={{size:20,color: '#a8a8b3'}}/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição do Teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 style={{size:20,color: '#a8a8b3'}}/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição do Teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 style={{size:20,color: '#a8a8b3'}}/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição do Teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 style={{size:20,color: '#a8a8b3'}}/>
                    </button>
                </li>
            </ul>
        </div>
    );
}
