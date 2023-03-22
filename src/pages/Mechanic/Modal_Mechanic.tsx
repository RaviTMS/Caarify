// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import { Close } from 'mdi-material-ui'
import { Car3Plus, FormTextboxPassword } from 'mdi-material-ui'
import { useState } from 'react'

const Modal_Mechanic = (props: any) => {
  const [nameError, setNameError] = useState('')
  const [emailError, SetEmailError] = useState<string>('')
  const [phoneError, SetPhoneError] = useState('')
  const [ServicesError, SetServicesError] = useState('')

  const nameHandler = (e: any) => {
    if (e.target.value === '') {
      setNameError("Can't be empty")
    } else {
      setNameError('')
    }
  }
  const emailHandler = (e: any) => {
    if (e.target.value === '') {
      SetEmailError("Can't be empty")
    } else if (!e.target.value.match('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i')) {
      SetEmailError('not a valid email address')
    } else {
      setNameError('')
    }
  }
  const phoneHandler = (e: any) => {
    if (e.target.value === '') {
      SetPhoneError("Can't be empty")
    } else {
      SetPhoneError('')
    }
  }
  const serviceHandler = (e: any) => {
    if (e.target.value === '') {
      SetServicesError("Can't be empty")
    } else {
      SetServicesError('')
    }
  }

  return (
    <Card>
      <CardHeader title='ADD MECHANIC' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={nameError == '' ? false : true}
                onChange={nameHandler}
                helperText={nameError}
                label='Full Name'
                placeholder='Leonard Carter'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={emailError == '' ? false : true}
                onChange={emailHandler}
                type='email'
                label='Email'
                placeholder='carterleonard@gmail.com'
                helperText={emailError}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={phoneError == '' ? false : true}
                onChange={phoneHandler}
                helperText={phoneError}
                type='number'
                label='Phone No.'
                placeholder='+1-123-456-8790'
                inputProps={(e:any) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Phone />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={ServicesError == '' ? false : true}
                helperText={ServicesError}
                onChange={serviceHandler}
                type='number'
                label='services'
                placeholder='Services'
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  inputProps: { min: 0 },
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Car3Plus />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='space-between'>
              <Button type='submit' variant='contained' size='large'>
                Submit
              </Button>
              <Button type='submit' variant='contained' size='large' color='error' onClick={props.onClose}>
                Close
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default Modal_Mechanic
