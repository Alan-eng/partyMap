import { createSelector } from 'reselect'
import { StateType } from '../reducers/mainReducer'

// export const selectСoords = createSelector(
//     state => state.events,
//     todos => todos.filter(todo => todo.isDone).length
//   )

export const getEvents = (state: StateType) => state.events
// const getTodos = (state) => state.todos // input-selectors. They are created as ordinary non-memoized selector functions because they do not transform the data they select.

// export const getVisibleTodos = createSelector(
//   [ getVisibilityFilter, getTodos ],
//   (visibilityFilter, todos) => {
//     switch (visibilityFilter) {
//       case 'SHOW_ALL':
//         return todos
//       case 'SHOW_COMPLETED':
//         return todos.filter(t => t.completed)
//       case 'SHOW_ACTIVE':
//         return todos.filter(t => !t.completed)
//     }
//   }
// )

// const getKeyword = (state) => state.keyword

// const getVisibleTodosFilteredByKeyword = createSelector(
//   [ getVisibleTodos, getKeyword ],
//   (visibleTodos, keyword) => visibleTodos.filter(
//     todo => todo.text.includes(keyword)
//   )
// )
