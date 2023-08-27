import { cn } from "@/script/utility/cn"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-300 dark:bg-slate-700", className)}
      {...props}
    />
  )
}

export { Skeleton }
