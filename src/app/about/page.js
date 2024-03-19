export const metadata = {
  title: "About Me",
};

const pageStyles = {
  color: "#232129",
  padding: 55,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const AboutPage = () => {
  return (
    <main>
      <h1 className="text-center" style={pageStyles}>
        About Me
      </h1>
      <p className="text-center">Born and raised in the Pacific Northwest.</p>
    </main>
  );
};

export default AboutPage;
