import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/51535201?s=460&u=7543d10641601a6af1beea3eab7f02c6229c5c24&v=4" alt="Marcos Dalessandro"/>
                    <div>
                        <strong>Marcos Dalessandro</strong>
                        <span>Química</span>
                    </div>
            </header>
                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                       <br/> <br/>
                    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minha explosões.
                </p>
            <footer>
                <p> Preço/hora
                    <strong>
                        R$ 30,00
                    </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;