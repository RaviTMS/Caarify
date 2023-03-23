// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import { makeStyles } from '@mui/styles'

// ** Icons Imports
import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import { Close } from 'mdi-material-ui'
import { Car3Plus, FormTextboxPassword } from 'mdi-material-ui'
import { useEffect, useState } from 'react'

const Modal_Mechanic = (props: any) => {
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState<string>('')
  const [phoneError, setPhoneError] = useState('')
  const [servicesError, setServicesError] = useState('')
  const [isValid, setIsvalid] = useState(true)

  const nameHandler = (e: any) => {
    if (e.target.value === '') {
      setNameError("Can't be empty")
    } else {
      setNameError('')
      return true
    }
  }
  const emailHandler = (e: any) => {
    if (e.target.value === '') {
      setEmailError("Can't be empty")
    } else if (!e.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)) {
      setEmailError('not a valid email address')
    } else {
      setEmailError('')
      return true
    }
  }
  const phoneHandler = (e: any) => {
    if (e.target.value === '') {
      setPhoneError("Can't be empty")
    } else if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10)
    } else if (e.target.value.length < 10) {
      setPhoneError('not a valid phone number')
    } else {
      setPhoneError('')
      return true
    }
  }
  const serviceHandler = (e: any) => {
    if (e.target.value === '') {
      setServicesError("Can't be empty")
    } else {
      setServicesError('')
    }
  }

  const sumbitHandler = () => {
    if (nameError === '') {
      setIsvalid(false)
    } else if (emailError === '') {
      setIsvalid(false)
    } else if (phoneError === '') {
      setIsvalid(false)
    } else if (servicesError === '') {
      setIsvalid(false)
    } else {
      setIsvalid(true)
    }
  }
  useEffect(sumbitHandler, [nameError, emailError, phoneError, servicesError])


  
//custom Css to hide num wheel
const useStyles = makeStyles({
  input: {
    '& input[type=number]': {
      '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    }
  }
})
  const classes = useStyles()
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
                className={classes.input}
                onWheel={(e: any) => {
                  e.target.blur()
                }}
                label='Phone No.'
                placeholder='+1-123-456-8790'
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
                error={servicesError == '' ? false : true}
                helperText={servicesError}
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
              <Button type='submit' variant='contained' onClick={sumbitHandler} disabled={!(!nameError && !emailError && !phoneError && !servicesError)} size='large'>
                Submit
                {console.log(isValid)}
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
