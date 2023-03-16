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

  const columns = [{ name: 'Name', options: { filterOptions: { fullWidth: true } } }, 'Email', 'Service Completed']

  const data = [
    ['Gabby George', 'Gabby@abc.com', 'Oil Change'],
    ['Aiden Lloyd', "Aiden@abc.com", 'Oil Change'],
    ['Jaden Collins', 'Jaden@abc.com', 'Oil Change'],
    ['Franky Rees', 'Franky@abc.com', 'Oil Change'],
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
