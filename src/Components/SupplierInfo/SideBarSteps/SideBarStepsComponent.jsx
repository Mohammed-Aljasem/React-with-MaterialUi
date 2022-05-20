import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import {ButtonStep} from "./ButtonStep";
import {Grid} from "@mui/material";
import * as React from 'react';
import {styled} from '@mui/material/styles';
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#00c12e' : '#d3f2de',
    },
}));

export function SideBarStepsComponent({activeStep, steps, completed, handleStep}) {
    return (
        <>

            <Stepper sx={{
                height: '100%',
                background: '#f8f8f9',
                flexDirection: 'start',
                paddingInline: 1,
                boxSizing: 'border-box',
            }} orientation="vertical" nonLinear activeStep={activeStep} connector={null}>
                <Box
                    sx={{
                        width: '100%',
                        height: 60,
                        marginTop: 0,
                        padding: 2,
                        boxSizing: 'border-box',
                        position: 'relative'
                    }}
                >
                    <img style={{
                        position: "absolute",
                        right: '55%',
                        height: 25
                    }} src='https://www.nupco.com/NupcoJobPortal/sites/default/files/favicon.ico'/>
                    <Typography variant="caption" sx={{display: 'inline-block', fontSize: 30, marginBottom: 1}}>
                        Nupco
                    </Typography>
                </Box>
                {steps.map((item, index) => (
                    <Step xs={{display: 'flex', padding: 0}} key={index}
                          completed={completed[index]}>
                        <ButtonStep icon={item.icon} label={item.stepName} step={index}
                                    completed={completed} activeStep={activeStep}
                                    onClick={handleStep(index)}></ButtonStep>
                    </Step>
                ))}
                <Box
                    sx={{
                        width: '100%',
                        height: 100,
                        marginTop: 6,
                        padding: 2,
                        boxSizing: 'border-box'
                    }}
                >
                    <Typography variant="caption" sx={{display: 'inline-block', fontSize: 16, marginBottom: 1}}>
                        You finished <span style={{fontWeight: 'boldest'}}> 10% </span> of the <br/>
                        application
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={30}/>
                </Box>
            </Stepper>

        </>
    );
}