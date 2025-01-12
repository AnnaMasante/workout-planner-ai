/**
 * @file Button.test.tsx
 * @description This file contains unit tests for the Button component using React Testing Library and Jest.
 *
 * The test suite includes:
 * - Rendering the Button component with a specific type and text.
 * - Verifying that the Button component is present in the document.
 *
 * @module ButtonTest
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

test("renders Button component", () => {
  render(<Button type="submit">Générer le programme</Button>);
  const buttonElement = screen.getByText(/Générer le programme/i);
  expect(buttonElement).toBeInTheDocument();
});
