import * as React from "react";
import Image from "next/image";

function IndexPage() {
  return (
    <div className="flex flex-col-reverse items-center mt-12 lg:flex-row lg:justify-around lg:space-x-6">
      <Image
        src={"/pike-place.jpg"}
        alt={"Pike Place Market"}
        width="600"
        height="500"
      />
      <h1>Coming soon...</h1>
    </div>
  );
}

export default IndexPage;
