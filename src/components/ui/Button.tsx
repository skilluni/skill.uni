import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "coral";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, className, children, disabled, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-display font-semibold rounded-xl transition-all duration-180 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const variants = {
      primary:
        "bg-brand-blue text-white hover:bg-brand-blue-dark active:scale-[0.97] shadow-brand-blue hover:shadow-lg",
      secondary:
        "bg-surface border border-surface-border text-ink hover:bg-surface-2 active:scale-[0.97]",
      ghost:
        "text-ink-muted hover:text-ink hover:bg-surface-2 active:scale-[0.97]",
      coral:
        "bg-brand-coral text-white hover:bg-brand-coral-dark active:scale-[0.97] shadow-brand-coral hover:shadow-lg",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";