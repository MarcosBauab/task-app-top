import Overview from "./components/Overview/Overview";
import React, {useState} from 'react'
import './styles/App.css'

function App() {

  const [tarefa, setTarefa] = useState('')
  const [arrTarefas, setArrTarefas] = useState([])

  return (
    <div className="App">

      {arrTarefas.length === 0 ? <p>Adicione tarefas!</p>: (<Overview tarefas={arrTarefas} onDeleter={(e) => {

        let index = arrTarefas.indexOf(e)
        let arrVelho = arrTarefas
        arrVelho.splice(index, 1)
        
        setArrTarefas([...arrVelho])

      }}  onEdit={(velho, novo) => {
        let index = arrTarefas.indexOf(velho)
        let arrVelho = arrTarefas
        arrVelho[index] = novo

        setArrTarefas([...arrVelho])
      }}/>)}
      
      <form onSubmit={(e) => {

        e.preventDefault()

      }}>
        <input type="text" onChange={(event) => {

          setTarefa(event.target.value)

        }} value={tarefa} />

        <button type="submit" onClick={() => {

          if(tarefa !== ''){
            //concat para não colocar algo dentro do estado
            //senão daria erro, assim como tarefas recebe algo
            setArrTarefas(arrTarefas.concat(tarefa))
            setTarefa('')

          }
        
        }}>Add</button>

      </form>
      
    </div>
  );
}

export default App;
