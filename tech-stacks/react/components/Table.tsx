import React from 'react';
import '../styles/Table.css';

export type TableColumn = {
  key: string;
  label: string;
  width?: string;
};

export type TableProps = {
  columns: TableColumn[];
  data: any[];
  sortable?: boolean;
  pagination?: boolean;
};

export function Table({ columns, data, sortable = false, pagination = false }: TableProps) {
  return (
    <div className="ba-Table-wrapper">
      <table className="ba-Table">
        <thead className="ba-Table-head">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="ba-Table-header"
                style={{ width: column.width }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="ba-Table-body">
          {data.map((row, index) => (
            <tr key={index} className="ba-Table-row">
              {columns.map((column) => (
                <td key={column.key} className="ba-Table-cell">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
