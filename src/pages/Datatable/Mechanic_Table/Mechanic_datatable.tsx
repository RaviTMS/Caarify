import MUIDataTable from 'mui-datatables'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true
})

function Mechanic_Datatable() {

  const columns = [{ name: 'Name', options: { filterOptions: { fullWidth: true } } }, 'Email', 'Contact', 'Service Completed']

  const data = [
    ['Gabby George', 'Gabby@abc.com', '+91 8902827346', 5],
    ['Aiden Lloyd', "Aiden@abc.com", '+91 8902856346', 10],
    ['Jaden Collins', 'Jaden@abc.com', '+91 8902824546', 12],
    ['Franky Rees', 'Franky@abc.com', '+91 8902823656', 2],
  ]

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable title={'Mechanic Details'} data={data} columns={columns} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default Mechanic_Datatable
