export interface Question {
  key: string;
  label: string;
  options?: Option[];
  subquestions?: Question[];
  dependsOn?: string;
  condition?: any[];
  singleOption?: boolean;
}

export interface Option {
  value: string | number;
  display: string;
  checked?: boolean;
}
