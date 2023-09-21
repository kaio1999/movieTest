import type { Metadata } from "next";
import MoviesContextProvider from "@/Provider/MovieContext";
import Header from "@/components/Header";
import StyledComponentsRegistry from "../lib/registry";
import "./global.css";

export const metadata: Metadata = {
  title: "We Movie",
  description: "Os melhores Filmes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">
      <MoviesContextProvider>
        <StyledComponentsRegistry>
          <body>
            <Header />
            {children}
          </body>
        </StyledComponentsRegistry>
      </MoviesContextProvider>
    </html>
  );
}
