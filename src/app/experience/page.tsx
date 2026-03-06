import type { Metadata } from 'next'
import HorizonLoader from '@/components/ui/horizon-loader'
import './horizon.css'

export const metadata: Metadata = {
  title: 'Experience | M&A Velocity by PwC',
  description: 'An immersive 3D experience showcasing the future of AI-powered M&A deal intelligence.',
}

export default function ExperiencePage() {
  return <HorizonLoader />
}
