import Header from '../../components/Header';
import '../../styles/globals.css';
import Banner from '../../components/Banner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      {/* Header */}
      {/* Banner */}
      {/* CHECK THIS STYLE OVER HERE MIN. 1:43 */}
      <body className='max-w-7xl mx-auto'>
        <Header></Header>
        <Banner></Banner>
        {children}
      </body>
    </html>
  )
}
