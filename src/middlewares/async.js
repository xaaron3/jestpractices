// MIDDLEWARE REDUX SYNTAX
// export default function({ dispatch }) {
//    return function(next) {
//       return function(action) {

//       }
//    }
// }

// reformatted
export default ({ dispatch }) => (next) => (action) => {
   // check if action has promise on its 'payload' prop. 
   // if does, wait for resolve
   // if not, send action on to next middleware
   if(!action.payload || !action.payload.then) {
      return next(action);
   }

   // we want to wait for the promise to resolve
   // get its data and then create new action w data, then dispatch it
   action.payload.then(function(response) {
      const newAction = { ...action, payload: response }
      dispatch(newAction);
   });
};