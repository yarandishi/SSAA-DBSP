import { getNews } from "@/app/actions/news"
import { NewsBoard } from "@/components/news-board"
import { Breadcrumb } from "@/components/breadcrumb"

export default async function NewsPage() {
  const news = await getNews()

  return (
    <div className="container pt-16">
      <div className="mb-6">
        <Breadcrumb
          items={[
            { title: "داشبورد", href: "/dashboard" },
            { title: "اخبار و اطلاعیه‌ها", href: "/dashboard/news" },
          ]}
        />
      </div>
      <NewsBoard news={news} />
    </div>
  )
}

