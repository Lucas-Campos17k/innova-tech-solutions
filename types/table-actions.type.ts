export interface TableAction<T> {
  readonly label: string;
  readonly onClick: (row: T) => void;
  readonly variant?: "primary" | "danger";
}