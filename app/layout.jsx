import './globals.css'

export const metadata = {
  title: 'Shanal - IT Support | Homelab | Troubleshooting',
  description: 'IT Support professional showcasing technical projects, homelab infrastructure, troubleshooting cases, and system administration skills.',
  keywords: 'IT Support, Help Desk, Homelab, Proxmox, Linux, Windows Server, Troubleshooting, System Administration, PowerShell, Networking',
  authors: [{ name: 'Shanal' }],
  openGraph: {
    title: 'Shanal - IT Support Portfolio',
    description: 'Technical projects, homelab setups, and IT troubleshooting documentation',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
