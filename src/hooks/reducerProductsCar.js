
const shoppingCartInitial = {
  products : []
};
function reducerShopProducts(state , action){
    switch (action.type) {
        case 'add':
          return {...state,products:[...state.products,action.payload]}
        case 'delete':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
}

export {reducerShopProducts,shoppingCartInitial};