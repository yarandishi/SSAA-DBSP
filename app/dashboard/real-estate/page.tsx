import Link from "next/link"
import { Building, Home } from 'lucide-react'
import { Breadcrumb } from "@/components/breadcrumb"
import { ServiceSubCard } from "../service-sub-card"

const services = [
  {
    title: "املاک من",
    icon: "estateBuilding",
    colors: {
      primary: "#344343",
      secondary: "#369dce"
    },
    isActive: false,
    href: "/dashboard/real-estate/my-properties"
  },
  {
    title: "گواهی مالکیت",
    icon: "estateBuilding",
    colors: {
      primary: "#344343",
      secondary: "#369dce"
    },
    isActive: false,
    href: "/dashboard/real-estate/ownership"
  },
  {
    title: "اصالت سنجی گواهی مالکیت",
    icon: "estateBuilding",
    colors: {
      primary: "#344343",
      secondary: "#369dce"
    },
    isActive: true,
    href: "/dashboard/real-estate/verify-ownership"
  },
  {
    title: "تصدیق اصالت سند",
    icon: "estateBuilding",
    colors: {
      primary: "#344343",
      secondary: "#369dce"
    },
    isActive: true,
    href: "/dashboard/real-estate/verify-document"
  },
  {
    title: "درخواست صدور سند\n(قانون تعیین تکلیف)",
    icon: "estateBuilding",
    colors: {
      primary: "#344343",
      secondary: "#369dce"
    },
    isActive: false,
    href: "/dashboard/real-estate/request-document"
  },
  {
    title: "املاک دولتی",
    icon: "estateBuilding",
    colors: {
      primary: "#344343",
      secondary: "#369dce"
    },
    isActive: false,
    href: "/dashboard/real-estate/government"
  },
  {
    title: "درخواست های ثبتی",
    icon: "estateBuilding",
    colors: {
      primary: "#344343",
      secondary: "#369dce"
    },
    isActive: false,
    href: "/dashboard/real-estate/requests"
  },
  {
    title: "بازگشت به پیشخوان",
    icon: "home",
    colors: {
      primary: "#344343",
      secondary: "#dc3545"
    },
    isActive: true,
    href: "/dashboard"
  }
]

export default function RealEstatePage() {
  return (
    <div className="container-fluid">
      <div className="space-y-6 pt-16">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">امـلاک</h1>
            <Breadcrumb
              items={[
                { title: "پیشخوان", href: "/dashboard" },
                { title: "امـلاک", href: "/dashboard/real-estate" }
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceSubCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              colors={service.colors}
              isActive={service.isActive}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}