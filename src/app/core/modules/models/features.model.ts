export interface Feature {
  key: string;
  label: string;
  options?: Option[];
  subfeatures?: Feature[];
  dependsOn?: string;
  featureMain: boolean;
  featureValue?: any[];
  condition?: any[];
  alternative?: boolean;
  values?: string[];
}

export interface Option {
  value: string | number;
  display: string;
  checked?: boolean;
}
