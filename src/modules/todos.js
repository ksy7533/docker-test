import { createAction, handleActions } from 'redux-actions';
import * as api from '../api/todos';

const GET_TODOS = 'todos/GET_TODOS';
const GET_TODOS_SUCCESS = 'todos/GET_TODOS_SUCCESS';
const GET_TODOS_FAILURE = 'todos/GET_TODOS_FAILURE';

const ADD_TODO = 'todos/ADD_TODO';

const TOGGLE_CHECKTED_TODO = 'todos/TOGGLE_CHECKTED_TODO';

let nextId = 3;

export const addTodo = createAction(ADD_TODO, (text) => {
  console.log(text);
  return {
    id: nextId++,
    text,
    checked: false,
  };
});

export const toggleCheckedTodo = createAction(TOGGLE_CHECKTED_TODO, (id) => {
  console.log(id);
  return id;
});

export const getTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS });
  try {
    const response = await api.getTodos();
    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TODOS_FAILURE,
      payload: error,
      error: true,
    });
    throw error;
  }
};

const initialState = {
  loading: {
    GET_TODOS: false,
  },
  todos: [],
};

const todos = handleActions(
  {
    [GET_TODOS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_TODOS: true,
      },
    }),

    [GET_TODOS_SUCCESS]: (state, action) => {
      console.log(action);
      return {
        ...state,
        todos: action.payload,
        loading: {
          ...state.loading,
          GET_TODOS: false,
        },
      };
    },

    [GET_TODOS_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_TODOS: true,
      },
    }),

    [ADD_TODO]: (state, action) => {
      console.log('!!');
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    },

    [TOGGLE_CHECKTED_TODO]: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo)),
      };
    },
  },
  initialState,
);

export default todos;
