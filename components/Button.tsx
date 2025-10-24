import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-gradient-primary text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary/50",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
