import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Projects | Diesel Generator Installations',
  description: 'Explore our successful diesel generator installations across industrial, healthcare, and commercial sectors in India. Trusted by leaders like Arvind Mills and BGS Group.',
  keywords: [
    'Diesel Generator Projects',
    'Industrial Power Installations',
    'Hospital Backup Power',
    'Commercial Generator Setup',
    'Stone Crusher Power Solutions',
    'Metro Project Power Backup'
  ],
  openGraph: {
    title: 'Industrial Power Projects | Advanced Power Infra',
    description: 'Case studies and success stories of our power infrastructure projects.',
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
