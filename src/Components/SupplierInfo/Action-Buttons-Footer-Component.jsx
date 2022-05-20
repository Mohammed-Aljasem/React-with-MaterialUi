import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function ActionButtonsFooterComponent({activeStep, handleBack, steps, completed, handleComplete, totalSteps, completedSteps, handleNext}){

    return(
        <Grid  container item xs={12}>
            <Grid  item xs={6}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{mr: 1}}
                >
                    Back
                </Button>
            </Grid>
            <Grid container item style={{display: 'flex', justifyContent: 'flex-end'}} xs={6}>
                <Grid item xs={3}>
                    {activeStep !== steps.length &&
                        (completed[activeStep] ? (
                            <Typography variant="caption" sx={{display: 'inline-block'}}>
                                This step {activeStep + 1} Completed
                            </Typography>
                        ) : (
                            <Button  style={{color: '#363158'}}  onClick={handleComplete}>
                                {completedSteps() === totalSteps() - 1
                                    ? 'Finish'
                                    : 'Complete Step'}
                            </Button>
                        ))}
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" size='large' style={{background: '#363158'}}  onClick={handleNext} >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}