import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView1148963Reducer from '../features/CalendarView1148963/redux/reducers';
import CalendarView3148961Reducer from '../features/CalendarView3148961/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView1148963: CalendarView1148963Reducer,
CalendarView3148961: CalendarView3148961Reducer,

});