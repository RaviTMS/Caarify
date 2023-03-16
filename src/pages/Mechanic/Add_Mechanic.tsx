import * as React from 'react';
import { ElementType } from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import Modal from '@mui/material/Modal';
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';
import Modal_Mechanic from './Modal_Mechanic';
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

const Add_Mechanic = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <ButtonStyled component='label' variant='contained' onClick={handleOpen}>
                + New Mechanic
            </ButtonStyled>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DatePickerWrapper>
                    <Grid container spacing={6}
                        mt={10}
                        alignItems="center"
                        justifyContent="center">
                        <Grid item xs={6} md={6}>
                            <Modal_Mechanic onClose={handleClose} />
                        </Grid>
                    </Grid>
                </DatePickerWrapper>
            </Modal>
        </div>
    );
}

export default Add_Mechanic;