# Sentinel Security Journal 🛡️

## 2026-07-16 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Launching new Claude Code terminals via the `openClaude` webview message accepted an unvalidated `folderPath` parameter. Since this parameter was directly passed as the `cwd` (current working directory) options to `vscode.window.createTerminal`, it allowed spawning shell terminals in arbitrary directories (including system paths or sensitive system folders outside of the active workspace), exposing a classic path traversal risk if the webview or a message was compromised.

**Learning:** When developing VS Code extensions with webview panels, messages received from webview scripts must be treated as untrusted user input. Any filesystem path or URI requested by a webview message must be rigorously sanitized and validated against active workspace boundaries before being passed to powerful extension APIs such as `createTerminal` or filesystem writers.

**Prevention:** Always perform platform-agnostic workspace containment validation on any folder path received from the webview. Use `path.relative` and `path.isAbsolute` against the `fsPath` of all active workspace folders to verify containment without relying on fragile string comparisons or URI schemes that fail on different OS platforms (such as backslashes on Windows or SSH/WSL remote contexts). Fall back securely to the default workspace folder and warn the user using `vscode.window.showWarningMessage` if an invalid path is detected.
