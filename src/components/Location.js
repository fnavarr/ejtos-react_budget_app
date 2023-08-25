/*
In Location.js, you are importing AppContext and adding changeLication class 
to change the location along with its currencies. 

When you change the Location, currencies will be updated at all the required places.

*/

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-success' 
          style={{backgroundColor: 'lightgreen', 
                  fontSize: "1.0em", 
                  color: 'white'}}> Currency { 
        <select name="Location" id="Location" 
          style={{backgroundColor: 'lightgreen', 
                  width: '7em',
                  fontSize: "1.2em",    
                  marginLeft: '.5em' ,
                  color: 'gray' }} 
          onChange={event=>changeLocation(event.target.value)}>
          <option value="$">   $ Dollar</option>
          <option value="£">   £ Pound</option>
          <option value="€">   € Euro</option>
          <option value="₹">   ₹ Ruppee</option>
        
        
        </select>	
      }  
    </div>
   );
};

export default Location;