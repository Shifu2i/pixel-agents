## 2026-07-16 - Path Traversal Prevention in Terminal Folder Launcher

**Vulnerability:** Untrusted `folderPath` parameters sent via webview messages (`openClaude`) could allow launching terminal sessions outside the active workspace directory if not validated.

**Learning:** When accepting directory paths from frontend webview postMessage events, they must be validated against the active `vscode.workspace.workspaceFolders` array using platform-agnostic path comparison (`path.relative` and `path.isAbsolute`) to ensure proper containment.

**Prevention:** Always check `!relative.startsWith('..') && !path.isAbsolute(relative)` against all open workspace folder paths before setting `cwd` for terminal creation or executing filesystem operations initiated by webview messages.
