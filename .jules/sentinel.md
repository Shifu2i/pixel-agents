# Sentinel Security Journal

## 2026-07-16 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Launching VS Code terminals in arbitrary folders outside the active workspace folders via untrusted messages from the webview. If the webview message contained a crafted or manipulated `folderPath` parameter, the extension would launch a new terminal with that path as the current working directory, potentially exposing non-workspace directories.
**Learning:** In VS Code extensions, webviews are considered untrusted boundaries. Any parameters or payloads received from `webviewView.webview.onDidReceiveMessage` must be rigorously sanitized and validated.
**Prevention:** Validate all incoming `folderPath` parameters using platform-agnostic path containment checks (with `path.relative` and `path.isAbsolute`) against the `fsPath` of each active workspace folder. If the path lies outside the workspace, reject the request, show a warning, and fall back to a safe default path.
