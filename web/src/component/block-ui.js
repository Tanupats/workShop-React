
import React, { useEffect,useState } from "react"
import BlockUi from 'react-block-ui';
import { DataGrid } from '@mui/x-data-grid';
import 'react-block-ui/style.css';

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'product_name', headerName: 'productname', width: 330 },
    { field: 'price', headerName: 'price', width: 160 },
    { field: 'discription', headerName: 'discription', width: 330 },
  
    
   
  ];
  

function Example () {

const [users, setUsers] = useState([])
const [blocking, setblocking] = useState([])    


function  toggleBlocking() {
          setblocking(false);
}

  
  const fetchData = async () => {
    const response = await fetch("http://localhost:3050/members")
    const data = await response.json()
    setUsers(data.books)
    console.log(data)
    setTimeout(()=>{
        toggleBlocking()
    },2000)
   
  }

  useEffect(() => {
    fetchData()
  }, [])


    return (
      <div>
        <BlockUi tag="div" blocking={blocking}>
        <div className="table_container">
        <h2>ตารางแสดงข้อมูลสินค้า</h2>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid

            rows={users}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
        </BlockUi>
       
      </div>
    );
  

}
export default Example;