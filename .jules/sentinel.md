## 2026-07-16 - Prototype Pollution Protection in JSON Disk Persistence
**Vulnerability:** Untrusted layout files read from disk or external sources could contain properties like `__proto__`, `constructor`, or `prototype`, leading to prototype pollution when processed by the application.
**Learning:** Standard `JSON.parse` does not strip `__proto__` properties by default. Passing a custom reviver function to `JSON.parse` that returns `undefined` for `__proto__`, `constructor`, and `prototype` keys safely neutralizes prototype pollution attempts without requiring external dependencies.
**Prevention:** Always use a safe JSON parser wrapper (such as `safeJsonParse` with a reviver function) when parsing JSON structures received from disk or external inputs.
