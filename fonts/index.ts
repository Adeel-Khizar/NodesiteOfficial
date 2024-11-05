import { Pontano_Sans, Ramabhadra } from 'next/font/google';

const unbounded = Ramabhadra

({
  subsets: ['latin'],
  weight: '400',
  variable: '--passionOne',
});

 
const acme = Pontano_Sans
({
  subsets: ['latin'],
  weight: '400',
  variable: '--passionOne',
});

export const SedaN  =  acme.className;
 
export const Rancher  =  unbounded.className;