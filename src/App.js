import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './App.css';

import AppHeader from './component/Appheader';
import DataTable from './component/Tables';
import FreeSolo from './component/Autocomplete';

const tattoos = {
  title: "tanupat",
  imgurl: "/image/profile1.jpg"
};



function App() {
 
  return (
    <div className="app">
      <AppHeader />

      <div className="app-grid">





      </div>

      
      <div className="date-picker">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
      </div>

      <div className="time_picker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticTimePicker orientation="landscape" />
        </LocalizationProvider>
      </div>


      <div className="Autocomplete">
          <FreeSolo/>
      </div>

      <div className="table_container">
        <h1>Sortable table with React</h1>
        <DataTable/>
      </div>

      

    </div>
  );
}

export default App;
