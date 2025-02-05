import { getUser } from "../actions/auth"
import { getNews } from "../actions/news"
import { ServiceCard } from "./service-card"
import { NewsBoard } from "@/components/news-board"

const services = [
  {
    title: "املاک و کاداستر",
    icon: "estateBuilding",
    colors: {
      primary: "#344343",
      secondary: "#369dce"
    },
    href: "/dashboard/real-estate"
  },
  // ... other services
]

export default async function DashboardPage() {
  const [user, news] = await Promise.all([
    getUser(),
    getNews()
  ])

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
      <div className="space-y-6 pt-16">
        <div>
          <h1 className="text-lg font-semibold">خدمات من</h1>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <span className="text-sm text-muted-foreground">
                  پیشخوان
                </span>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              colors={service.colors}
              href={service.href}
            />
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <NewsBoard news={news} />
      </div>
    </div>
  )
}