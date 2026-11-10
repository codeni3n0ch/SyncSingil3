import './globals.css';

export const metadata = {
  title: 'SyncSingil Corp. - Secure Microfinance & Digital Ledger',
  description: 'Next-generation microfinance management with Cloud and Blockchain architecture.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}