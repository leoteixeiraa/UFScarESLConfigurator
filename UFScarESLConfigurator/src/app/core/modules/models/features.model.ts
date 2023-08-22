export interface Feature {
  key: string;
  label: string;
  options?: Option[];
  subfeatures?: Feature[];
  dependsOn?: string;
  condition?: any[];
  alternative?: boolean;
}

export interface Option {
  value: string | number;
  display: string;
  checked?: boolean;
}
