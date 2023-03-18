export const metadata = {
  title: 'Next',
  description: 'Next App',
}
 import '../styles/globals.css'

 import Nav from '../components/Nav/page'
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <Nav/>
        {children}
      </body>
    </html>
  )
}
