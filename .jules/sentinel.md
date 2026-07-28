# Sentinel Security Journal

## 2026-07-16 - Path Traversal Prevention in Terminal Launching
**Vulnerability:** Launching terminals with directory paths passed from untrusted webview messages can result in path traversal or arbitrary folder execution risks outside the active VS Code workspace.
**Learning:** Webviews communicate with extensions via messaging (`postMessage`), and parameters like `folderPath` can be spoofed or manipulated by malicious frontend code/extensions. Without proper validation, the backend extension would launch Claude CLI terminals in arbitrary directories.
**Prevention:** Always validate `folderPath` against the active workspace folders using `vscode.workspace.getWorkspaceFolder`. If validation fails, fall back to the default workspace and show a warning message to the user.
