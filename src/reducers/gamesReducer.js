const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.types) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

//ACTION CREATOR
const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};

export default gamesReducer;
