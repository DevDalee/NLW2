import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../Components/PageHeader/Index';
import Input from '../../Components/Input'
import Textarea from '../../Components/Textarea'
import Select from '../../Components/Select'

import wariningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import api from '../../services/api';
 
function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [wpp, setWpp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItems] = useState ([
        { week_day: 0, from:'', to:'' }
    ]);

    function setScheduleitemValue(position: number, field: string, value:string){
        const  udatedScheduleItems = scheduleItems.map((scheduleItem, index) =>{
            if ( index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        })

        setScheduleItems(udatedScheduleItems)
    }

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from:'', to:'' }
            ]);
        }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();


        api.post('classes', {
            name,
            avatar,
            wpp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() =>{
            alert('Cadastro realizado com sucesso!');
            history.push('/')
        }).catch(()=> {
            alert('Erro no cadastro!');
        })

    }
    return ( 
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrível que você quer dar aulas"
            description="O primeiro passo é preencher esse formulário de incrição"
             />

             <main>
                 <form onSubmit={handleCreateClass}>
                 <fieldset>
                     <legend>Seus dados</legend>
                     <Input 
                     name='name' 
                     label='Nome Completo' 
                     value={name} 
                     onChange={(e) => { setName(e.target.value)}}
                     />
                     <Input 
                     name='avatar' 
                     label='Avatar'
                     value={avatar} 
                     onChange={(e) => { setAvatar(e.target.value)}}
                     />
                     <Input 
                     name='wpp' 
                     label='Whatsapp'
                     value={wpp} 
                     onChange={(e) => { setWpp(e.target.value)}}
                     />
                     <Textarea 
                     name='bio' 
                     label='Bio'
                     value={bio} 
                     onChange={(e) => { setBio(e.target.value)}}
                     />
                 </fieldset>
                 <fieldset>
                     <legend>Sobre a Aula</legend>
                     <Select 
                     name='subject' 
                     label='Matéria'
                     value={subject} 
                     onChange={(e) => { setSubject(e.target.value)}}
                     options= {[
                        { value: 'Artes', label: 'Artes' },
                        { value: 'Biologia', label: 'Biologia' },
                        { value: 'Química', label: 'Química' },
                        { value: 'Física', label: 'Física' },
                        { value: 'Matemática', label: 'Matemática' },
                        { value: 'Português', label: 'Português' },
                        { value: 'Inglês', label: 'Inglês' },
                        { value: 'Espanhol', label: 'Espanhol' },
                        { value: 'Geografia', label: 'Geografia' },
                        { value: 'História', label: 'História' },
                     ]}
                     />

                     <Input 
                     name='cost' 
                     label='Custo da sua hora/aula'
                     value={cost} 
                     onChange={(e) => { setCost(e.target.value)}}
                     />
                 </fieldset>

                 <fieldset>
                     <legend>Horários disponíveis
                     <button type="button" onClick={addNewScheduleItem}>
                         + Novo horário
                     </button>
                     </legend>
                     
                     
                    {scheduleItems.map((scheduleItem, index) =>{
                        return(
                        <div key={scheduleItem.week_day} className="schedule-item">
                        <Select 
                        name='week_day' 
                        label='Dia da semana'
                        value={scheduleItem.week_day}
                        onChange={e => setScheduleitemValue(index, 'week_day', e.target.value)}
                        options= {[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta--feira' },
                        { value: '6', label: 'Sabado' },
                        ]}
                        />
                        <Input 
                        name="from" 
                        label="Das" 
                        type="time"
                        value={scheduleItem.from}
                        onChange={e => setScheduleitemValue(index, 'from', e.target.value)}
                        />
                        <Input 
                        name="to" 
                        label="Até" 
                        type="time"
                        value={scheduleItem.to}
                        onChange={e => setScheduleitemValue(index, 'to', e.target.value)}
                        />
                        </div>
                        );
                     })}
                 </fieldset>   

                 <footer>
                     <p>
                         <img src={wariningIcon} alt="Aviso importante"/>
                         Importante! <br/>
                         Preencha todos os dados
                     </p>
                     <button type='submit'>
                         Salvar cadastro
                     </button>
                </footer>
            </form>            
            </main>
        </div>
    )
}

export default TeacherForm;