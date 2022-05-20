import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BsFillCheckCircleFill} from "react-icons/bs";

export function ButtonStep({onClick, step, icon, label, completed, activeStep, iconStyle}) {

    return (
        <Box
            sx={{
                width: '100%',
                height: 50,
                border: activeStep === step ? 'orange solid 1px' : '',
                borderRadius: 15,
                marginTop: 1.8,
                paddingTop: 0.5,
                paddingBottom: 0.5,
            }}
        >
            <Button variant="text" fullWidth={true} disableRipple
                    style={{
                        height: '100%',
                        verticalAlign: 'start',
                        justifyContent: 'flex-start',
                        backgroundColor: 'transparent'
                    }}
                    onClick={onClick}>
                <Grid container spacing={0}>
                    <Grid item xs={2} style={iconStyle}>
                        <Typography style={{fontSize: activeStep === step ? 30 : 27}} color='black'>
                            {icon}
                        </Typography>
                    </Grid>
                    <Grid item xs={8} style={{paddingInline: 0}}>
                        <Grid item xs={12} style={{paddingInline: 0, textAlign: 'left'}}>
                            <Typography variant='span' style={{color: 'gray', fontSize: 12}}>
                                step {step + 1}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{paddingInline: 0, textAlign: 'left'}}>
                            <Typography variant='body2' style={{color: 'black', fontSize: 17}}>
                                {label}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} style={{fontSize: 22}}>
                        {completed[step] ? <BsFillCheckCircleFill color='#00c12e' style={{fontSize: 15}}/> : ''}
                    </Grid>
                </Grid>
            </Button>
        </Box>
    );
}

const iconStyle = {paddingInline: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}