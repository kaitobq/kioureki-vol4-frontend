import { Organization } from "@/types/dashboard/organization";
import { atom } from "jotai";

export const currentOrganizationAtom = atom<Organization | null>(null);
