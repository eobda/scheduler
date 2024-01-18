import React from "react";

import { render } from "@testing-library/react";

import Application from "components/Application";

test("renders without crashing", () => {
  render(<Application />);
});