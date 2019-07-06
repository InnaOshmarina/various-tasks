import { connect } from 'react-redux';

import App from '../component';

import { getUsersData } from '../../../store/UsersData/actionCreators';
import {
  currentPageSelector,
  isLoadingSelector,
  limitSelector,
  searchSelector,
  sortDirectionSelector,
  sortFieldSelector,
  usersDataSelector,
} from '../../../store/UsersData/selectors';

const mapStateToProps = state => ({
  currentPage: currentPageSelector(state),
  data: usersDataSelector(state),
  limit: limitSelector(state),
  loader: isLoadingSelector(state),
  search: searchSelector(state),
  sortDirection: sortDirectionSelector(state),
  sortField: sortFieldSelector(state),
});

const mapDispatchToProps = {
  getUsersData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
