## 2025-05-15 - [Path Traversal in Terminal Launch]
**Vulnerability:** The extension allowed spawning terminals in any local directory by providing a `folderPath` in the `openClaude` webview message without validation.
**Learning:** Webview-to-extension messages must be treated as untrusted input, even when the webview is internal to the extension.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to validate that any user-supplied or webview-supplied paths are within the current workspace folders before using them in privileged operations like `createTerminal`.
