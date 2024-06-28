import { Category } from "./category";
import { MedicalRecord } from "./medical-record";

export type PlayerDetail = {
  player_id: number;
  player_name: string;
  categories: Category[];
  medical_records: MedicalRecord[];
};
