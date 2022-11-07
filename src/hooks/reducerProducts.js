
const reducerProducts = (state , action) => {
    console.log(action)
    switch (action.type) {
        case 'search':
          return action.payload;
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
}

export {reducerProducts};