export function calculateReadTime(text: string): string {
  const wordsPerMinute = 225
  const wordCount = text.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min`
}

export const allPosts = [
    {
      slug: 'you-dont-perceive-reality',
      title: "You Don't Perceive Reality the Way You Think You Do",
      date: '2025-04-01',
      category: 'Philosophy',
      readTime: '4 min',
    },
    {
      slug: 'want-to-live-forever',
      title: 'Do we want to live forever?',
      date: '2025-03-28',
      category: 'Tech/Philosophy',
      readTime: '6 min',
    },
  ]