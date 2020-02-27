import React, { useState } from "react";
import socketIOClient from "socket.io-client";

const App = () => {
  const [response, setResponse] = useState(null);

  const endpoint = "wss://nu-gong-server.glitch.me";
  const socket = socketIOClient(endpoint);

  socket.on("partyAlert", data => {
    console.log(data);
    setResponse(data);
  });

  return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        border: '30px solid #521945',
        backgroundColor: '#EAF2EF',
        color: '#912F56',
        fontSize: '30px',
        fontWeight: 'bold',
        boxSizing: 'border-box',
        letterSpacing: '1px'
       }}>
        {response
            ? <p>
              {`Hooray! ${response.team} launched ${response.project}`}
            </p>
            : <p>Waiting...</p>}
      </div>
  );
}
export default App;