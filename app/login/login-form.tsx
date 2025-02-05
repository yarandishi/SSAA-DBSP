"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { login } from "../actions/auth"
import { Alert, AlertDescription } from "@/components/ui/alert"

const formSchema = z.object({
  FUserName: z.string().min(1, {
    message: "نام کاربری الزامی است",
  }),
  FPassword: z.string().min(1, {
    message: "رمز عبور الزامی است",
  }),
})

export function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState<string>("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FUserName: "",
      FPassword: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await login(values)

      if (response.resultCode === 100) {
        router.push("/dashboard")
        router.refresh()
      } else {
        setError(response.resultMessage)
      }
    } catch (error) {
      setError("خطا در ارتباط با سرور")
    }
  }

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="FUserName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام کاربری</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="FPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رمز عبور</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "در حال ورود..." : "ورود"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

