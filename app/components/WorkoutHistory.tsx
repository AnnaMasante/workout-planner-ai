"use client";

import CardContent from "./ui/Card/CardContent";
import Card from "./ui/Card/Card";
import CardHeader from "./ui/Card/CardHeader";
import CardTitle from "./ui/Card/CardTitle";
import React from "react";

interface WorkoutHistoryProps {
  workouts: {
    date: string;
    goal: string;
    plan: string;
  }[];
}

export default function WorkoutHistory({ workouts }: WorkoutHistoryProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Historique des Programmes</h2>
      <div className="space-y-4">
        {workouts.map((workout, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">
                  Programme du{" "}
                  {new Date(workout.date).toLocaleDateString("fr-FR")}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Objectif: {workout.goal}
                </p>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-sm">
                  {workout.plan}
                </pre>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
