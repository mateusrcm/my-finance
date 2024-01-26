/**
 * TODO: add 'Calculated' column type
 * Must use math notations to be able to use any available column
 * in the calculation as long as basic math operations, a possible solution
 * could be using some kind of DataTable in RUST (wasm) otherwise could
 * be something like Reverse Polish Notation
 */

export type ColumnType = 'Text' | 'Date' | 'Number' | 'Boolean';

export interface Column {
  GUID: string;
  title: string;
  prop: string;
  type: ColumnType;
  isCustom: boolean;
}
