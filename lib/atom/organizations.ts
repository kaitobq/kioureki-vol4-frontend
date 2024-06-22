import { Organization } from "@/types/dashboard/organization";
import { atom } from "jotai";

export const organizationAtom = atom<Organization[] | null>(null);
