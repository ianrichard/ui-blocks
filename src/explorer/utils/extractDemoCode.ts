/**
 * Extracts just the JSX code from a demo component file
 * Removes imports, function declarations, and just returns the content inside the return statement
 */
export function extractDemoCode(rawCode: string): string {
    // Remove leading/trailing whitespace
    let code = rawCode.trim();

    // Extract content between return ( and the matching closing )
    const returnMatch = code.match(/return\s*\(\s*([\s\S]*?)\s*\);?\s*\}/);

    if (returnMatch && returnMatch[1]) {
        let extracted = returnMatch[1];

        // Split into lines
        const lines = extracted.split('\n');

        // Process lines: keep first line as-is, shift others back by 8 spaces
        const processed = lines.map((line, index) => {
            if (index === 0) {
                return line.trim(); // First line - remove all leading whitespace
            }
            // Other lines - remove 8 spaces if they exist
            if (line.startsWith('        ')) {
                return line.slice(8);
            }
            return line;
        });

        return processed.join('\n').trim();
    }

    // Fallback: try to find JSX after return without parentheses
    const simpleReturnMatch = code.match(/return\s+(<[\s\S]*?>[\s\S]*?<\/[\s\S]*?>)/);
    if (simpleReturnMatch && simpleReturnMatch[1]) {
        return simpleReturnMatch[1].trim();
    }

    // If no match, return the original code
    return code;
}
