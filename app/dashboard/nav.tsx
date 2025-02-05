'use client'

import Link from "next/link"
import { LogOut, User, HelpCircle } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User as UserType } from "@/lib/types"
import { logout } from "../actions/auth"

interface DashboardNavProps {
  user: UserType
}

export function DashboardNav({ user }: DashboardNavProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/dashboard" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={82}
              height={40}
              className="h-10 w-20"
            />
          </Link>
        </div>
        
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold leading-6">
            درگاه یکپارچه خدمات الکترونیکی
            <br />
            <span className="text-sm font-normal">سامانه مدیریت</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-5 w-5" />
                <span className="sr-only">راهنما</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                راهنمای سامانه
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                تماس با پشتیبانی
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">منوی کاربر</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  {user.FFullName && (
                    <p className="font-medium">{user.FFullName}</p>
                  )}
                  {user.FUserName && (
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {user.FUserName}
                    </p>
                  )}
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <User className="ml-2 h-4 w-4" />
                  <span>پروفایل</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-600"
                onSelect={() => {
                  logout()
                  window.location.href = "/login"
                }}
              >
                <LogOut className="ml-2 h-4 w-4" />
                <span>خروج</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}