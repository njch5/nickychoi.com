import Header from "./header";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Nicky Choi",
    default: "Nicky Choi",
  },
  description: "Personal website of Nicky Choi",
};

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-orange-100" style={pageStyles}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
