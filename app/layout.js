import { inter } from "./UI/fonts";
import "./UI/globals.css";
import { Providers } from "./providers";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "Community Events",
  description: "Events sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </UserProvider>
    </html>
  );
}
