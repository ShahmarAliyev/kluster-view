import './page.scss';
export const metadata = {
  title: 'KlusterView',
  description: 'Kubernetes Visualization Tool',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>{children}</body>
    </html>
  );
}
