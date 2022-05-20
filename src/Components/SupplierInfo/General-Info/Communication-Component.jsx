import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FieldInputComponent} from "../../Field-Input-Component";


export  function CommunicationComponent(){
    return(
        <>
            <Grid item xs={12} style={{display: 'flex', marginTop: 64,}}>
                <Typography variant='h5'
                            style={{marginTop: 6, fontWeight: '500'}}>Communication</Typography>
            </Grid>
            <Grid container item columns={{xs: 4, sm: 8, md: 12}}
                  style={{display: 'flex', width: '100%'}}>
                <Grid item xs={6} sm={4} md={6}
                      style={{paddingRight: 13, paddingTop: 16}}>
                    <FieldInputComponent label='Mobile Number'/>
                </Grid>
                <Grid item xs={6} sm={4} md={6} style={{paddingLeft: 13, paddingTop: 16}}>
                    <FieldInputComponent label='Phone Number'/>
                </Grid>
                <Grid item xs={8} sm={4} md={12} style={{ paddingTop: 26}}>
                    <FieldInputComponent label='Email address'/>
                </Grid>
                <Grid item xs={4} size='medium' sm={4} md={12} style={{paddingTop: 26}}>
                    <FieldInputComponent label='Website ( Optional )'/>
                </Grid>
            </Grid>
        </>
    );
}