const darkModeReducter = (state, action) => {
  switch (action.type) {
    case 'Light':
      return {
        darkMode: false,
      };

    case 'Dark':
      return {
        darkMode: true,
      };
    case 'Taggle':
      return {
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};

export default darkModeReducter;
