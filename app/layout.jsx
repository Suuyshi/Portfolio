import "./globals.css";

export const metadata = {
  title: "Sarah El Sherbiny | Portfolio",
  description: "Portfolio of Sarah El Sherbiny - Frontend Developer",
  icons: {
    icon: "/sarahlogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
