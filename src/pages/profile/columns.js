export const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: row => (
      <div className="mw-paragrap limit-length">{row.value ? row.value : '--'}</div>
    ),
  },
  {
    Header: 'Title',
    accessor: 'title',
    Cell: row => (
      <div className="mw-paragrap limit-length">{row.value ? row.value : '--'}</div>
    ),
  },
  {
    Header: 'Pay',
    headerClassName: 'text-right',
    accessor: 'pay',
    Cell: row => (
      <div className="text-right fullw100 mw-paragrap-50 limit-length">{row.value ? row.value : '--'}</div>
    ),
  },
  {
    Header: 'Excercised',
    headerClassName: 'text-right',
    accessor: 'exercised',
    Cell: row => (
      <div className="text-right fullw100 mw-paragrap-50 limit-length">{row.value ? row.value : '--'}</div>
    ),
  },
  {
    Header: 'Year Born',
    headerClassName: 'text-right',
    accessor: 'year_born',
    Cell: row => (
      <div className="text-right fullw100 mw-paragrap-50 limit-length">{row.value ? row.value : '--'}</div>
    ),
  },
];
