import React from 'react';

import Header from './Header';

function App() {

  let counter = 0;

  function increment(){
    counter += 1;

    console.log(counter);
  }

  return (
  <div>
      <Header>Contador: {counter}</Header>
      <button onClick="{incrementar}">Incrementar</button>
  </div>
  );
}

export default App;
