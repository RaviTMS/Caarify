// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

// ** Icons Imports

// ** Demo Tabs Imports

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import Mechanic_Details from './Mechanic_Details'



const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState<string>('account')


  return (
    <Card>
      <TabContext value={value}>
        <TabPanel sx={{ p: 0 }} value='account'>
          <Mechanic_Details />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings
