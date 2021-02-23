import { post, get, base_url } from "../utils/requestHandler";

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

export default interface Test {
  testId: string;
  testTitle: string;
  testCode: string;
  languages: string[];
  startDate: string;
  endDate: string;
  durationInMinutes: number;
}

export const Login = (username: string, password: string) => {
  return post<User>(
    `${base_url}/auth/post`,
    JSON.stringify({ username, password })
  );
};

export const getStudentTests = (): Promise<Test[]> => {
  return get<Test[]>("./testmock.json");
};
