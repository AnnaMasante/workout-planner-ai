"use client";

import { useEffect, useState } from "react";
import { useCompletion } from "ai/react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { Loader2, Activity } from "lucide-react";
import WorkoutHistory from "./WorkoutHistory";
import WorkoutAnalytics from "./WorkoutAnalytics";
import Tabs from "@geist-ui/core/esm/tabs/tabs";
import TabsItem from "@geist-ui/core/esm/tabs/tabs-item";
import Select from "./ui/Select";

export default function WorkoutPlanner() {
  const options = ["Débutant", "Intermédiaire", "Expérimenté"];
  const [goal, setGoal] = useState("");
  const [time, setTime] = useState("");
  const [experience, setExperience] = useState("");
  const [workouts, setWorkouts] = useState<
    Array<{ date: string; goal: string; plan: string }>
  >([]);
  const [completionHook, setCompletionHook] = useState(false);

  const { complete, completion, isLoading, error } = useCompletion({
    streamProtocol: "text",
    api: "/api/generate-workout",

    onFinish: (completion) => {
      setWorkouts((prev) => [
        {
          date: new Date().toISOString(),
          goal,
          plan: completion,
        },
        ...prev,
      ]);
      setCompletionHook(true);
    },
  });

  useEffect(() => {
    console.log("completionHook: " + completionHook); // Ajout du console.log pour inspecter `completionHook`
    if (completionHook) {
      workouts[workouts.length - 1].plan = completion;
    }
  }, [completionHook]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = `En tant qu'entraîneur professionnel de fitness, crée un programme d'entraînement personnalisé avec les critères suivants:

Objectif: ${goal}
Temps disponible: ${time} minutes par séance
Niveau d'expérience: ${experience}

Structure ton programme avec les sections suivantes:

1. Échauffement (5-10 minutes)
2. Exercices principaux
   - Liste détaillée avec séries, répétitions et temps de repos
   - Progression suggérée
3. Retour au calme et étirements
4. Notes supplémentaires
   - Modifications possibles
   - Conseils de sécurité
   - Recommandations de récupération

Utilise un format clair et facile à suivre.`;

    complete(prompt);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-2">
          Créez Votre Programme d'Entraînement Personnalisé
        </h2>
        <p className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Laissez l'IA concevoir un programme adapté à vos objectifs et
          préférences
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="goal">Objectif</Label>
            <Input
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="ex: Prise de muscle, Perte de poids, Endurance"
              required
            />
          </div>
          <div>
            <Label htmlFor="time">Temps Disponible (minutes par séance)</Label>
            <Input
              id="time"
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="ex: 30, 45, 60"
              required
            />
          </div>
          <div>
            <Label htmlFor="experience">Niveau d'Expérience</Label>
            <Select
              options={options}
              label="Choisissez votre niveau d'expérience"
              onChange={setExperience}
            ></Select>
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Génération en cours...
              </>
            ) : (
              "Générer le Programme"
            )}
          </Button>
        </form>

        <div>
          {error && (
            <div className="text-red-500 mb-4 p-4 bg-red-50 rounded-lg">
              Erreur: {error.message || "Une erreur est survenue"}
            </div>
          )}

          {completion && (
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h2 className="text-xl font-semibold mb-2">
                Votre Programme Personnalisé
              </h2>
              <pre className="whitespace-pre-wrap text-sm">{completion}</pre>
            </div>
          )}
        </div>
      </div>

      {workouts.length > 0 && (
        <Tabs initialValue="1">
          <TabsItem label="Historique" value="1">
            <WorkoutHistory workouts={workouts} />
          </TabsItem>
          <TabsItem label="Analytiques" value="2">
            <WorkoutAnalytics workouts={workouts} />
          </TabsItem>
        </Tabs>
      )}
    </div>
  );
}
