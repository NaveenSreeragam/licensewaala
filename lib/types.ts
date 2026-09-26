export type VehicleType = "car" | "scooter" | "motorcycle";
export type ExperienceLevel = "beginner" | "intermediate" | "advanced";
export interface SimulatorEvent { type: "boundary_violation" | "collision" | "speeding" | "incorrect_stop" | "manoeuvre_complete"; severity: "low" | "medium" | "high"; timestamp: number; location: { x: number; y: number }; detail?: string; }
export interface SimulatorReport { score: number; vehicleControl: number; manoeuvreAccuracy: number; safety: number; ruleCompliance: number; timeManagement: number; strengths: string[]; mistakes: string[]; recommendation: string; recommendedDifficulty: ExperienceLevel; }
