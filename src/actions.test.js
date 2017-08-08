import { createTodo, toggleTodo, filterTodos } from "./actions";

describe("createTodo will give a new item", () => {
  it("should create todo action", () => {
    expect(createTodo("test")).toEqual({
      type: "CREATE_TODO",
      payload: "test"
    });
  });
});

describe("toggleTodo will fire toggletodo reducer", () => {
  it("should toggle todo action", () => {
    expect(toggleTodo("test")).toEqual({
      type: "TOGGLE_TODO",
      payload: "test"
    });
  });
});

describe("Todo actions", () => {
  it("should create todo action", () => {
    expect(createTodo("test")).toEqual({
      type: "CREATE_TODO",
      payload: "test"
    });
  });
});
