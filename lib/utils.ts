import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatNumber = (value: number) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(value);
};
