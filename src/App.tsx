import React from "react";
import './App.css'

interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = ({ name }) => {

  return (
    <div>
      <h1>Hollo {name}</h1>
    </div>
  );
};

export default App;
