/**
 * Adds copy buttons to all code blocks on the page
 */
export function initCopyButtons() {
  if (typeof document === "undefined") return;

  // Only target code blocks processed by Shiki (they have astro-code class)
  const preElements = document.querySelectorAll("pre.astro-code");

  preElements.forEach((pre) => {

    // Skip if button already exists
    if (pre.querySelector(".copy-button")) {
      return;
    }

    // Get the code content
    const code = pre.querySelector("code");
    if (!code) return;

    // Create copy button
    const button = document.createElement("button");
    button.className = "copy-button";
    button.textContent = "Copy";
    button.title = "Copy code";
    button.setAttribute("aria-label", "Copy code to clipboard");

    // Insert button at the beginning of pre element
    pre.insertBefore(button, code);

    // Add click handler
    button.addEventListener("click", async () => {
      try {
        const text = code.textContent || "";
        await navigator.clipboard.writeText(text);

        // Visual feedback
        button.textContent = "Copied!";
        button.classList.add("copied");

        // Reset after 2 seconds
        setTimeout(() => {
          button.textContent = "Copy";
          button.classList.remove("copied");
        }, 2000);
      } catch (err) {
        console.error("Failed to copy code:", err);
        button.textContent = "Failed";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 2000);
      }
    });
  });
}

// Run when DOM is ready
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCopyButtons);
  } else {
    initCopyButtons();
  }

  // Also run after Astro page transitions
  document.addEventListener("astro:page-load", initCopyButtons);
}
