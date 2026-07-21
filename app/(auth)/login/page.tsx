"use client";

import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";
import { login } from "@/lib/action";
import { useSearchParams } from "next/navigation";
import { Suspense, useActionState, useState } from "react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function LoginPage() {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }
    >
      <Login />
    </Suspense>
  );
}

function Login() {
  //   1. Read "redirectTo" from the URL (if missing, default to "/")
  const searchParams = useSearchParams();
  const search = searchParams.get("redirectTo");
  const [state, formAction, isPending] = useActionState(login, {
    success: null,
    message: "",
  });
  const router = useRouter();
  // i realised the login button reverts back early,
  //  so i used a state to monitor it

  const [isRedirecting, setIsRedirection] = useState(false);

  useEffect(() => {
    if (state.success) {
      setIsRedirection(true);
      router.push(search ?? "/");
      // ensures Server Components re-check the new session
      router.refresh();
    }
  }, [state.success]);

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-brand-secondary items-center justify-center p-12">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo.png"
            alt="LogAGood"
            width={240}
            height={240}
            className="object-contain"
          />
          <h1 className="text-2xl font-semibold text-white">LogAGood</h1>
          <p className="text-brand-lighter-primary text-sm">
            Ilorin, Delivered.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <form
          action={formAction}
          className="flex flex-col gap-4 w-full max-w-sm"
        >
          <div className="mb-2">
            <h2 className="text-xl font-semibold text-slate-800">
              Welcome back
            </h2>
            <p className="text-sm text-slate-500">Sign in to your account</p>
          </div>

          <input type="hidden" name="redirectTo" value={search ?? "/"} />

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-semibold text-slate-600 uppercase tracking-wider"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-primary transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-xs font-semibold text-slate-600 uppercase tracking-wider"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-primary transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 px-4 py-3 bg-brand-primary hover:bg-brand-secondary active:scale-[0.98] text-white font-medium rounded-xl shadow-sm shadow-blue-500/10 transition-all duration-150 cursor-pointer text-center flex justify-center disabled:bg-brand-lighter-primary disabled:text-black disabled:cursor-not-allowed"
            disabled={isPending || isRedirecting}
          >
            {isPending || isRedirecting ? (
              <div className="flex items-center justify-center gap-2">
                <span>Logging In </span>
                <Spinner />
              </div>
            ) : (
              "Login"
            )}
          </button>

          {state.message && (
            <p
              className={`form-message ${state.success ? "success" : "error"}`}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
