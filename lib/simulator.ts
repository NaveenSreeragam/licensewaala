import type { ExperienceLevel, SimulatorEvent, SimulatorReport } from "./types";
/** Scores only events detected by the client simulator; no inferred driving faults. */
export function scoreSimulation(events: SimulatorEvent[], elapsedSeconds: number): SimulatorReport {
  const count = (type: SimulatorEvent["type"]) => events.filter((event) => event.type === type).length;
  const boundaries = count("boundary_violation"), collisions = count("collision"), speeding = count("speeding"), completed = count("manoeuvre_complete") > 0;
  const score = Math.max(0, Math.min(100, 100 - boundaries * 8 - collisions * 18 - speeding * 7 - (elapsedSeconds > 120 ? 8 : 0)));
  const recommendedDifficulty: ExperienceLevel = score >= 88 ? "advanced" : score >= 65 ? "intermediate" : "beginner";
  return { score, vehicleControl: Math.max(0,92-boundaries*9-collisions*10), manoeuvreAccuracy: completed ? Math.max(45,90-boundaries*12) : 40, safety: Math.max(0,96-collisions*20-speeding*8), ruleCompliance: Math.max(0,94-boundaries*8-speeding*8), timeManagement: elapsedSeconds > 120 ? 65 : 88, strengths: [completed ? "U-turn manoeuvre completed" : "Stayed engaged with the practice track", ...(collisions===0?["No obstacle collisions"]:[])], mistakes: [...Array.from({length:boundaries},()=>"Boundary crossed"),...Array.from({length:collisions},()=>"Obstacle collision"),...Array.from({length:speeding},()=>"Speed was above the practice limit")], recommendation: boundaries > 0 ? "Enter the turn more slowly and look further through the manoeuvre to give yourself more room from the boundary." : "Keep the same smooth steering inputs and move to a slightly more challenging practice setup.", recommendedDifficulty };
}
