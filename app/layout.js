import { inter } from "./UI/fonts";
import "./UI/globals.css";

export const metadata = {
  title: "Community Events",
  description: "Events sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
