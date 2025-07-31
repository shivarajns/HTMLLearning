import React, {useState} from 'react'


function App() {
  
  const[color, setColor] = useState('#FFFFFF');
  
  let handleColor = (e)=> {
    setColor(e.target.value);
  }
  
  return (
    <>
      <div className="color-picker-cnt">
        <h2>Color Picker</h2>
        <div className='color-cont' style={{backgroundColor: color}}>
          <p>Selected Color<div>{color}</div></p>
        </div>
      <label>Select a color</label>
      <input type='color' defaultValue={"#FFFFFF"} onChange={handleColor}></input>
      <p>Hex Value of color : {color}</p>
      </div>
    </>
  );
}

export default App;
