# Sentinel's Journal - Critical Security Learnings

## 2026-06-11 - Path Traversal in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function accepted a `folderPath` from the webview and used it as the `cwd` for a new terminal without validation. This allowed a malicious or compromised webview to launch terminals in any directory on the user's system (e.g., `/etc` or sensitive user directories).
**Learning:** Input from webviews (even if it's supposed to be internal state) should be treated as untrusted, especially when it interacts with the filesystem or OS commands.
**Prevention:** Always validate that provided paths are within the expected workspace folders using `vscode.workspace.getWorkspaceFolder`.
