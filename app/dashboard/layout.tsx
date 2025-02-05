import { redirect } from "next/navigation"
import React from 'react'
import { getUser } from "../actions/auth"
import { DashboardNav } from "./nav"
import { Sidebar } from "./sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()
  
  if (!user) {
    redirect("/login")
  }

  return (
    <div className="h-screen bg-[#f8f8f8]">
      <DashboardNav user={user} />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}