import localFont from "next/font/local";

export const athelas = localFont({
  src: [
    {
      path: "../public/fonts/athelas/Athelas-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/athelas/Athelas Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/athelas/Athelas Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/athelas/Athelas Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-athelas",
});

export const averne = localFont({
  src: "../public/fonts/averne/Averne.ttf",
  variable: "--font-averne",
});

export const duende = localFont({
  src: "../public/fonts/duende/Duende.ttf",
  variable: "--font-duende",
});

export const urw = localFont({
  src: "../public/fonts/urw/URWClassico-Regular.ttf",
  variable: "--font-urw",
});