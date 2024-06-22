import { Button } from "@/components/atoms/common/button";
import { Card } from "@/components/atoms/common/card";
import { useLogin } from "@/lib/hooks/auth/use-login";

export function LoginTab() {
  const { register, handleSubmit, errors, onSubmit, loading } = useLogin();

  return (
    <Card className="w-[400px]">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-xl font-medium text-gray-900">ログイン</h5>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        {loading ? <Button loading /> : <Button type="submit">ログイン</Button>}
      </form>
    </Card>
  );
}
