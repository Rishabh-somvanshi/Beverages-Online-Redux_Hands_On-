//where we'll keep all of the actions that our container dispatches 
  // In order to perform an action of type LOGIN
  // we need an email and password
  // Since it's the only one here


  import { Types } from '../Login/constants';

  export const ActionCreators = {
    login: (user) => ({ type: Types.LOGIN, payload: { user } })
  }
  