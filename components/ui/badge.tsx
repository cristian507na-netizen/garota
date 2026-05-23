import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-foreground/30 text-foreground",
        muted: "bg-muted text-muted-foreground",
        light: "bg-foreground text-background",
        ghost: "bg-background/40 backdrop-blur text-foreground border border-foreground/20",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
