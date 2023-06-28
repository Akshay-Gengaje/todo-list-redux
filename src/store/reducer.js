let id = 0;
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;
