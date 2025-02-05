import { getNewsById } from "@/app/actions/news"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsDetailPageProps {
  params: {
    id: string
  }
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const news = await getNewsById(params.id)

  if (!news) {
    return <div>خبر مورد نظر یافت نشد</div>
  }

  return (
    <div className="container pt-16">
      <div className="mb-6">
        <Breadcrumb
          items={[
            { title: "داشبورد", href: "/dashboard" },
            { title: "اخبار و اطلاعیه‌ها", href: "/dashboard/news" },
            { title: news.title, href: `/dashboard/news/${news.id}` },
          ]}
        />
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{news.title}</CardTitle>
            <Badge variant="outline">{news.date}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-stone dark:prose-invert max-w-none">{news.content}</div>
        </CardContent>
      </Card>
    </div>
  )
}

