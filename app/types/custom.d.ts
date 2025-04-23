// Type definitions for markdown libraries
declare module 'react-markdown' {
  import React from 'react';
  
  interface ReactMarkdownProps {
    children: string;
    className?: string;
    remarkPlugins?: unknown[];
    rehypePlugins?: unknown[];
    components?: Record<string, React.ComponentType<unknown>>;
  }
  
  export default function ReactMarkdown(props: ReactMarkdownProps): JSX.Element;
}

declare module 'remark-gfm' {
  const remarkGfm: unknown;
  export default remarkGfm;
}

declare module 'rehype-raw' {
  const rehypeRaw: unknown;
  export default rehypeRaw;
}

declare module 'rehype-highlight' {
  const rehypeHighlight: unknown;
  export default rehypeHighlight;
}

declare module 'rehype-slug' {
  const rehypeSlug: unknown;
  export default rehypeSlug;
}

declare module 'rehype-autolink-headings' {
  const rehypeAutolinkHeadings: unknown;
  export default rehypeAutolinkHeadings;
} 