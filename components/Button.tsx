import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "default" | "pillArrow";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  href,
  type = "button",
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  const buttonClassName = [
    styles.button,
    variant === "pillArrow" ? styles.pillArrow : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {variant === "pillArrow" ? (
        <span className={styles.arrowCircle} aria-hidden="true">
          <span className={styles.arrow}>→</span>
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClassName} {...props}>
      {content}
    </button>
  );
}
