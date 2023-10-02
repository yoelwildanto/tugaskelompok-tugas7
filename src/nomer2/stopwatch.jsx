import React from 'react';
import './Stopwatch.css'; // Import the external CSS file

function Stopwatch() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  // Styling
  const buttonStyle = {
    width: '65px',
    height: '65px',
    borderRadius: '10%',
    fontSize: '20px',
    fontWeight: 'normal',
    margin: '0 140px',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
  };

  const startButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#05af02',
    color: 'white',
  };

  const stopButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ef0002',
    color: 'white',
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ffc605',
    color: 'white',
  };

  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh', 
    justifyContent: 'center', 
  };

  return (
    <div className="App">
   <div style={containerStyle}>
      <div>
      <span style={{ fontSize: '250px', fontFamily: 'roboto' }}>
          {("0"+Math.floor((time/(1000*60)) % 60)).slice(-2)} : {("0"+Math.floor((time/1000) % 60)).slice(-2)}
        </span>
      </div>
      <div>
        <button style={startButtonStyle} onClick={() => setTimerOn(true)}>Start</button>
        <button style={stopButtonStyle} onClick={() => setTimerOn(false)}>Stop</button>
        <button style={resetButtonStyle} onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
    </div>
  );
}

export default Stopwatch;
