export const getSearchParam: (search: string, key: string) => string | null = (
  search,
  key
) => {
  return new URLSearchParams(search).get(key);
};

export const delay: (s: number) => Promise<any> = (timeout) => new Promise((done) => setTimeout(done, timeout));
