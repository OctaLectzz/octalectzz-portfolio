'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

interface AppPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function AppPagination({ currentPage, totalPages, onPageChange, className }: AppPaginationProps) {
  const t = useTranslations('common')
  const previousLabel = t('previous')
  const nextLabel = t('next')
  // Safe bounds check
  const activePage = Math.min(currentPage, Math.max(1, totalPages))

  const handlePageClick = (e: React.MouseEvent, page: number) => {
    e.preventDefault()
    if (page >= 1 && page <= totalPages && page !== activePage) {
      onPageChange(page)
    }
  }

  // Generate page numbers with ellipses for large page counts
  const getPages = () => {
    const pages: (number | 'ellipsis')[] = []

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show page 1
      pages.push(1)

      // Left ellipsis
      if (activePage > 3) {
        pages.push('ellipsis')
      }

      // Middle pages around active page
      const start = Math.max(2, activePage - 1)
      const end = Math.min(totalPages - 1, activePage + 1)

      for (let i = start; i <= end; i++) {
        if (i > 1 && i < totalPages) {
          pages.push(i)
        }
      }

      // Right ellipsis
      if (activePage < totalPages - 2) {
        pages.push('ellipsis')
      }

      // Always show last page
      pages.push(totalPages)
    }
    return pages
  }

  if (totalPages <= 1) return null

  return (
    <Pagination className={cn('mt-4 select-none', className)}>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            text={previousLabel}
            onClick={(e) => handlePageClick(e, activePage - 1)}
            href="#"
            className={cn(
              'hover:bg-surface/30 hover:text-primary cursor-pointer rounded-xl transition-all duration-300 active:scale-95',
              activePage === 1 && 'pointer-events-none opacity-40 hover:bg-transparent hover:text-inherit'
            )}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {getPages().map((page, idx) => (
          <PaginationItem key={idx}>
            {page === 'ellipsis' ? (
              <PaginationEllipsis className="text-muted-foreground/60" />
            ) : (
              <PaginationLink
                isActive={activePage === page}
                onClick={(e) => handlePageClick(e, page)}
                href="#"
                className={cn(
                  'cursor-pointer rounded-xl font-medium transition-all duration-300 active:scale-95',
                  activePage === page
                    ? 'bg-gradient-primary text-primary-foreground border-transparent shadow-[0_0_15px_rgba(var(--primary-glow),0.25)] hover:scale-105'
                    : 'hover:bg-surface/30 border-border/40 hover:border-primary/20 hover:text-primary border'
                )}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            text={nextLabel}
            onClick={(e) => handlePageClick(e, activePage + 1)}
            href="#"
            className={cn(
              'hover:bg-surface/30 hover:text-primary cursor-pointer rounded-xl transition-all duration-300 active:scale-95',
              activePage === totalPages && 'pointer-events-none opacity-40 hover:bg-transparent hover:text-inherit'
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
