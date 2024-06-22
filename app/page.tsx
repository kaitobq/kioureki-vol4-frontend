"use client";

import { Button } from "@/components/atoms/common/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log("kioureki");
    }, 5000);
    setLoading(false);
  }, []);
  return (
    <div>
      kioureki
      {loading ? <Button loading /> : <Button>submit</Button>}
      <Button loading />
    </div>
  );
}
