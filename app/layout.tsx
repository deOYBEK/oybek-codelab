import { ThemeProvider } from '@/components/providers/theme.provider'
import { ChildProps } from '@/types'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Roboto, Space_Grotesk } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
	subsets: ['latin', 'cyrillic'],
})

const SpaceGrotesk = Space_Grotesk({
	variable: '--font-space-grotesk',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'oybek codelab',
	description: 'Generated by create next app',
	icons: { icon: '/logo.png' },
}

interface Props extends ChildProps {
	params: { root: string }
}

function RootLayout({ children, params: { root } }: Props) {
	return (
		<ClerkProvider>
			<html lang='uz' suppressHydrationWarning>
				<body
					className={`${roboto.variable} ${SpaceGrotesk.variable} overflow-x-hidden`}
					suppressHydrationWarning
				>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}

export default RootLayout
