import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Generator Quote',
  description: 'Get in touch with Advanced Power And Infra Solutions for diesel generator sales, rental, or service enquiries. Available 24/7 for emergency power support.',
  keywords: [
    'Contact Generator Dealer',
    'Get Generator Quote',
    'Generator Service Enquiry',
    'Bangalore Generator Support',
    'Emergency Generator Repair'
  ],
  openGraph: {
    title: 'Contact Advanced Power And Infra Solutions',
    description: 'Expert consultation for all your diesel generator and power infrastructure needs.',
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
