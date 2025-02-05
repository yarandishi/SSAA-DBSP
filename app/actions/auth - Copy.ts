'use server'

import { cookies } from 'next/headers'
import { LoginInput, LoginResponse, User } from '@/lib/types'

export async function login(data: LoginInput): Promise<LoginResponse> {
  try {
    const res = await fetch('http://10.116.113.140/Auth/Check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const response: LoginResponse = await res.json()
    
    if (response.resultCode === 100) {
      // Store user data in cookies
      (await cookies()).set('user', JSON.stringify({
        ...response.resultOutData,
        FUserName: data.FUserName,
      }), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 1 day
      })
    }

    return response
  } catch (error) {
    return {
      resultCode: -1,
      resultMessage: 'خطا در ارتباط با سرور',
      resultOutData: {
        dutyInCity: []
      }
    }
  }
}

export async function logout() {
  (await cookies()).delete('user')
}

export async function getUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get("user")
  
  if (!userCookie) return null
  
  try {
    return JSON.parse(userCookie.value)
  } catch {
    return null
  }
}