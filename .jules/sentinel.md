## 2026-10-15 - Workspace Path Traversal in Webview Terminal Creation
**Vulnerability:** Unsanitized `folderPath` parameter passed from webview messages (`openClaude`) directly set the terminal cwd, enabling terminals to be launched outside workspace bounds.
**Learning:** Webview postMessage handlers must strictly validate caller-supplied file/folder paths against `vscode.workspace.workspaceFolders`.
**Prevention:** Always compare `path.relative` against workspace folder paths and check `!relative.startsWith('..') && !path.isAbsolute(relative)` before using external paths as working directories.
