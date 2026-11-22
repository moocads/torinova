// Fallback for requests that never reach a locale (no root layout exists above [locale])
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-dvh items-center justify-center font-sans">
        <h1 className="text-2xl font-semibold">404 — Page not found</h1>
      </body>
    </html>
  );
}
