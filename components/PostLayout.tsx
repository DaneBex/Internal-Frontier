export default function PostLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="prose prose-lg dark:prose-invert mx-auto px-4 py-8 text-justify">
        {children}
      </div>
    )
  }
  