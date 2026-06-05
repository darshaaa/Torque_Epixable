import './globals.css';
import Script from 'next/script';
import ChatBox from './Chat_Bot/ChatBox';
import { CartProvider } from './context/CartContext';
import Cart from "./Components/Cart"; // adjust the path as needed
import { useCart } from "./context/CartContext"; // adjust the path

export const metadata = {
  title: 'Torque | Detailing Studio',
  description: 'Torque is your trusted partner for premium car and bike care solutions...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K9VLQJBZ');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9VLQJBZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <CartProvider>
          {children}
          <ChatBox />
        </CartProvider>
      </body>
    </html>
  );
}
