export interface Test {
  testId: string;
  testTitle: string;
  testCode: string;
  languages: string[];
  startDate: string;
  endDate: string;
  durationInMinutes: number;
  instructions: string;
}

export interface TestCardProps extends Test {
  onClick: (id?: string) => void;
}

export interface TestCardListProps {
  tests: Array<Test>;
  onClick: (id?: string) => void;
}
