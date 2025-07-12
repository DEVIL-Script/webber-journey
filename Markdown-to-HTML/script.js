const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

function convertMarkdown() {
  let markdown = markdownInput.value;

  // Convert headings
  markdown = markdown.replace(/^[ \t]*### (.+)$/gm, "<h3>$1</h3>");
  markdown = markdown.replace(/^[ \t]*## (.+)$/gm, "<h2>$1</h2>");
  markdown = markdown.replace(/^[ \t]*# (.+)$/gm, "<h1>$1</h1>");

  // Convert bold (** or __)
  markdown = markdown.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");

  // Convert italic (* or _)
  markdown = markdown.replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

  // Convert images ![alt](src)
  markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // Convert links [text](url)
  markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Convert blockquotes
  markdown = markdown.replace(/^[ \t]*> (.+)$/gm, "<blockquote>$1</blockquote>");

  return markdown;
}

// Update output and preview on input
markdownInput.addEventListener('input', () => {
  const html = convertMarkdown();
  htmlOutput.textContent = html;    // raw HTML code
  preview.innerHTML = html;         // rendered HTML
});
