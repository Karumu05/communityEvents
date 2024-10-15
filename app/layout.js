import { inter } from "./UI/fonts";
import "./UI/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Community Events",
  description: "Events sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
