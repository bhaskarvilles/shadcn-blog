import { ClassValue, clsx } from "clsx"
import { format, formatDistanceToNow } from "date-fns"
import { twMerge } from "tailwind-merge"
import crypto from 'crypto'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string, compact: boolean = false) {
  const d = typeof date === "string" ? new Date(date) : date
  return format(d, compact ? "MMM d, yyyy" : "MMMM d, yyyy")
}

export function timeAgo(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date
  return formatDistanceToNow(d, { addSuffix: true })
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function getGravatarUrl(email: string, size: number = 200) {
  const hash = crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex')
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`
}
