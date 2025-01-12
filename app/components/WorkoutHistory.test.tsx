import React from "react";
import { render, screen } from "@testing-library/react";
import WorkoutHistory from "./WorkoutHistory";

describe("WorkoutHistory", () => {
  it("renders workout history correctly", () => {
    const mockWorkouts = [
      { date: "2023-10-01", goal: "Strength", plan: "Plan A" },
      { date: "2023-10-02", goal: "Cardio", plan: "Plan B" },
      { date: "2023-10-03", goal: "Strength", plan: "Plan C" },
    ];

    render(<WorkoutHistory workouts={mockWorkouts} />);

    expect(screen.getByText(/Plan A/i)).toBeInTheDocument();
  });
  it("renders no workouts message when no workouts are provided", () => {
    render(<WorkoutHistory workouts={[]} />);
    expect(screen.getByText(/Historique des Programmes/i)).toBeInTheDocument();
    expect(screen.queryByText(/Programme du/i)).not.toBeInTheDocument();
  });
});
