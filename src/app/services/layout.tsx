import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Diesel Generator Services | Sales, Rental & AMC',
  description: 'Comprehensive diesel generator services in Bangalore: authorized sales, flexible rentals (3 months to 2 years), and 24/7 maintenance support (AMC).',
  keywords: [
    'Generator Sales Bangalore',
    'Generator Rental Services',
    'Diesel Generator AMC',
    'Generator Maintenance Bangalore',
    'Mahindra Powerol Dealer',
    'Cummins Generator Service',
    'Industrial Power Backup',
    'DG Set Installation'
  ],
  openGraph: {
    title: 'Diesel Generator Services | Sales, Rental & AMC',
    description: 'Expert supply, installation, and maintenance of diesel generators for industries and apartments.',
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
