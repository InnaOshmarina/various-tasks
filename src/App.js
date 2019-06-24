import React, { Component } from 'react';
import axios from 'axios';

import { API_URL } from './constants/api';
import DataTable from './components/shared/DataTable';
import { HEADERS } from './constants/usersDataTable';
import Loader from './components/shared/Loader';
import { PAGE_SIZE } from './constants/global';

import s from './styles.module.scss';

class App extends Component {
  state = {
    isLoading: true,
    data: [],
    sortDirection: 'asc',
    sortField: 'lastName',
    currentPage: 1,
  };

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { sortDirection, sortField } = this.state;
    try {
      const res = await axios.get(API_URL, {
        params: {
          _limit: PAGE_SIZE,
          _sort: sortField,
          _order: sortDirection,
        },
      });
      const ourData = res.data;
      this.setState({ isLoading: false, data: ourData });
    } catch (e) {
      console.error(e);
    }
  };

  onSort = sortField => {
    const { sortDirection } = this.state;

    const sortType = sortDirection === 'asc' ? 'desc' : 'asc';
    (async () => {
      try {
        const res = await axios.get(API_URL, {
          params: {
            _limit: PAGE_SIZE,
            _sort: sortField,
            _order: sortType,
          },
        });

        const ourData = res.data;
        this.setState({
          data: ourData,
          sortDirection: sortType,
          sortField,
          currentPage: 1,
        });
      } catch (e) {
        console.error(e);
      }
    })();
  };

  changePageHandler = async (event, selected) => {
    event.preventDefault();

    const { sortDirection, sortField } = this.state;
    try {
      const res = await axios.get(API_URL, {
        params: {
          _limit: PAGE_SIZE,
          _sort: sortField,
          _order: sortDirection,
          _page: selected,
        },
      });
      const ourData = res.data;
      this.setState({ data: ourData, currentPage: selected });
    } catch (e) {
      console.error(e);
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
            data={data}
            headers={HEADERS}
            onSort={this.onSort}
            sortDirection={sortDirection}
            sortField={sortField}
            changePageHandler={this.changePageHandler}
            currentPage={currentPage}
          />
        )}
      </div>
    );
  }
}

export default App;
