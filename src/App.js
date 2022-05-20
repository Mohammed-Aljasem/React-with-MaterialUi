import * as React from 'react';
import Box from '@mui/material/Box';
import {
    Grid,
    IconButton,
} from "@mui/material";
import {FaRegAddressBook} from 'react-icons/fa';
import {HiOutlineHashtag, HiOutlineDocumentSearch} from 'react-icons/hi';
import {AiOutlineFileExclamation} from 'react-icons/ai';
import {MdOutlineHistory} from 'react-icons/md';
import {CgCopy} from 'react-icons/cg';
import {RiMoneyDollarBoxLine, RiInboxArchiveLine} from 'react-icons/ri';
import './App.css'
import {SideBarStepsComponent} from "./Components/SupplierInfo/SideBarSteps/SideBarStepsComponent";
import {GeneralPageComponent} from "./Components/SupplierInfo/General-Info/General-Page-Component";
import {ActionButtonsFooterComponent} from "./Components/SupplierInfo/Action-Buttons-Footer-Component";
import {ActionButtonsHeaderComponent} from "./Components/SupplierInfo/Action-Buttons-Header-Component";
import {FinalPageResultComponent} from "./Components/SupplierInfo/Final-Page-Result/Final-Page-Result-Component";

const steps = [{
    'stepName': 'CR number',
    'icon': <HiOutlineHashtag/>
},
    {
        'stepName': 'General info',
        'icon': <AiOutlineFileExclamation/>
    },
    {
        'stepName': 'Contacts',
        'icon': <FaRegAddressBook/>
    },
    {
        'stepName': 'Product details',
        'icon': <RiInboxArchiveLine/>
    },
    {
        'stepName': 'Financial details',
        'icon': <RiMoneyDollarBoxLine/>
    },
    {
        'stepName': 'Documents',
        'icon': <CgCopy/>
    },
    {
        'stepName': 'History',
        'icon': <MdOutlineHistory/>
    },
    {
        'stepName': 'Preview and Submit',
        'icon': <HiOutlineDocumentSearch/>
    }

];


function App() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return Object.keys(steps).length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            boxSizing: 'border-box',
            margin: 0
        }}>
            <Grid container>
                <Grid item xs={2}>
                    <SideBarStepsComponent steps={steps} completed={completed} activeStep={activeStep}
                                           handleStep={handleStep}/>
                </Grid>
                <Grid item xs={10}>
                    {allStepsCompleted() ? (
                        <FinalPageResultComponent handleReset={handleReset} />
                    ) : (
                        <Grid container style={{width: '100%', justifyContent: 'center', marginBottom: 10}}>
                            <ActionButtonsHeaderComponent />
                            <GeneralPageComponent activeStep={activeStep}/>
                            <ActionButtonsFooterComponent
                                activeStep={activeStep}
                                completed={completed}
                                handleComplete={handleComplete}
                                steps={steps}
                                completedSteps={completedSteps}
                                handleBack={handleBack}
                                handleNext={handleNext}
                                totalSteps={totalSteps}
                            />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
