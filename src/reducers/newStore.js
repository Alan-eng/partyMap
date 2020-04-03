// Before:
const store = createStore(counter)

// After:
const store = configureStore({
  reducer: counter
})

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

const counter = createReducer(0, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1
})

const store = configureStore({
  reducer: counter
})