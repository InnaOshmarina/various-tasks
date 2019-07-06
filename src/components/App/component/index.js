import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import DataTable from '../../shared/DataTable';
import { HEADERS } from '../../../constants/usersDataTable';
import Limit from '../../shared/Limit';
import Loader from '../../shared/Loader';
import { PAGE_SIZE, SORTING } from '../../../constants/global';
import Search from '../../shared/Search';
import WrapperToolset from '../../shared/Ui/WrapperToolset';

import s from './styles.module.scss';

class App extends PureComponent {
  async componentDidMount() {
    const {
      currentPage,
      getUsersData,
      limit,
      search,
      sortDirection,
      sortField,
    } = this.props;
    getUsersData(sortField, sortDirection, currentPage, search, limit);
  }

  onSort = sortField => {
    const { getUsersData, limit, search, sortDirection } = this.props;

    const sortType =
      sortDirection === SORTING.DIRECTION.ASC
        ? SORTING.DIRECTION.DESC
        : SORTING.DIRECTION.ASC;
    getUsersData(sortField, sortType, 1, search, limit);
  };

  changePageHandler = (event, selected) => {
    event.preventDefault();

    const {
      getUsersData,
      limit,
      search,
      sortDirection,
      sortField,
    } = this.props;

    getUsersData(sortField, sortDirection, selected, search, limit);
  };

  searchHandler = text => {
    const { getUsersData, limit, sortDirection, sortField } = this.props;

    getUsersData(sortField, sortDirection, 1, text, limit);
  };

  applyLimitHandler = value => {
    const { getUsersData, search, sortDirection, sortField } = this.props;

    getUsersData(sortField, sortDirection, 1, search, value);
  };

  render() {
    const { currentPage, data, loader, sortDirection, sortField } = this.props;
    return (
      <div className={`container ${s.root}`}>
        {loader ? (
          <Loader isLoading={loader} />
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

App.defaultProps = {
  currentPage: 1,
  limit: PAGE_SIZE,
  search: '',
};

App.propTypes = {
  currentPage: PropTypes.number,
  data: PropTypes.array.isRequired,
  getUsersData: PropTypes.func.isRequired,
  limit: PropTypes.number,
  loader: PropTypes.bool.isRequired,
  search: PropTypes.string,
  sortDirection: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
};

export default App;
