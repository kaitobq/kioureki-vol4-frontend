"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { useState } from "react";
import apiClient from "@/lib/utils/api/apiclient";
import { getCookie, setCookie } from "../cookie/use-cookie";
import { ErrorToast } from "@/components/atoms/common/error-toast";
import { useRouter } from "next/navigation";

const signupSchema = z.object({
  username: z.string().min(3, { message: "ユーザー名は3文字以上必要です" }),
  email: z.string().email({ message: "無効なメールアドレスです" }),
  password: z.string().min(8, { message: "パスワードは8文字以上必要です" }),
});

type SignupFormInputs = z.infer<typeof signupSchema>;

export function useSignup() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const response = await apiClient.post("/register", data);
      await setCookie("token", response.data.token);
      const token = await getCookie("token");
      console.log("取得したトークン:", token);
      toast.success("アカウントが作成されました");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.custom((t) => (
        <ErrorToast
          t={t}
          title="アカウント作成に失敗しました"
          message="ユーザー名、メールアドレス、パスワードが有効か確認してください"
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
