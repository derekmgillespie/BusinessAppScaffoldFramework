import React, { useState } from 'react';
import '../styles/DataGrid.css';

export type DataGridColumn = {
  key: string;
  label: string;
  width?: string;
  sortable?: boolean;
  filterable?: boolean;
  editable?: boolean;
};

export type DataGridProps = {
  columns: DataGridColumn[];
  data: any[];
  sortable?: boolean;
  filterable?: boolean;
  selectable?: boolean;
  editable?: boolean;
  pageSize?: number;
  pagination?: boolean;
  loading?: boolean;
  emptyText?: string;
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
  onFilter?: (filters: Record<string, string>) => void;
  onSelectionChange?: (selectedRows: any[]) => void;
  onEdit?: (rowIndex: number, columnKey: string, newValue: any) => void;
};

export function DataGrid({
  columns,
  data,
  sortable = true,
  filterable = false,
  selectable = false,
  editable = false,
  pageSize = 10,
  pagination = true,
  loading = false,
  emptyText = 'No data available',
  onSort,
  onFilter,
  onSelectionChange,
  onEdit,
}: DataGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [editingCell, setEditingCell] = useState<{ row: number; col: string } | null>(null);
  const [editValue, setEditValue] = useState('');

  // Apply filtering
  let filteredData = [...data];
  if (filterable && Object.keys(filters).length > 0) {
    filteredData = filteredData.filter((row) =>
      Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return String(row[key]).toLowerCase().includes(value.toLowerCase());
      })
    );
  }

  // Apply sorting
  if (sortColumn) {
    filteredData.sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  // Apply pagination
  const totalPages = pagination ? Math.ceil(filteredData.length / pageSize) : 1;
  const paginatedData = pagination
    ? filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : filteredData;

  const handleSort = (columnKey: string) => {
    if (!sortable) return;
    const newDirection =
      sortColumn === columnKey && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(columnKey);
    setSortDirection(newDirection);
    onSort?.(columnKey, newDirection);
  };

  const handleFilterChange = (columnKey: string, value: string) => {
    const newFilters = { ...filters, [columnKey]: value };
    setFilters(newFilters);
    setCurrentPage(1);
    onFilter?.(newFilters);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIndices = new Set(paginatedData.map((_, idx) => idx));
      setSelectedRows(allIndices);
      onSelectionChange?.(paginatedData);
    } else {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    }
  };

  const handleSelectRow = (index: number, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(index);
    } else {
      newSelected.delete(index);
    }
    setSelectedRows(newSelected);
    onSelectionChange?.(
      Array.from(newSelected).map((idx) => paginatedData[idx])
    );
  };

  const handleCellDoubleClick = (rowIndex: number, columnKey: string) => {
    if (!editable) return;
    setEditingCell({ row: rowIndex, col: columnKey });
    setEditValue(paginatedData[rowIndex][columnKey]);
  };

  const handleEditSave = () => {
    if (editingCell) {
      onEdit?.(editingCell.row, editingCell.col, editValue);
      setEditingCell(null);
    }
  };

  const handleEditKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEditSave();
    } else if (e.key === 'Escape') {
      setEditingCell(null);
    }
  };

  return (
    <div className={`ba-DataGrid ${loading ? 'ba-DataGrid--loading' : ''}`}>
      <div className="ba-DataGrid-wrapper">
        <table className="ba-DataGrid-table" role="grid">
          <thead className="ba-DataGrid-head">
            {filterable && (
              <tr className="ba-DataGrid-filterRow">
                {selectable && <th className="ba-DataGrid-headerCell"></th>}
                {columns.map((column) => (
                  <th key={`filter-${column.key}`} className="ba-DataGrid-headerCell">
                    {column.filterable !== false && (
                      <input
                        type="text"
                        className="ba-DataGrid-filter"
                        placeholder={`Filter ${column.label}...`}
                        value={filters[column.key] || ''}
                        onChange={(e) => handleFilterChange(column.key, e.target.value)}
                      />
                    )}
                  </th>
                ))}
              </tr>
            )}
            <tr className="ba-DataGrid-headerRow">
              {selectable && (
                <th className="ba-DataGrid-headerCell ba-DataGrid-headerCell--checkbox">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`ba-DataGrid-headerCell ${
                    sortable && column.sortable !== false
                      ? 'ba-DataGrid-headerCell--sortable'
                      : ''
                  }`}
                  style={{ width: column.width }}
                  onClick={() =>
                    sortable && column.sortable !== false && handleSort(column.key)
                  }
                  aria-sort={
                    sortColumn === column.key
                      ? sortDirection === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : 'none'
                  }
                >
                  <div className="ba-DataGrid-headerContent">
                    <span>{column.label}</span>
                    {sortable && column.sortable !== false && (
                      <span className="ba-DataGrid-sortIcon">
                        {sortColumn === column.key
                          ? sortDirection === 'asc'
                            ? '▲'
                            : '▼'
                          : '↕'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="ba-DataGrid-body">
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="ba-DataGrid-cell ba-DataGrid-cell--loading"
                >
                  Loading...
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="ba-DataGrid-cell ba-DataGrid-cell--empty"
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              paginatedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`ba-DataGrid-row ${
                    selectedRows.has(rowIndex) ? 'ba-DataGrid-row--selected' : ''
                  }`}
                >
                  {selectable && (
                    <td className="ba-DataGrid-cell ba-DataGrid-cell--checkbox">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(rowIndex)}
                        onChange={(e) => handleSelectRow(rowIndex, e.target.checked)}
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`ba-DataGrid-cell ${
                        editable && column.editable !== false
                          ? 'ba-DataGrid-cell--editable'
                          : ''
                      }`}
                      onDoubleClick={() =>
                        editable &&
                        column.editable !== false &&
                        handleCellDoubleClick(rowIndex, column.key)
                      }
                    >
                      {editingCell?.row === rowIndex &&
                      editingCell?.col === column.key ? (
                        <input
                          type="text"
                          className="ba-DataGrid-editInput"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onBlur={handleEditSave}
                          onKeyDown={handleEditKeyDown}
                          autoFocus
                        />
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination && !loading && paginatedData.length > 0 && (
        <div className="ba-DataGrid-pagination">
          <span className="ba-DataGrid-paginationInfo">
            Showing {(currentPage - 1) * pageSize + 1} to{' '}
            {Math.min(currentPage * pageSize, filteredData.length)} of{' '}
            {filteredData.length} entries
          </span>
          <div className="ba-DataGrid-paginationControls">
            <button
              className="ba-DataGrid-paginationButton"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  className={`ba-DataGrid-paginationButton ${
                    currentPage === page ? 'ba-DataGrid-paginationButton--active' : ''
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              );
            })}
            {totalPages > 5 && <span>...</span>}
            <button
              className="ba-DataGrid-paginationButton"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
