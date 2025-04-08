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
      date: '4/1/2025',
      category: 'Philosophy',
      readTime: '4 min',
    },
    {
      slug: 'want-to-live-forever',
      title: 'Do we want to live forever?',
      date: '4/8/2025',
      category: 'Tech/Philosophy',
      readTime: '8 min',
    },
    {
      slug: 'if-gods-real',
      title: 'If Gods real I hope he understands me',
      date: 'N/A',
      category: 'Theology',
      readTime: '6 min',
    },
    {
      slug: 'against-free-will',
      title: 'The case against free will',
      date: 'N/A',
      category: 'Theology/Philosophy',
      readTime: '6 min',
    },
  ]