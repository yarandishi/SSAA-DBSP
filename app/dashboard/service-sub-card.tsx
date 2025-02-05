import Link from "next/link"

interface ServiceSubCardProps {
  title: string
  icon: string
  colors: {
    primary: string
    secondary: string
  }
  isActive: boolean
  href: string
}

export function ServiceSubCard({ title, icon, colors, isActive, href }: ServiceSubCardProps) {
  return (
    <Link href={href}>
      <div className={`cursor-pointer ${!isActive && 'opacity-60'}`}>
        <div className="card dash-card mb-4 overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
          <div className="flex h-full">
            <div 
              className="flex w-20 items-center justify-center border-l bg-[#fbfbfb]"
              style={{
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
              }}
            >
              <div 
                className="h-12 w-12 rounded-full p-2"
                style={{
                  backgroundColor: colors.secondary + '10',
                }}
              >
                {/* Icon would go here */}
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center p-4">
              <p className="text-center text-sm font-medium whitespace-pre-line">
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}