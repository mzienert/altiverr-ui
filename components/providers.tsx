'use client';

import { ReactNode } from 'react';
import { GlobalCalendlyModal } from '@/components/calendly/GlobalCalendlyModal';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <GlobalCalendlyModal />
    </>
  );
} 