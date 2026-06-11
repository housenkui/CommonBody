import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { LocalizedLink } from './LocalizedLink'

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose-cb max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            if (href?.startsWith('/')) {
              return <LocalizedLink to={href}>{children}</LocalizedLink>
            }
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            )
          },
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt ?? ''}
              className="max-w-full rounded-lg border border-cb-border shadow-sm"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
