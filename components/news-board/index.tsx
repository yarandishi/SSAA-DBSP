import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import type { NewsItem } from "@/lib/types"

interface NewsBoardProps {
  news: NewsItem[]
}

export function NewsBoard({ news }: NewsBoardProps) {
  return (
    <div className="space-y-4 pt-16">
      <Card className="hidden xl:block">
        <CardHeader>
          <CardTitle>اخبار و اطلاعیه‌ها</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[450px] pr-4">
            {news.slice(0, 5).map((item) => (
              <div key={item.id} className="mb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.title}</h3>
                  <Badge variant="outline">{item.date}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
                <Separator className="mt-2" />
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <Link href="/dashboard/news" className="w-full">
            <Button variant="outline" className="w-full">
              مشاهده آرشیو اخبار
              <ChevronLeft className="mr-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* News Archive Section */}
      <Card>
        <CardHeader>
          <CardTitle>آرشیو اخبار</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <Badge variant="outline">{item.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href={`/dashboard/news/${item.id}`}>
                      ادامه مطلب
                      <ChevronLeft className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

