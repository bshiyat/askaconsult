'use client';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
}

export default function GlitchText({ text, className = '', as: Component = 'span' }: GlitchTextProps) {
  return (
    <Component
      className={`glitch ${className}`}
      data-text={text}
    >
      {text}
    </Component>
  );
}
