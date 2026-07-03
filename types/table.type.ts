import { ReactNode } from "react";

export interface TableColumn<T> {
  readonly key: string;
  readonly header: string;
  readonly render?: (row: T) => ReactNode;
}