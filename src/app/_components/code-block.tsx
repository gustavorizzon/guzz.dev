"use client";

import { Button } from "@/components/ui/button";
import hljs from "highlight.js";
import "highlight.js/styles/nord.css";
import { CheckCircle2, Copy } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  language: string;
  code: string;
}

export const CodeBlock = ({ code, language, className }: Props) => {
  const ref = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
  }, [code]);

  useEffect(() => {
    if (ref.current) {
      hljs.highlightBlock(ref.current);
    }
  }, []);

  return (
    <pre className="relative rounded-md">
      <Button
        size="icon"
        variant="outline"
        className="absolute right-6 top-2 border-powershell-text/20 hover:bg-powershell-text/10 hover:border-powershell-command hover:[box-shadow:0_0_15px_rgba(239,181,113,0.3)]"
        onClick={handleCopy}
        disabled={isCopied}
      >
        {isCopied ? (
          <CheckCircle2 className="size-4 text-green-400" />
        ) : (
          <Copy className="size-4" />
        )}
        <span className="sr-only">Copy code</span>
      </Button>
      <code ref={ref} className={`${language} ${className ?? ""} rounded-md`}>
        {code}
      </code>
    </pre>
  );
};
