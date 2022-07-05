import {useState, useEffect} from 'react';
import axios from 'axios';
import { response } from 'express';



function App() {

  const [calEventList, setCalEventList] = useState([]);

  const getCalEventList = () => {
    axios.get('https://calented-server.herokuapp.com/api/calevents')
      .then((response) => {
        setCalEventList(response.data)
      })
  }
  const handleCreate = (newCalEvent) => {
    axios.post('https://calented-server.herokuapp.com/api/calevents', newCalEvent)
      .then((response) => {
        setCalEventList([...calEventList, response.data])
      })
  }
  const handleUpdate = (updatedCalEvent) => {
    axios.put('https://calented-server.herokuapp.com/api/calevents/' + updatedCalEvent.id, updatedCalEvent)
      .then((response) => {
        setCalEventList(calEventList.map(calEvent) => {
          return calEvent.id !== response.data.id ? calEvent : response.data
        })
      })
  }
  const handleDelete = (deletedCalEvent) => {
    axios.delete('https://calented-server.herokuapp.com/api/calevents/' + deletedCalEvent.id)
      .then((response) => {
        setCalEventList(calEventList.filter(calEvent => calEvent.id !== deletedCalEvent.id))
      })
  }

  useEffect(() => {
    getCalEventList();
  })

  return (
    <div className="App">
      <h1>Calented</h1>
      <ul>
        {calEventList.map((calEvent) => {
          return <li>{calEvent.title}: </li>
        })}
      </ul>
    </div>
  );
}

export default App;
