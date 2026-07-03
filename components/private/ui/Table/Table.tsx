import { TableColumn } from "@/types/table.type";
import { TableAction } from "@/types/table-actions.type";

import { cn } from "@/lib/cn";

interface TableProps<T> {
  readonly columns: ReadonlyArray<TableColumn<T>>;
  readonly data: ReadonlyArray<T>;
  readonly actions?: ReadonlyArray<TableAction<T>>;
  readonly loading?: boolean;
}

export default function Table<T>({
  columns,
  data,
  actions,
  loading = false,
}: TableProps<T>) {

    if (loading) {
  return (
    <div className="flex h-40 items-center justify-center rounded-xl border border-[var(--dashboard-border)] text-sm text-[var(--dashboard-text-muted)]">
      Cargando...
    </div>
  );
}

    if (!data.length) {
  return (
    <div className="flex h-40 items-center justify-center rounded-xl border border-[var(--dashboard-border)] text-sm text-[var(--dashboard-text-muted)]">
      No hay datos disponibles
    </div>
  );
}

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-[var(--dashboard-border)]">
        
      <table className="w-full border-collapse">
        <thead className="w-full border-collapse bg-[var(--dashboard-sidebar)]">
            
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left text-xs font-semibold text-[var(--dashboard-text-muted)]"
              >
                {column.header}
                
              </th>
            ))}
          </tr>
            {actions && actions.length > 0 && (
              <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--dashboard-text-muted)]">
                 Acciones
              </th>
            )}
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t border-[var(--dashboard-border)]"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-4 py-3 text-sm text-[var(--dashboard-text)]"
                >
                  {column.render
                    ? column.render(row)
                    : String((row as never)[column.key])}
                </td>
              ))}
              {actions && actions.length > 0 && (
                <td className="px-4 py-3">
                    <div className="flex gap-2">
                    {actions.map((action) => (
                        <button
                        key={action.label}
                        onClick={() => action.onClick(row)}
                        className={cn(
                            "text-xs font-medium transition",
                            action.variant === "danger"
                            ? "text-red-400 hover:text-red-300"
                            : "text-[var(--dashboard-primary)] hover:opacity-80"
                        )}
                        >
                        {action.label}
                        </button>
                    ))}
                    </div>
                </td>
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}