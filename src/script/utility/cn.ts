import { type ClassValue, clsx } from "clsx"
import { twMerge as twm } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twm(clsx(inputs))
}
