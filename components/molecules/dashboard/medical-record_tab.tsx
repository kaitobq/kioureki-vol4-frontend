import { medicalRecordAtom } from "@/lib/atom/medical-record";
import { useAtom } from "jotai";

export function MedicalRecordTab() {
  const [medicalrecord] = useAtom(medicalRecordAtom);
  return <div>MedicalRecordTab</div>;
}
