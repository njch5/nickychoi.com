import * as React from "react";
import Link from "next/link";

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

function IndexPage() {
  return (
    <main style={pageStyles}>
      <Link href="/about" style={{ color: "blue" }}>
        About
      </Link>
      <h1 style={headingStyles}>Coming soon...</h1>
    </main>
  );
}

export default IndexPage;
