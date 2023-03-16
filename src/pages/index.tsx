// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* <Grid item xs={12} md={4}>
          <Trophy />
        </Grid> */}
        <Grid item xs={12} md={12}>
          <StatisticsCard />
        </Grid>
        
        <Grid item xs={12}>
          {/* <Table /> */}
          <TableStickyHeader />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
