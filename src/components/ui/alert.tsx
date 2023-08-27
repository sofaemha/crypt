import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/script/utility/cn";

const alertVariants = cva("relative w-full rounded-3xl sm:rounded-lg border border-slate-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950 dark:border-slate-800 dark:[&>svg]:text-slate-50", {
  variants: {
    variant: {
      default: "border-slate-500 bg-white text-slate-950 dark:border-slate-500 dark:bg-slate-950 dark:text-slate-50",
      success: "border-green-600 text-green-600 dark:backdrop-blur-sm dark:border-green-600 dark:bg-green-600/25 dark:text-white",
      warning: "border-yellow-500 text-yellow-500 dark:backdrop-blur-sm dark:border-yellow-600 dark:bg-yellow-600/25 dark:text-white",
      info: "border-blue-500 text-blue-500 dark:backdrop-blur-sm dark:border-blue-600 dark:bg-blue-600/25 dark:text-white",
      danger: "border-red-500 text-red-500 dark:backdrop-blur-sm dark:border-red-900 dark:bg-red-500/25 dark:text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>(({ className, variant, ...props }, ref) => <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
