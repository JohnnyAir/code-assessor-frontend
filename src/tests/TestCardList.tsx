import { Grid, GridProps, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useTests } from "./test.api";
import TestCard from "./TestCard";

interface Props {
  onClick: (id?: string) => void;
}

function TestCardList(props: Props) {
  const { data, isLoading, isError } = useTests();

  if (isLoading) return <Spinner />;
  if (isError) return <Text children="An Error Occured" />;
  return (
    <>
      {data?.map((test) => (
        <TestCard key={test.testId} {...test} onClick={props.onClick} />
      ))}
    </>
  );
}

export function TestCardListGrid(props: GridProps) {
  return (
    <Grid
      mt={5}
      width="full"
      templateColumns="repeat(auto-fill, minmax(28rem, 1fr))"
      gap={2}
      gridAutoRows="minmax(12rem, auto)"
      {...props}
    />
  );
}

export default TestCardList;
