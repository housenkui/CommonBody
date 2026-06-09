import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'

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
              return <Link to={href}>{children}</Link>
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
