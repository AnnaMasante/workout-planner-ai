"use client";

import Card from "./ui/Card/Card";
import CardHeader from "./ui/Card/CardHeader";
import CardTitle from "./ui/Card/CardTitle";
import CardContent from "./ui/Card/CardContent";
import ChartContainer from "./ui/Chart/ChartContainer";
import ChartTooltip from "./ui/Chart/ChartTooltip";
import ChartTooltipContent from "./ui/Chart/ChartTooltipContent";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import React from "react";

interface WorkoutAnalyticsProps {
  workouts: Array<{ date: string; goal: string; plan: string }>;
}

export default function WorkoutAnalytics({ workouts }: WorkoutAnalyticsProps) {
  // Calculate workouts per goal
  const workoutsByGoal = workouts.reduce((acc, workout) => {
    acc[workout.goal] = (acc[workout.goal] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(workoutsByGoal).map(([goal, count]) => ({
    goal,
    count,
  }));

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Analyse des Entraînements</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            count: {
              label: "Nombre de programmes",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="goal" />
              <YAxis />
              <ChartTooltip
                content={<ChartTooltipContent />}
                wrapperStyle={{
                  backgroundColor: "#fff",
                  padding: "8px",
                  borderRadius: "4px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              />
              <Bar dataKey="count" fill="var(--color-count)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
