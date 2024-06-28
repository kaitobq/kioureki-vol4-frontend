import { MedicalRecord } from "@/types/dashboard/medical-record";
import { Organization } from "@/types/dashboard/organization";
import { Player } from "@/types/dashboard/player";
import { atom } from "jotai";

export const organizationAtom = atom<Organization[] | null>(null);

export const currentOrganizationAtom = atom<Organization | null>(null);

export const medicalRecordAtom = atom<MedicalRecord[] | null>(null);

export const playerAtom = atom<Player[] | null>(null);

export const rehabilitationAtom = atom<MedicalRecord[] | null>(null);
