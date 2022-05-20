import {Grid, TextField} from "@mui/material";

export function FieldInputComponent(props)
{
    return(
            <TextField
                {...props}
                fullWidth
                required
            />

    );
}