import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        <main className="text-2xl">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

