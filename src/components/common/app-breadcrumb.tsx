import { Home } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

export interface BreadcrumbEntry {
  label: string
  href?: string
}

interface AppBreadcrumbProps {
  /** Home label text (e.g. "Home", "Beranda") */
  homeLabel: string
  /** Breadcrumb items after Home. The last item renders as the current page. */
  items: BreadcrumbEntry[]
  className?: string
}

/**
 * Reusable breadcrumb navigation for any page.
 * Home link is auto-prepended. The last item is non-clickable (current page).
 */
export function AppBreadcrumb({ homeLabel, items, className }: AppBreadcrumbProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className="text-muted-foreground font-mono text-xs">
        {/* Home link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
              <Home className="h-3 w-3" />
              {homeLabel}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <Fragment key={idx}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast || !item.href ? (
                  <BreadcrumbPage className="text-foreground max-w-[180px] truncate font-semibold">{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href} className="hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
