import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FieldInputComponent} from "../../Field-Input-Component";

export function GeneralCompanyInformationComponent(){
    return(
        <>
            <Grid item xs={12} style={{display: 'flex', marginTop: 64, fontWeight: '500'}}>
                <Typography variant='h5' style={{marginTop: 6}}>General company information</Typography>
            </Grid>
            <Grid container item columns={{xs: 4, sm: 8, md: 12}}
                  style={{display: 'flex', width: '100%'}}>
                <Grid item xs={6} sm={4} md={6}
                      style={{paddingRight: 13, paddingTop: 16}}>
                    <FieldInputComponent label='Company Name (English)'/>
                </Grid>
                <Grid item xs={6} sm={4} md={6} style={{paddingLeft: 13, paddingTop: 16}}>
                    <FieldInputComponent label='Company Name (Arabic)'/>
                </Grid>
                <Grid item xs={8} sm={4} md={8} style={{paddingRight: 13, paddingTop: 26}}>
                    <FieldInputComponent label='Address'/>
                </Grid>
                <Grid item xs={4} size='medium' sm={4} md={4}
                      style={{paddingLeft: 13, paddingTop: 26}}>
                    <FieldInputComponent label='PO Box Address'/>
                </Grid>
            </Grid>
        </>
    )
}