'use server'

import { cookies } from 'next/headers'
import { executeStoredProcedure } from '@/lib/db'
import { LoginInput, LoginResponse, User } from '@/lib/types'

export async function login(data: LoginInput): Promise<LoginResponse> {
  try {
    const response = await executeStoredProcedure<LoginResponse>(
      'prcLogin',
      data
    )
    
    if (response.resultCode === 100) {
      // Store user data in cookies
      const cookieStore = await cookies()
      cookieStore.set('user', JSON.stringify({
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
    console.error('Login error:', error)
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
  const cookieStore = await cookies()
  cookieStore.delete('user')
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