import { PlayerTBody } from "@/components/atoms/dashboard/player/player-tbody";
import { PlayerTHead } from "@/components/atoms/dashboard/player/player-thead";

export function PlayerTable() {
  return (
    <table className="my-5 rounded-t-md">
      <PlayerTHead />
      <PlayerTBody />
    </table>
  );
}
