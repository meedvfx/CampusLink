import React from "react";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 48"
        className="h-9 w-auto"
        fill="none"
      >
        <rect width="40" height="40" rx="10" fill="#2563EB" />
        <path
          d="M12 28C12 21.3726 17.3726 16 24 16C27.3137 16 30.3137 17.3431 32.4853 19.5147"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="28" cy="28" r="4" fill="#10B981" />
        <path
          d="M16 28L28 28"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <text
          x="50"
          y="25"
          fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
          fontSize="17"
          fontWeight="800"
          fill="#0F172A"
          letterSpacing="-0.03em"
        >
          CampusLink
        </text>
        <text
          x="50"
          y="37"
          fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
          fontSize="10"
          fontWeight="700"
          fill="#2563EB"
          letterSpacing="0.08em"
        >
          FRANCE
        </text>
      </svg>
    </div>
  );
}
