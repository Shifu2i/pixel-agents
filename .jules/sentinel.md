## 2026-09-20 - Path Traversal Prevention in Terminal Launch

**Vulnerability:** Untrusted `folderPath` parameters received from webview messages (`openClaude`) were passed directly as the `cwd` working directory parameter when creating VS Code terminals (`vscode.window.createTerminal`). An attacker or malicious webview script could pass arbitrary system paths (e.g. `/etc` or `C:\Windows`) to spawn terminals outside the workspace boundary.

**Learning:** Webview messaging is an untrusted entry point in VS Code extensions. When accepting file or directory paths from webview events to set working directories or execute commands, paths must be strictly checked against active workspace folders.

**Prevention:** Validate `folderPath` using cross-platform relative path resolution (`path.relative(folder.uri.fsPath, folderPath)`) and `path.isAbsolute` to ensure the path is strictly contained within an active workspace folder before setting it as a working directory.
