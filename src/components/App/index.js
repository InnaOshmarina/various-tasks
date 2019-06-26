import React, { Component } from 'react';

import DataTable from '../shared/DataTable';
import { DIRECTION } from '../../constants/global';
import { doRequest } from '../../helpers/ApiHelper';
import { HEADERS } from '../../constants/usersDataTable';
import Loader from '../shared/Loader';

import s from './styles.module.scss';

class App extends Component {
  state = {
    isLoading: true,
    data: [],
    sortDirection: DIRECTION.ASC,
    sortField: 'lastName',
    currentPage: 1,
  };

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { sortDirection, sortField } = this.state;
    let ourData = [];
    try {
      const res = await doRequest(sortField, sortDirection);
      ourData = res.data;
    } catch (error) {
      console.error(error.message);
    } finally {
      this.setState({ isLoading: false, data: ourData });
    }
  };

  onSort = async sortField => {
    const { sortDirection } = this.state;

    const sortType =
      sortDirection === DIRECTION.ASC ? DIRECTION.DESC : DIRECTION.ASC;
    let ourData = [];
    try {
      const res = await doRequest(sortField, sortType);

      ourData = res.data;
    } catch (error) {
      console.error(error.message);
    } finally {
      this.setState({
        data: ourData,
        sortDirection: sortType,
        sortField,
        currentPage: 1,
      });
    }
  };

  changePageHandler = async (event, selected) => {
    event.preventDefault();

    const { sortDirection, sortField } = this.state;
    let ourData = [];
    try {
      const res = await doRequest(sortField, sortDirection, selected);
      ourData = res.data;
    } catch (error) {
      console.error(error.message);
    } finally {
      this.setState({ data: ourData, currentPage: selected });
    }
  };

  render() {
    const {
      currentPage,
      data,
      isLoading,
      sortDirection,
      sortField,
    } = this.state;
    return (
      <div className={`container ${s.root}`}>
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          <DataTable
            changePageHandler={this.changePageHandler}
            currentPage={currentPage}
            data={data}
            headers={HEADERS}
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
