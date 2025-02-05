import Link from "next/link"

interface ServiceCardProps {
  title: string
  icon: string
  colors: {
    primary: string
    secondary: string
  }
  href?: string
}

export function ServiceCard({ title, icon, colors, href }: ServiceCardProps) {
  const Card = () => (
    <div className="group cursor-pointer">
      <div className="relative rounded-lg border bg-white p-4 transition-all hover:shadow-md">
        <div className="flex flex-col items-center justify-center text-center">
          <div 
            className="mb-2 h-12 w-12"
            style={{
              backgroundColor: colors.secondary + '10',
              padding: '8px',
              borderRadius: '50%'
            }}
          >
            {/* Icon would go here */}
          </div>
          <p className="text-sm font-medium">{title}</p>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href}>
        <Card />
      </Link>
    )
  }

  return <Card />
}