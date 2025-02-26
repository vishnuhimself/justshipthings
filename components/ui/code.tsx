import React from "react";

interface CodeProps {
  children: React.ReactNode;
  language?: string;
}

export function Code({ children, language = "text" }: CodeProps) {
  return (
    <pre className="overflow-x-auto rounded-md bg-gray-100 dark:bg-gray-800 p-4 text-sm text-gray-800 dark:text-gray-200">
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
} 