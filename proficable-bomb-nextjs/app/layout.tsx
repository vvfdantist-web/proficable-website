import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ProfiCable LLC | Fiber, Low Voltage & Network Infrastructure',
  description: 'ProfiCable LLC provides fiber installation, structured cabling, low voltage, commercial networks and technician hiring across Texas.',
  keywords: ['fiber installation Texas','low voltage contractor Austin','structured cabling Dallas','network cabling Round Rock','cable technician jobs'],
  openGraph: { title: 'ProfiCable LLC', description: 'Fiber, low voltage and network infrastructure company in Texas.', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
