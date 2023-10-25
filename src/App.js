import { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function App() {
  const calendarRef = useRef(null);
  const handleViewChange = (newView) => {
    if(calendarRef.current) {
      calendarRef.current.getApi().changeView(newView);
    }
  };

  const handleDateClick = (arg) => {
    // `arg` contains information about the clicked date
    alert('Date clicked: ' + arg.dateStr);
  };

  return (
    <div className="App">
      <h1>FullCalendar Example</h1>
      <div>
        <button onClick={() => handleViewChange('dayGridMonth')}>Month</button>
        <button onClick={() => handleViewChange('dayGridWeek')}>Week</button>
        <button onClick={() => handleViewChange('timeGridDay')}>Day</button>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={[
          {
            title: 'Event 1',
            start: '2023-09-10T10:00:00',
            end: '2023-09-10T12:00:00',
          },
          {
            title: 'Event 2',
            start: '2023-09-15T14:00:00',
            end: '2023-09-15T16:00:00',
          },
        ]}
      />
    </div>
  );
}

export default App;
