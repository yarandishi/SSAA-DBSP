"use server"

import type { NewsItem } from "@/lib/types"

export async function getNews(): Promise<NewsItem[]> {
  // Replace this with your actual API call
  return [
    {
      id: "1",
      title: "اطلاعیه مهم",
      date: "۱۴۰۲/۱۱/۱۵",
      summary: "خلاصه اطلاعیه مهم در مورد سیستم",
      content: "متن کامل اطلاعیه مهم در مورد سیستم...",
    },
    // Add more news items
  ]
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
  const news = await getNews()
  return news.find((item) => item.id === id) || null
}

