import { Button } from "@/components/atoms/common/button";
import { Card } from "@/components/atoms/common/card";
import { Input } from "@/components/atoms/common/input";
import { useSignup } from "@/lib/hooks/auth/use-signup";

export function SignupTab() {
  const { register, handleSubmit, errors, onSubmit, loading } = useSignup();

  return (
    <Card className="w-[400px] shadow-md">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-xl font-medium text-gray-900">新規登録</h5>
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <Input
            type="text"
            id="username"
            {...register("username")}
            placeholder="username"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            {...register("email")}
            placeholder="someone@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            {...register("password")}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        {loading ? (
          <Button loading />
        ) : (
          <Button type="submit">アカウント作成</Button>
        )}
      </form>
    </Card>
  );
}
