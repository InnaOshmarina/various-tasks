import React, { Component, Fragment } from 'react';

import DataTable from '../shared/DataTable';
import { DIRECTION, PAGE_SIZE } from '../../constants/global';
import { doRequest } from '../../helpers/ApiHelper';
import { HEADERS } from '../../constants/usersDataTable';
import Loader from '../shared/Loader';
import Search from '../shared/Search';
import WrapperToolset from '../shared/Ui/WrapperToolset';

import s from './styles.module.scss';
import Limit from '../shared/Limit';

class App extends Component {
  state = {
    currentPage: 1,
    data: [],
    isLoading: true,
    limit: PAGE_SIZE,
    search: '',
    sortDirection: DIRECTION.ASC,
    sortField: 'lastName',
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
    const { limit, search, sortDirection } = this.state;

    const sortType =
      sortDirection === DIRECTION.ASC ? DIRECTION.DESC : DIRECTION.ASC;
    let ourData = [];
    try {
      const res = await doRequest(sortField, sortType, 1, search, limit);

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

    const { limit, search, sortDirection, sortField } = this.state;
    let ourData = [];
    try {
      const res = await doRequest(
        sortField,
        sortDirection,
        selected,
        search,
        limit
      );
      ourData = res.data;
    } catch (error) {
      console.error(error.message);
    } finally {
      this.setState({ data: ourData, currentPage: selected });
    }
  };

  searchHandler = async text => {
    const { limit, sortDirection, sortField } = this.state;

    let ourData = [];
    try {
      const res = await doRequest(sortField, sortDirection, 1, text, limit);

      ourData = res.data;
    } catch (error) {
      console.error(error.message);
    } finally {
      this.setState({
        data: ourData,
        currentPage: 1,
        search: text,
      });
    }
  };

  applyLimitHandler = async value => {
    const { search, sortDirection, sortField } = this.state;

    let ourData = [];
    try {
      const res = await doRequest(sortField, sortDirection, 1, search, value);

      ourData = res.data;
    } catch (error) {
      console.error(error.message);
    } finally {
      this.setState({
        data: ourData,
        currentPage: 1,
        limit: value,
      });
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
          <Fragment>
            <WrapperToolset>
              <Search onSearch={this.searchHandler} />
              <Limit onApplyLimit={this.applyLimitHandler} />
            </WrapperToolset>
            <DataTable
              changePageHandler={this.changePageHandler}
              currentPage={currentPage}
              data={data}
              headers={HEADERS}
              onSort={this.onSort}
              sortDirection={sortDirection}
              sortField={sortField}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
