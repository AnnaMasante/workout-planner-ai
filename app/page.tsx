"use client";
import WorkoutPlanner from "./components/WorkoutPlanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Programme d'Entraînement IA
          </h1>
          <p className="text-gray-600 mt-2">
            Générez des programmes d'entraînement personnalisés grâce à
            l'intelligence artificielle
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <WorkoutPlanner />
      </main>
    </div>
  );
}
