import React, {useState} from 'react';
import '../ifoodCounter/IfoodCounter.css';

export default function IfoodCounter() {
    
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState ('counter-button-minus-active');

    function down(){
        if(value<=1){
            setButtonStyle('counter-button-minus-desactive')
        }
        if(value>0){
            setValue(value -1)
        }
    }
    
    function up(){
        setValue(value +1)
        setButtonStyle('counter-button-minus-active')
    }
  
    return (
    <div className='countex-wrapper'>
        <button onClick={down} className={buttonStyle}>-</button>
        <p>{value}</p>
        <button onClick={up}  className='counter-button-plus-active'>+</button>
    </div>
  )
}
