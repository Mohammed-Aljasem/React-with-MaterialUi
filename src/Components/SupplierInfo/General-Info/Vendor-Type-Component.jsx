import { Grid, RadioGroup} from "@mui/material";
import Typography from "@mui/material/Typography";
import {RadioButtonCardComponent} from "../../RadioButtonCardComponent";

const vendorTypes = [
    'Small & Medium Enterprises',
    'Trade',
    'Manufacturer',
    'Contractor',
    'Agent',
    'Non Supplying Manufacturer'
];

export  function VendorTypeComponent(){
    return(
        <>
            <Grid item xs={12} style={{display: 'flex', marginTop: 64,}}>
                <Typography variant='h5'
                            style={{marginTop: 6, fontWeight: '500'}}>Vendor Type</Typography>
            </Grid>
            <Grid item columns={{xs: 4, sm: 8, md: 12}}
                  style={{display: 'flex', width: '100%'}}>
                <RadioGroup  style={{display: 'flex', width: '100%'}} name="use-radio-group" defaultValue="first">
                    <Grid container  columns={{xs: 4, sm: 8, md: 12}}
                          style={{width: '100%'}}>
                        {vendorTypes.map((item, index) =>
                            (<Grid item xs={4} sm={4} md={4} key={index+ 999}
                                  style={{paddingRight: 7, paddingTop: 16}}>
                                <RadioButtonCardComponent value={index+1} key={index}
                                                          label={item} />

                            </Grid>))}
                    </Grid>
                </RadioGroup>
            </Grid>
        </>
    )
}