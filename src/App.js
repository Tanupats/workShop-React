import React, { useState } from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './App.css';

import AppHeader from './component/Appheader';
import Example from "./component/block-ui";


function App() {


  const [DataSerch, setData] = useState([])

  const [message, setMessage] = useState('');

 let id = "";

  const Serch = async () => {

    console.log(message)
    const response = await fetch("http://localhost:3050/member/" + id)
    const data = await response.json()
    setData(data)
    console.log(data)

  }

  const handleChange = (event) => {

    //Get input value from "event"
    setMessage(event.target.value);
    id = event.target.value;
    Serch()

    

  };



  return (

  
    <div className="app">
      <AppHeader />
    <div className="container" >

    
        <div className="date-picker">

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="วันที่" />
            </DemoContainer>
          </LocalizationProvider>

        </div>

        <div className="time_picker">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['MobileTimePicker', 'MobileTimePicker']}>
              <MobileTimePicker label={'ชั่วโมง / นาที'} openTo="นาที" />
              <MobileTimePicker
                label={'วินาที'}
                openTo="seconds"
                views={['minutes', 'seconds']}
                format="mm:ss"
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
     



      <div className="Autocomplete">
        <div className="MuiStack-root css-1xhypcz-MuiStack-root">
        <input
          placeholder=" ค้นหาข้อมูล"
          className="MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root"
          type="text"
          id="message"
          name="message"
          onChange={handleChange}

        />

</div>

        <div
          className="card-serch" >
            
         {    <p> {DataSerch.product_name}</p>}
          <p>   {DataSerch.price}</p>

            
        </div>

        <Example />


      </div>




      </div>
    </div>
  );
}

export default App;
