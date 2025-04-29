import {
  Oswald,
  Pontano_Sans,
  Ramabhadra,
  Poppins,
  Outfit,
  Manrope,
} from "next/font/google";

const unbounded = Ramabhadra({
  subsets: ["latin"],
  weight: "400",
  variable: "--passionOne",
});

const acme = Pontano_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--passionOne",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-oswald",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const SedaN = acme.className;
export const Rancher = unbounded.className;
export const OswaldFont = oswald.className;
export const PoppinsFont = poppins.className;
export const OutfitFont = outfit.className;
export const ManropeFont = manrope.className;
