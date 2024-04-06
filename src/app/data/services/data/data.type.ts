import { GenericObject } from '../../../core/types';

export interface DataRow extends GenericObject {
  title: string;
  description: string;
  value: number;
  date: Date;
  category: string;
  type: CustomType;
}

export type CustomType = 'all' | 'debt' | 'credit';
