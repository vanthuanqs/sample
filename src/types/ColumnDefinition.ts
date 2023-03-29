import { ReactNode } from 'react';

export interface ColumnDefinition<FieldType extends string | number | symbol> {
  field: FieldType;
  title: string;
  formatter?: (row: { [key in FieldType]: any }) => ReactNode;
}
