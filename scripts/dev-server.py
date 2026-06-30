#!/usr/bin/env python3
"""Local static dev server for EmGlowSkin.

Identical to `python3 -m http.server` but sends no-cache headers so the browser
always loads the latest HTML/CSS/JS/images. This avoids stale, broken pages
after files are renamed, replaced, or deleted during development.
"""
import http.server

PORT = 5173


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


http.server.ThreadingHTTPServer.allow_reuse_address = True

with http.server.ThreadingHTTPServer(("", PORT), NoCacheHandler) as httpd:
    print(f"Serving EmGlowSkin at http://localhost:{PORT} (caching disabled)")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
