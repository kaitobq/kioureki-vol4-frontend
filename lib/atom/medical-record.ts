import { MedicalRecord } from "@/types/dashboard/medical-record";
import { atom } from "jotai";

export const medicalRecordAtom = atom<MedicalRecord[] | null>(null);
