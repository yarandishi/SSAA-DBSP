'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Layers, ChevronDown } from 'lucide-react'
import React from 'react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-l">
      <div className="flex flex-col h-full">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              <Link
                href="/dashboard"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                  pathname === '/dashboard' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                }`}
              >
                <Home className="h-4 w-4" />
                پیشخوان
              </Link>
              <Collapsible>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-muted">
                  <div className="flex items-center gap-3">
                    <Layers className="h-4 w-4" />
                    خدمات
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 pr-6">
                  <Link
                    href="/dashboard/services/real-estate"
                    className="flex rounded-lg px-3 py-2 text-sm hover:bg-muted"
                  >
                    املاک
                  </Link>
                  <Link
                    href="/dashboard/services/documents"
                    className="flex rounded-lg px-3 py-2 text-sm hover:bg-muted"
                  >
                    اسناد رسمی
                  </Link>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}