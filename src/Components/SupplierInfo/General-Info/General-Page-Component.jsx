import {PageHeaderComponent} from "./Page-Header-Component";
import {GeneralCompanyInformationComponent} from "./General-Company-Information-Component";
import {CommunicationComponent} from "./Communication-Component";
import {VendorTypeComponent} from "./Vendor-Type-Component";
import {Grid} from "@mui/material";

export function GeneralPageComponent({activeStep}) {
    return (
        <Grid container item xs={6} style={{position: 'relative'}}>
            <div style={{
                height: 400,
                width: 700,
                borderRadius: '52% 48% 53% 47% / 52% 56% 44% 48%',
                border: '1px solid red',
                position: "absolute",
                left: -670,
                top: -200,
                transform: 'rotate(7deg)',
                zIndex: -10

            }}>

            </div>
            <PageHeaderComponent activeStep={activeStep}/>
            <GeneralCompanyInformationComponent/>
            <CommunicationComponent/>
            <VendorTypeComponent key={9999}/>
        </Grid>
    )
}