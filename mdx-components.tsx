import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="font-heading text-4xl mt-8 mb-4 text-black dark:text-white" {...props} />,
    h2: (props) => <h2 className="font-heading text-3xl mt-6 mb-3 text-black dark:text-white" {...props} />,
    h3: (props) => <h2 className="font-heading text-3xl mt-6 mb-3 text-black dark:text-white font-thin" {...props} />,
    p: (props) => <p className="font-body mb-4 text-md text-black dark:text-white" {...props} />,
    em: (props) => <em className="font-heading italic text-black dark:text-white" {...props} />,
    strong: (props) => <strong className="font-heading font-bold text-black dark:text-white" {...props} />,
    ...components,
  }
}
