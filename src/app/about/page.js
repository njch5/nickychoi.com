export const metadata = {
  title: "About Me",
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

const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>About Me</h1>
    </main>
  );
};

export default AboutPage;
