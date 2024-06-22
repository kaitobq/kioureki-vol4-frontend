import { Player } from "./player";

export type MedicalRecord = {
  ID: number;
  player_id: number;
  player: Player;
  part: string;
  diagnosis: string;
  status: string;
  injury_date: string;
  recovery_date: string;
  memo: string;
  organization_id: number;
  added_by: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
};
