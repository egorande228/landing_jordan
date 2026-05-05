import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return <p className={cn("eyebrow eyebrow-pill", className)}>{children}</p>;
}
