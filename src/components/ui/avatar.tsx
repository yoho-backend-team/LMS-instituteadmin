import React from "react";

export function Avatar({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarFallback({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`flex h-full w-full items-center justify-center text-sm font-medium text-gray-600 ${className || ""}`}
      {...props}
    >
      {children}
    </span>
  );
}
