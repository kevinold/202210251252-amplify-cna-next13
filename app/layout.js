export default function RootLayout({ children }) {
    return (
      <html>
        <head>
          <title>Test</title>
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}