import { cn } from "@/lib/utils";

type HeadingPropsType = {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;
export default function Heading({
  children,
  className,
  ...props
}: HeadingPropsType) {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
