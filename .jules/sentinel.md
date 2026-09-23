## 2026-09-20 - Workspace Path Traversal Prevention in Terminal Launches
**Vulnerability:** Untrusted webview messages received by `launchNewTerminal` could pass arbitrary filesystem paths as `folderPath`, causing VS Code terminal sessions to launch in directories outside the workspace.
**Learning:** Path parameters received from frontend webviews must always be validated against active VS Code workspace folders before being used as working directories (`cwd`).
**Prevention:** Use platform-agnostic relative path checking (`path.relative` and `path.isAbsolute`) against `folder.uri.fsPath` for all active workspace folders before accepting path inputs from webview messages.
