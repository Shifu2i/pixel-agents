## 2026-07-16 - Workspace Containment Validation for Webview Terminal Requests
**Vulnerability:** In `launchNewTerminal`, untrusted `folderPath` from webview `openClaude` messages was used directly as `cwd` when spawning terminals, allowing path traversal outside workspace root.
**Learning:** Webview-to-extension IPC message fields must be validated against workspace roots using native platform-agnostic path containment checks (`path.relative` and `path.isAbsolute`).
**Prevention:** Always validate user- or webview-provided file system paths against active workspace folders before passing them to OS or terminal execution APIs.
