import reducer from "./reducer";
import { createTodo, toggleTodo, filterTodos } from "./actions";

describe("CREATE_TODO", () => {
  test("creates a new todo", function() {
    const initialState = { todos: [], nextId: 1 };
    const state = reducer(initialState, createTodo("Test"));
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0]).toEqual({ id: 1, done: false, text: "Test" });
  });

  test("updates nextId", function() {
    const initialState = { todos: [], nextId: 1 };
    const state = reducer(initialState, createTodo("Test"));
    expect(state.nextId).toEqual(2);
  });
});

describe("TOGGLE_TODO", () => {
  test("toggles existing todo", function() {
    const initialState = { todos: [], nextId: 1 };
    let state = reducer(initialState, createTodo("Test"));
    state = reducer(state, toggleTodo(1));
    expect(state.todos[0]).toEqual({ id: 1, done: true, text: "Test" });
  });
});

describe("FILTER_TODOs", () => {
  test("filter an array of existing todos by completion state", function() {
    const initialState = { filter: "all" };
    let state = reducer(initialState, filterTodos("complete"));
    expect(state).toEqual({ filter: "complete" });
  });
});
