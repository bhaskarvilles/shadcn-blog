"use client";

import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  const [html, setHtml] = useState('');
  
  useEffect(() => {
    // Configure marked
    marked.setOptions({
      breaks: true,
      gfm: true
    });
    
    try {
      // Parse the markdown to HTML
      const parsedHtml = marked.parse(content);
      setHtml(typeof parsedHtml === 'string' ? parsedHtml : '');
    } catch (error) {
      console.error('Error parsing markdown:', error);
      setHtml(`<p>Error rendering content</p>`);
    }
  }, [content]);
  
  return (
    <div 
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
} 