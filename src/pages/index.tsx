///* auth 
import { getSession } from "next-auth/react"

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import ServiceRequest_DataTable from './Datatable/Requests_Table'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12}>
          <ServiceRequest_DataTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
  }
  export async function getServerSideProps(context:any){
    const session =await getSession(context)  
    
    if(!session){
      return{
        redirect:{
                destination: "./pages/login",
                permanent: false,
        },
      }
    }
      return{
        props:{session}
      }
  } 


export default Dashboard
