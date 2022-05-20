import {FormControlLabel, Radio} from "@mui/material";

export function RadioButtonCardComponent( props){
    return(
        <FormControlLabel
            style={{
                border: '1px solid gray',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                paddingLeft: 8,
                margin: 0,
                marginRight: 6,
                boxSizing: "border-box",
                borderRadius: 5,
                paddingBottom: 10,
                height: '100%'
            }}
            control={<Radio/>}
            {...props}
            labelPlacement="start"
        />
    );
}