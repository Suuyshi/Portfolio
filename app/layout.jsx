import "./globals.css";
import { basePath } from "@/lib/config";

export const metadata = {
  title: "Sarah El Sherbiny | Portfolio",
  description: "Portfolio of Sarah El Sherbiny - Frontend Developer",
  metadataBase: new URL("https://suuyshi.github.io"),
  icons: {
    icon: `${basePath}/sarahlogo.svg`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
