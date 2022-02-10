import { combineReducers } from 'redux'

import readingBookReducer from './reading/reading.book.reducer'
import finishedBookReducer from './finished/finished.book.reducer'

export default combineReducers({
    reading: readingBookReducer,
    finished: finishedBookReducer
});