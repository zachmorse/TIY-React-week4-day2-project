import React from "react";
import renderer from "react-test-renderer";
import Todo from "./Todo";

test("Todo renders correctly", () => {
  const view = renderer
    .create(<Todo todo={{ text: "test", id: 1, done: false }} />)
    .toJSON();
  expect(view).toMatchSnapshot();
});
