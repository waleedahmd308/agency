import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
  eyebrow?: string;
  containerClassName?: string;
};

export function Section({
  as: Tag = "section",
  className,
  containerClassName,
  children,
  ...rest
}: Props) {
  return (
    <Tag
      className={cn(
        "relative py-24 md:py-32 lg:py-40",
        className
      )}
      {...rest}
    >
      <div className={cn("container-x", containerClassName)}>{children}</div>
    </Tag>
  );
}
