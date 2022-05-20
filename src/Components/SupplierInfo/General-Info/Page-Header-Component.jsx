import {Card, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {BsFillCheckCircleFill} from "react-icons/bs";
import Button from "@mui/material/Button";

export function PageHeaderComponent({activeStep}){
    return(
        <>
            <Grid item xs={6} style={{display: 'flex', marginTop:64}}>
                <Typography style={{
                    borderRadius: '50%',
                    width: 35,
                    height: 35,
                    background: '#fa4100',
                    textAlign: 'center',
                    display: 'flex',
                    marginRight: 10,
                    color: 'white'
                }} sx={{mt: 2.2, mb: 1}} variant='h6'> <span
                    style={{display: 'inline-block', margin: 'auto'}}>{activeStep + 1}</span>
                </Typography>
                <Typography variant='h4' sx={{mt: 2, mb: 1}}>General </Typography>
            </Grid>
            <Grid item xs={12} style={{display: 'flex'}}>
                <Card
                    style={{width: '100%', padding: 16, border: 'solid 1px #00c12e'}}
                    variant="outlined">
                    <Grid container>
                        <Grid item xs={4} style={{display: 'flex'}}>
                            <Typography variant='h6'>CR number </Typography>
                        </Grid>
                        <Grid item xs={5} style={{display: 'flex', justifyContent: 'center'}}>
                            <Typography variant='h6'>18276447958</Typography>
                        </Grid>
                        <Grid item xs={3} style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <BsFillCheckCircleFill color='#00c12e'
                                                   style={{fontSize: 22, marginRight: 10}}/>
                            <Typography variant='h6'>Verified</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Typography variant='subtitle1' style={{marginTop: 6}}>Do you have international CR
                    ?</Typography>
                <Button variant="text"
                        style={{padding: 0, marginTop: 6, textAlign: 'right', color: '#f68c46'}}>Edit</Button>
            </Grid>
        </>
    )
}