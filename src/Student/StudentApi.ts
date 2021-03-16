import { get } from "lib/requestHandler";
import { useQuery } from "react-query";

export default interface Test {
  testId: string;
  testTitle: string;
  testCode: string;
  languages: string[];
  startDate: string;
  endDate: string;
  durationInMinutes: number;
}

export const getStudentTests = (): Promise<Test[]> => {
  return get<Test[]>(`./mock/testmock.json`);
};