import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import FormStepNavigation from "../../shared/components/StepNavigation";
import QuestionInfoForm from "./QuestionInfoForm";
import QuestionDescriptionEditor from "./QuestionDescriptionEditor";
import QuestionScoreGuide from "./QuestionScoreGuide";
import { useState } from "react";

interface Props {}

const steps = ["Basic Info", "Question", "Score Guide"];

function CreateQuestion(props: Props) {
  const [activeStep, setActiveStep] = useState(1);

  const goToNextStep = () => {
    if (activeStep === steps.length) return;
    setActiveStep((activeStep) => activeStep + 1);
  };

  const goToPreviousStep = () => {
    if (activeStep === 1) return;
    setActiveStep((activeStep) => activeStep - 1);
  };

  return (
    <Grid templateColumns="18rem auto">
      <Box h="calc(100vh - 14rem)">
        <FormStepNavigation
          headerTitle="Create Question"
          steps={steps}
          activeStepNumber={activeStep}
        />
      </Box>
      <Box py="12" px="16">
        {
          {
            1: (
              <QuestionInfoForm
                goToNextStep={goToNextStep}
                goToPreviousStep={goToPreviousStep}
              />
            ),
            2: (
              <QuestionDescriptionEditor
                goToNextStep={goToNextStep}
                goToPreviousStep={goToPreviousStep}
              />
            ),
            3: (
              <QuestionScoreGuide
                goToNextStep={goToNextStep}
                goToPreviousStep={goToPreviousStep}
              />
            ),
          }[activeStep]
        }
      </Box>
    </Grid>
  );
}

export default CreateQuestion;
