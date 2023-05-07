const getUserName = state => state.auth.user.name;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsRefreshing = state => state.auth.isRefreshing;


const authSelectors = {
  getUserName,
  getIsLoggedIn,
  getIsRefreshing,
};
export default authSelectors;

