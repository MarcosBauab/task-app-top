import React, { useState } from 'react';
import './Overview.css'

function Overview(props) {

    const [visivel, setVisivel] = useState(-1)

    const [editando, setEditando] = useState(-1)

    const [novaTarefa, setNovaTarefa] = useState('')


    let id = 0

    //console.log(props.tarefas)

    return (

        <section>
            {props.tarefas.map((tarefaIndividual, indice) => {
                id += 1
                return (
                    editando === indice ?

                        (<div className='editando' style={{ backgroundColor: 'gray' }} onMouseEnter={() => {
                            setVisivel(indice)
                        }} onMouseLeave={() => {
                            setVisivel(-1)
                        }}>

                            <form className='formEditando' onSubmit={(e) => {

                                e.preventDefault()

                            }}>
                                <input type="text" onChange={(event) => {

                                    setNovaTarefa(event.target.value)

                                }} value={novaTarefa} />

                                <button type="submit" onClick={() => {

                                    if (novaTarefa !== '') {
                                        props.onEdit(tarefaIndividual, novaTarefa)

                                        setNovaTarefa('')
                                        setEditando(-1)
                                    }

                                }}>Add</button>

                            </form>
                        </div>)

                        :

                        (<div className='tarefa' onMouseEnter={() => {
                            setVisivel(indice)
                        }} onMouseLeave={() => {
                            setVisivel(-1)
                        }}>

                            <span key={id}>{id + '. ' + tarefaIndividual}</span>
                            <div className='tarefaInsider'>
                                <button className='trf' style={visivel === indice ? { opacity: 1 } : { opacity: 0, pointerEvents: 'none' }} onClick={() => {

                                    setNovaTarefa(tarefaIndividual)
                                    setEditando(indice)

                                }}>Editar</button>
                                <button className='trf' style={visivel === indice ? { opacity: 1 } : { opacity: 0, pointerEvents: 'none' }} onClick={() => {
                                    props.onDeleter(tarefaIndividual)
                                }}>X</button>
                                {/*opacity: 0 pra sumir e contar o espaço ainda assim*/}

                            </div>
                        </div>)

                )
            })}
        </section>

    )

}

export default Overview