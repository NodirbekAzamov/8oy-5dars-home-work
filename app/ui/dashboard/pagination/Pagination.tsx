"use client"
import React from 'react'
import styles from "./pagination.module.css"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
export default function Pagination({ count }: { count: number | undefined }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const params = new URLSearchParams(searchParams ? searchParams : "")
  const page = Number(params.get('page')) || 1
  const ITEM_PER_PAGE = 2
  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < Number(count);

  const handleChangePage = (type: string) => {
    type === "prev" ? params.set("page", (page - 1).toString()) : params.set("page", (page + 1).toString())
    replace(`${pathname}?${params}`)
  }

  return (
    <div className={styles.container}>
      <button onClick={() => handleChangePage("prev")} className={styles.button} disabled={!hasPrev}>Previous</button>
      <button onClick={() => handleChangePage("next")} className={styles.button} disabled={!hasNext}>Next</button>
    </div>
  )
}
