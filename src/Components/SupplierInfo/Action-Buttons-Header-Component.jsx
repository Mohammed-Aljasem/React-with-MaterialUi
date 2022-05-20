import {Grid, IconButton} from "@mui/material";
import {FaTimesCircle} from "react-icons/fa";

export function ActionButtonsHeaderComponent(){
    return <Grid item xs={12} style={{display: 'flex', justifyContent: 'flex-end'}}>
        <IconButton aria-label="delete">
            <FaTimesCircle/>
        </IconButton>
    </Grid>
}