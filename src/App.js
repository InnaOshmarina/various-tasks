import React, { Component } from 'react';
import lodash from 'lodash';

import DataTable from './components/DataTable';
import Loader from './components/shared/Loader';

import s from './styles.module.scss';

class App extends Component {
  state = {
    isLoading: true,
    data: [],
    sortDirection: 'asc',
    sortField: 'lastName',
  };

  async componentDidMount() {
    const response = await fetch(
      'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    );
    const data = await response.json();
    const { sortDirection, sortField } = this.state;
    this.setState({
      isLoading: false,
      data: lodash.orderBy(data, sortField, sortDirection),
    });
  }

  onSort = sortField => {
    const { data, sortDirection } = this.state;
    const clonedData = data;
    const sortType = sortDirection === 'asc' ? 'desc' : 'asc';

    const orderedData = lodash.orderBy(clonedData, sortField, sortType);
    this.setState({
      data: orderedData,
      sortDirection: sortType,
      sortField,
    });
  };

  render() {
    const { data, isLoading, sortDirection, sortField } = this.state;
    return (
      <div className={`container ${s.root}`}>
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          <DataTable
            data={data}
            onSort={this.onSort}
            sortDirection={sortDirection}
            sortField={sortField}
          />
        )}
      </div>
    );
  }
}

export default App;
