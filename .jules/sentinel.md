# Sentinel Security Journal

## 2026-07-16 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** The extension allowed webview messages to request launching a new Claude Code terminal with an arbitrary, unvalidated `folderPath` (cwd). If compromised, this would enable path traversal and allow spawning terminal processes outside of the active workspace.
**Learning:** Hardcoding or manipulating URIs with `.with({ path: folderPath })` fails on Windows due to native backslash separators. Safe, cross-platform containment validation can be achieved using the native `path.relative` and `path.isAbsolute` checks against the `fsPath` of active workspace folders.
**Prevention:** Always validate and sanitize all folder/file paths supplied by webviews or external inputs before using them in terminal launch or process execution configurations.
