import Image from "next/image";

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
    <div className="flex flex-col-reverse items-center mt-12 lg:flex-row lg:justify-around lg:space-x-6">
      <Image
        src={"/nicky.jpg"}
        alt={"Image of Nicky"}
        width="350"
        height="200"
      />
      <h1>Born in the PNW</h1>
    </div>
  );
};

export default AboutPage;
