import Link from "next/link"

interface BreadcrumbItem {
  title: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                {item.title}
              </Link>
            ) : (
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.title}</span>
            )}
            {index < items.length - 1 && <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

