import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#FE7743] text-[#000000] shadow hover:bg-[#FE7743]/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-[#273F4F] bg-transparent shadow-sm hover:bg-[#273F4F]/10 hover:text-[#FE7743] dark:border-[#EFEEEA]/20 dark:hover:bg-[#EFEEEA]/10",
        secondary:
          "bg-[#273F4F] text-[#EFEEEA] shadow-sm hover:bg-[#273F4F]/80 dark:bg-[#EFEEEA] dark:text-[#273F4F] dark:hover:bg-[#EFEEEA]/90",
        ghost: "hover:bg-[#273F4F]/10 hover:text-[#FE7743] dark:hover:bg-[#EFEEEA]/10",
        link: "text-[#FE7743] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
