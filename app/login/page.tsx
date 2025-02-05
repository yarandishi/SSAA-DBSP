import { redirect } from "next/navigation"
import { getUser } from "../actions/auth"
import { LoginForm } from "./login-form"

export default async function LoginPage() {
  const user = await getUser()
  
  if (user) {
    redirect("/dashboard")
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="h-8 w-8 ml-2"
          />
          سامانه مدیریت
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              ورود به حساب کاربری
            </h1>
            <p className="text-sm text-muted-foreground">
              برای ورود به سامانه، نام کاربری و رمز عبور خود را وارد کنید
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}