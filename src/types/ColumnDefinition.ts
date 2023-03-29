import { ReactNode } from 'react';

export interface ColumnDefinition<Object, FieldType extends string | number | symbol = keyof Object> {
  field?: FieldType;
  title: string;
  formatter?: (row: Object) => ReactNode;
}
