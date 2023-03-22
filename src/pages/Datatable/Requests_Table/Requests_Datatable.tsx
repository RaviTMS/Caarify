import MUIDataTable from 'mui-datatables'
import React, { useEffect, useState } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import "firebase/firestore";
import db from './Firebase_Config';


const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true
})

function Requests_Datatable() {
  const [loadedRequest, setLoadedRequest] = useState([]);
  const [bookings, setBookings] = useState<string[] | any[]>([]);
  const [items, setItems] = useState<string[] | any[]>([]); 

  const columns = [{ name: 'Date', options: { filterOptions: { fullWidth: true } } }, 'Car_Name', 'Customer_Name', 'Service_Type', 'Status', 'Actions']

  const data = [loadedRequest]
  
  useEffect(() => {
    fetchRequestData()
    fetchItems()
  }, [])

// fetching data from Firestore
  const fetchItems = async () => {
    const collectionRef = db.collection("Requests");
    const snapshot = await collectionRef.get();
    const fetchedItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      cust:doc.data()
    }));
    console.log(fetchedItems);
  };


  const fetchRequestData = async() => {
      const response = await fetch('https://caarify-de26d-default-rtdb.firebaseio.com/Bookings.json');
      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const req_Data = await response.json();

      // const loadedRequests = [];



      console.log(req_Data);
      setLoadedRequest(req_Data);
  }

  return (
    <CacheProvider value={muiCache}>
      {/* <ThemeProvider theme={createTheme()}> */}
        <MUIDataTable title={'Sevice Rquests'} data={data} columns={columns} />
      {/* </ThemeProvider> */}
    </CacheProvider>
  )
}

export default Requests_Datatable
