# AI Road Accident Detection: Frontend Prototype
## Run on Windows 11
1. Install Python from python.org (or use VS Code with the Live Server extension).
2. Open PowerShell in this folder and run: `python -m http.server 8000`
3. Visit http://localhost:8000 (internet needed for Chart.js CDN and Google Fonts).
## Demo login
Any username of 3+ characters and password of 8+ characters works. This is **not** authentication.
## Architecture
Static HTML/CSS/JS. `js/mock-data.js` holds demo data (swap for API calls). `js/main.js` has views and in-memory state. `js/auth.js` is the prototype login.
## Limits
No backend, AI model, cameras or real alerts. All state resets on reload. Test notifications do nothing.
## Backend integration points
Auth: server-side sessions (HttpOnly cookie) and server-enforced API protection. Video: RTSP → HLS/WebRTC gateway. Data: `/api/incidents`, `/api/cameras`, `/api/analytics`. Dispatch: authorized providers with audit logs.
