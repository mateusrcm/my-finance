import { FormControl } from '@angular/forms';

/**
 * TODO: add 'Calculated' column type
 * Must use math notations to be able to use any available column
 * in the calculation as long as basic math operations, a possible solution
 * could be using some kind of DataTable in RUST (wasm) otherwise could
 * be something like Reverse Polish Notation
 */
export enum ColumnType {
  TEXT,
  DATE,
  NUMBER,
  BOOLEAN,
  CATEGORY,
  STRICT_CATEGORY,
}

export interface Column {
  GUID: string;
  title: string;
  prop: string;
  type: ColumnType;
  isCustom: boolean;
  isMandatory: boolean;
  values: string[] | null;

  /**
   * Inherit properties
   *
   * Props for future BE implementation
   */
  createdBy?: string;
  createdAt?: string;
  modifiedBy?: string;
  modifiedAt?: string;
}

export interface ColumnForm {
  title: FormControl<string>;
  type: FormControl<ColumnType>;
  isMandatory: FormControl<boolean>;
  values: FormControl<string[] | null>;
}

export interface ColumnsConfiguration {
  columns: Column[];
  selectedColumnsGUID: string[];
}
