export const metadata = {
  title: {
    template: "%s | Nicky Choi",
    default: "Nicky Choi",
  },
  description: "Personal website of Nicky Choi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
