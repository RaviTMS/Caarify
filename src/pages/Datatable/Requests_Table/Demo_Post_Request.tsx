import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useState } from 'react'
import { SyntheticEvent } from 'react'


const Demo_Post_Request = () => {

    const [date, setDate] = useState("");
    const [custName, setCustName] = useState("");
    const [carName, setCarName] = useState("");
    const [carType, setCarType] = useState("");
    const [carNumber, setCarNumber] = useState("");
    const [carModel, setCarModel] = useState("");
    const [additionalSevice, setAdditionalService] = useState("");
    const [Actions, setActions] = useState("");
    const [Emergency, setEmergency] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [status, setStatus] = useState("");
    const [totalPrice, setTotalPrice] = useState("");

    const bookRequests = {
        Date: date,
        Customer_Name: custName,
        Car_Name: carName,
        Car_Type: carType,
        Car_Number: carNumber,
        Car_Model: carModel,
        Additional_Service: additionalSevice,
        Actions: Actions,
        Emergency_type: Emergency,
        Fuel_type: fuelType,
        Service_Type: serviceType,
        Status: status,
        Total_Price: totalPrice
    }

    const addBookingRequest = async(e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('https://caarify-de26d-default-rtdb.firebaseio.com/Requests.json',
            {
                method: 'POST',
                body: JSON.stringify(bookRequests),
                headers: {
                    Accept: 'application/json',
                    'content-type': 'application/json',
                }
            }
        );

        const response_data =  await response.json();

        console.log(response_data);
    }

    return (
        <Card>
            <CardHeader title='Basic' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
                <form onSubmit={addBookingRequest}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Date' type="date"
                                onChange={e => setDate(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Customer Name'
                                onChange={e => setCustName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Car Name'
                                onChange={e => setCarName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Car Type'
                                onChange={e => setCarType(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Car Number'
                                onChange={e => setCarNumber(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Car Model'
                                onChange={e => setCarModel(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Additional Service'
                                onChange={e => setAdditionalService(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Actions'
                                onChange={e => setActions(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Emergency Type'
                                onChange={e => setEmergency(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Fuel Type'
                                onChange={e => setFuelType(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Service Type'
                                onChange={e => setServiceType(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Status'
                                onChange={e => setStatus(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Total Price'
                                onChange={e => setTotalPrice(e.target.value)} />
                        </Grid>

                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    gap: 5,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Button type='submit' variant='contained' size='large'>
                                    Send Request!
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
}

export default Demo_Post_Request