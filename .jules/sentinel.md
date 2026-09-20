# Sentinel's Security Journal

## 2026-09-20 - Webview Message Path Traversal in Terminal Launch
**Vulnerability:** Untrusted webview message `folderPath` parameter was passed directly as `cwd` to `vscode.window.createTerminal`, allowing potential path traversal or opening terminals in arbitrary directories outside the user's workspace.
**Learning:** Webviews in VS Code extensions are unauthenticated/untrusted input vectors. Receiving parameters like directory paths without validation allows malformed or malicious messages to manipulate terminal working directories.
**Prevention:** Always validate input file or folder paths from webview messages against active workspace folder boundaries using platform-agnostic containment checks (`path.relative` and `!relative.startsWith('..') && !path.isAbsolute(relative)`).
