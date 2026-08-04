# Sentinel Security Journal

## 2026-07-16 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** The webview-to-extension communication handler for launching new agent terminals accepts a `folderPath` parameter without validating that the path is contained within the active workspace. This path traversal risk allows an untrusted or compromised webview to trigger terminal creation in arbitrary host folders.
**Learning:** Standard inputs originating from a webview should always be treated as untrusted and thoroughly validated against system and workspace constraints. Simply defaulting to the first workspace folder if `folderPath` is absent is insufficient if a custom folder parameter can be sent.
**Prevention:** Always validate provided workspace paths using safe, platform-agnostic comparisons with `path.relative` and `path.isAbsolute` against the paths of all active workspace folders before executing operations like terminal spawning or filesystem access.
