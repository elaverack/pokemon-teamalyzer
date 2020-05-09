import React from 'react';
import { useTable } from 'react-table';

function OffensiveTable(props) {
  function genData() {
    const data = [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ];
    return data;
  }

  function genColumns() {
    return [
      {
        Header: 'Type 1',
        accessor: 'col1',
      },
      {
        Header: 'Type 2',
        accessor: 'col2',
      },
    ];
  }

  const columns = React.useMemo(() => genColumns(), []);

  const data = React.useMemo(() => genData(), []);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );

  function Table({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OffensiveTable;
