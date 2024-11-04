interface CodeBlockProps {
  code: string;
  language: string;
  theme?: 'dark' | 'light';
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, theme = 'dark' }) => {
  return (
    <pre className={`code-theme-${theme}`}>
      <code className="text-sm font-mono">
        {/* 代码内容 */}
      </code>
    </pre>
  );
}; 