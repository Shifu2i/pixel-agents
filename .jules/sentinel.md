## 2026-11-01 - Prevent Path Traversal in Webview Terminal Launch
**Vulnerability:** The webview message handler accepted an arbitrary `folderPath` string from an untrusted webview message `openClaude` and passed it directly as `cwd` to `vscode.window.createTerminal`, allowing path traversal outside the active workspace.
**Learning:** Untrusted messages from webviews must never be trusted with file paths or shell execution working directories. Checking containment against all active workspace folders with `path.relative` and `path.isAbsolute` ensures the path stays inside the legitimate workspace.
**Prevention:** Always validate user- or webview-supplied paths against `vscode.workspace.workspaceFolders` before using them as terminal working directories or file system root paths.
