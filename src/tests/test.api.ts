import { CustomError } from "lib/error";
import { get } from "lib/requestHandler";
import { useQuery } from "react-query";
import { Test } from "./types";

export const getTests = (): Promise<Test[]> => {
  return get<Test[]>(`http://localhost:3001/mock/testmock.json`);
};

export const getTestById = (id: string): Promise<Test> => {
  return get<Test[]>(`http://localhost:3001/mock/testmock.json`).then(
    (tests) => {
      console.log(tests);
      let test = tests.find(({ testId }) => testId === id);
      if (!test) return Promise.reject("Test not found");
      return test;
    }
  );
};

export function useTests() {
  return useQuery<Test[], CustomError>(["test"], getTests);
}

export function useTest(id: string) {
  return useQuery<Test, CustomError>(["test", id], () => getTestById(id));
}
