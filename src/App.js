import {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import Moment from 'react-moment';

// IMPORT BULMA CSS ////////////////////////////////////////////////
import './Bulma.css' // https://bulma.io/

////////////////////////////////////////////////////////////////////
////  IMPORT COMPONENTS                      IMPORT COMPONENTS  ////
import CalEventList from './components/CalEventList';
import NewCalEventForm from './components/NewCalEventForm';
import DateSelector from './components/DateSelector';


function App() {

////////////////////////////////////////////////////////////////////
////  STATE                                              STATE  ////
  const [calEventList, setCalEventList] = useState([]);
  const [todayDate, setTodayDate] = useState("")
  const [currentTime, setCurrentTime] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
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
    console.log(newCalEvent);
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
    setTodayDate(moment().format('YYYY-MM-DD'));
    setSelectedDate(moment().format('YYYY-MM-DD'));
  }, [])

  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent is-info is light">
        <article className='tile is-child notification is-success'>
          <div className='content'>
            <div className='box has-text-centered has-background-primary-light'>
              <h1 className="title">Calented</h1>
              <div className='box has-background-info-light'>
                <h2 className='subtitle'>{moment().format('dddd')}</h2>
                <h2 className='subtitle'>{moment().format(' MMM Do YYYY')}</h2>
              </div>
            </div>
            
            <DateSelector setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>
          </div>
        </article>
        
        <div className='box'>
          <NewCalEventForm handleCreateCalEvent={handleCreateCalEvent} todayDate={todayDate}/>
        </div>
      </div>
      <div className="column">
        <CalEventList selectedDate={selectedDate} calEventList={calEventList} handleUpdateCalEvent={handleUpdateCalEvent} handleDeleteCalEvent={handleDeleteCalEvent}/>
      </div>
    </div>
  );
}

export default App;
