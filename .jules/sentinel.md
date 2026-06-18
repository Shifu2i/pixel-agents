## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function accepted a `folderPath` from a webview message and used it directly as the `cwd` for a new terminal without validation. This allowed an attacker (or a compromised webview) to launch terminals in arbitrary directories on the host machine.
**Learning:** Input from webviews is untrusted. Any file or directory path received from the webview must be validated against the current workspace folders before being used in sensitive operations like launching processes or reading files.
**Prevention:** Always validate paths from untrusted sources using `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to ensure they belong to the active workspace.
