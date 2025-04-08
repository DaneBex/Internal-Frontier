export default function PostLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <div className="prose prose-lg max-w-3xl mx-auto py-8 w-screen dark:text-white">
        {children}
      </div>
      </>
    )
  }
  