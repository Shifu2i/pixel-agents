## 2026-07-16 - Prevent Path Traversal in Terminal Creation

**Vulnerability:** In `launchNewTerminal`, `folderPath` passed from webview messages was used directly as `cwd` for launching terminals without validation against workspace boundaries. An attacker or rogue webview script could pass arbitrary directory paths (e.g. `/etc` or relative traversal `../../..`).

**Learning:** Webview message parameters controlling system process parameters (such as terminal working directory) must be validated server-side (in the extension host) against authorized boundaries.

**Prevention:** Validate user/webview supplied folder paths against active VS Code workspace folders using platform-agnostic relative path containment checks (`path.relative` and `path.isAbsolute`).
