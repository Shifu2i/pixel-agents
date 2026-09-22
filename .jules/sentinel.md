## 2026-09-20 - Path Traversal Prevention in Webview Terminal Creation

**Vulnerability:** The webview handler for `openClaude` passed an arbitrary `folderPath` parameter directly to `launchNewTerminal` and VS Code's `createTerminal({ cwd })` without validating that the path belonged to an open workspace folder. An attacker or untrusted message could specify arbitrary filesystem paths (e.g., `/etc`, `C:\Windows`, or sensitive user directories).

**Learning:** Message payloads from webviews should always be treated as untrusted user input. In VS Code extension architectures, passing raw paths from IPC messages into terminal or file system APIs bypasses workspace security boundaries.

**Prevention:** Always validate user/webview-provided folder paths against `vscode.workspace.workspaceFolders` using cross-platform path resolution (`path.relative` and `path.isAbsolute`) before passing them to extension APIs.
