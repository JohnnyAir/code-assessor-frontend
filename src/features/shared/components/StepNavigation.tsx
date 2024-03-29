import React from 'react';
import {
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  Flex,
  ListItemProps,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { BsCardChecklist } from 'react-icons/bs';
import { themeGet } from '@styled-system/theme-get';
import styled from '@emotion/styled';

const StepContainer = styled(Box)`
  padding-left: 2rem;
  padding-right: 2rem;
  display: none;
  top: 21px;
  position: sticky;
  height: 100%;
  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    display: block;
    border-right-width: 1px;
  }
`;

const StepList = styled(List)`
  counter-reset: step-list;
`;

const StyledStepItem = styled(ListItem)`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  position: relative;
  padding-left: 3em;
  line-height: 34px;
  color: ${themeGet('colors.gray.400')};
  &:before {
    counter-increment: step-list;
    content: counter(step-list);
    width: 2em;
    height: 2em;
    position: absolute;
    left: 0;
    text-align: center;
    color: ${themeGet('colors.gray.400')};
    line-height: 30px;
    border-radius: 50%;
    border-color: ${themeGet('colors.gray.400')};
    border-width: 1px;
  }
  &.active {
    color: ${themeGet('colors.brand.400')};
  }
  &.active:before {
    border-color: ${themeGet('colors.brand.400')};
    border-width: 2px;
    color: ${themeGet('colors.brand.400')};
  }
  &.completed:before {
    color: transparent;
    border-color: ${themeGet('colors.green.400')};
  }
`;

const StepIcon = styled(ListIcon)`
  position: absolute;
  width: 2em;
  height: 2em;
  left: 0;
  fill: ${themeGet('colors.green.500')};
`;

interface StepItemProps extends ListItemProps {
  isActive: boolean;
  isCompleted: boolean;
}

const StepItem:React.FC<StepItemProps> = ({ children, isActive, isCompleted, ...props }) =>{
  let className = '';

  if (isActive) className = 'active';
  if (isCompleted) className = 'completed';

  return (
    <StyledStepItem className={className} {...props}>
      {isCompleted && <StepIcon as={MdCheckCircle} />}
      {children}
    </StyledStepItem>
  );
}

interface FormStepNavigationProps{
  steps:Array<string>;
  activeStepNumber:number;
  headerTitle:string;
}

const FormStepNavigation:React.FC<FormStepNavigationProps> = ({ steps, headerTitle, activeStepNumber }) => {
  return (
    <StepContainer px={20}>
      <Flex color="gray.600" mt={4} mb={20} align="center">
        <Icon as={BsCardChecklist} w="8" h="8" />
        <Text pl={4} fontWeight="mediun" fontSize="md">
          {headerTitle}
        </Text>
      </Flex>
      <StepList spacing={8}> 
        {steps.map((title, index) => (
          <StepItem
            isActive={index + 1 === activeStepNumber}
            isCompleted={index + 1 < activeStepNumber}
            key={index}
          >
            {title}
          </StepItem>
        ))}
      </StepList>
    </StepContainer>
  );
}

export default FormStepNavigation;
