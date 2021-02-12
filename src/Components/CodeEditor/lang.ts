export type langModeValue = { name: string; language: string };

export type langModeType = { [key: string]: langModeValue };

export type langType = {
  languages: Array<string>;
  mode: langModeType;
};

export const lang: langType = {
  languages: ["Java", "C++"],
  mode: {
    Java: { name: "text/x-java", language: "clike" },
    "C++": { name: "text/x-c++src", language: "clike" },
  },
};
