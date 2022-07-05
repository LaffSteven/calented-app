import {useState, useEffect} from 'react';
import axios from 'axios';

import './Bulma.css'

////////////////////////////////////////////////////////////////////
////  IMPORT COMPONENTS                      IMPORT COMPONENTS  ////



function App() {

////////////////////////////////////////////////////////////////////
////  STATE                                              STATE  ////
  const [calEventList, setCalEventList] = useState([]);
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
////  CALEVENT CRUD ROUTES                CALEVENT CRUD ROUTES  ////
  const getCalEventList = () => {
    axios.get('https://calented-server.herokuapp.com/api/calevents')
      .then((response) => {
        setCalEventList(response.data)
      })
  }
  const handleCreateCalEvent = (newCalEvent) => {
    axios.post('https://calented-server.herokuapp.com/api/calevents', newCalEvent)
      .then((response) => {
        setCalEventList([...calEventList, response.data])
      })
  }
  const handleUpdateCalEvent = (updatedCalEvent) => {
    axios.put('https://calented-server.herokuapp.com/api/calevents/' + updatedCalEvent.id, updatedCalEvent)
      .then((response) => {
        setCalEventList(calEventList.map((calEvent) => {
          return calEvent.id !== response.data.id ? calEvent : response.data
        }))
      })
  }

  const handleDeleteCalEvent = (deletedCalEvent) => {
    axios.delete('https://calented-server.herokuapp.com/api/calevents/' + deletedCalEvent.id)
      .then((response) => {
        setCalEventList(calEventList.filter(calEvent => calEvent.id !== deletedCalEvent.id))
      })
  }
////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getCalEventList();
  })

  return (
    <>
      <h1>Calented</h1>
      <ul>
        {calEventList.map((calEvent) => {
          return <li>{calEvent.title}: </li>
        })}
      </ul>
      <section class="section">
        <div class="container">
          <h1 class="title">
            Hello World
          </h1>
          <p class="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
