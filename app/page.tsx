"use client";

import { Button } from "@/components/atoms/common/button";
import { Selector } from "@/components/atoms/common/selector";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  country: z.string().min(1, { message: "国を選択してください" }),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log("kioureki");
    }, 5000);
    setLoading(false);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const countries = [
    { value: "", label: "国を選択してください" },
    { value: "jp", label: "日本" },
    { value: "us", label: "アメリカ" },
    { value: "uk", label: "イギリス" },
  ];
  return (
    <div>
      kioureki
      {loading ? <Button loading /> : <Button>submit</Button>}
      <Button loading />
      <Selector
        id="country"
        options={countries}
        {...register("country")}
        className="w-[200px]"
      />
    </div>
  );
}
