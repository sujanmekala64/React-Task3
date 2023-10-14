import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const colors = ['#fe0000', '#00ff01', '#0000fe','#ffff00', '#ff00fe', '#00ffff', '#fea500','#81007f','#ffc0cb','#008001','#fe6347','#01ced1','#8b4512','#ff8b00','#4682b4','#fed700'];

  return (
    <div className="App">
      <h1 className='mt-4'><b>Color Picker</b></h1>
      <ColorPicker colors={colors} />
    </div>
  );
}
export default App;