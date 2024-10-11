// utils/path.ts

/**
 * Joins multiple path segments into one normalized path.
 * This works similarly to Node.js `path.join` but in a client-side, browser-friendly way.
 */
export function join(...paths: string[]): string {
    return paths
      .map((part, i) => {
        // Normalize the slashes
        if (i === 0) {
          return part.trim().replace(/[/]*$/g, ''); // remove trailing slashes from first part
        } else {
          return part.trim().replace(/(^[/]*|[/]*$)/g, ''); // remove leading and trailing slashes
        }
      })
      .filter(Boolean) // Remove empty strings
      .join('/');
  }
  
  /**
   * Resolves a relative path to an absolute path relative to the current window location.
   * Useful for constructing URLs for assets or content.
   */
  export function resolve(relativePath: string): string {
    return new URL(relativePath, window.location.origin).href;
  }
  