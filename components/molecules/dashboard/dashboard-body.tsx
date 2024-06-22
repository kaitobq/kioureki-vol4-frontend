import { InjuredPlayerCard } from "./injured-player-card";
import { RecoveryPlayerCard } from "./recovery-player-card";

export function DashboardBody() {
  return (
    <div className="flex my-32 justify-evenly w-full">
      <InjuredPlayerCard />
      <RecoveryPlayerCard />
    </div>
  );
}
