import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "./App/App";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/That's how the cookie crumbles/i)).toBeInTheDocument();
});
