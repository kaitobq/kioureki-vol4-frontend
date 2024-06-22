"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCookie, setCookie } from "../cookie/use-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/utils/api/apiclient";
import toast from "react-hot-toast";
import { ErrorToast } from "@/components/atoms/common/error-toast";

const loginSchema = z.object({
  email: z.string().email({ message: "無効なメールアドレスです" }),
  password: z.string().min(8, { message: "パスワードは8文字以上必要です" }),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    try {
      const response = await apiClient.post("/login", data);
      console.log(response);
      await setCookie("token", response.data.token);

      const token = await getCookie("token");
      console.log("取得したトークン:", token);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.custom((t) => (
        <ErrorToast
          t={t}
          title="ログインに失敗しました"
          message="メールアドレスとパスワードが有効か確認してください"
        />
      ));
    }
  };
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
  };
}
