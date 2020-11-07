import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz';
import Head from 'next/head';
import { AppProps } from 'next/app';

import Logo from '../components/Logo';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Code"
          rel="stylesheet"
          key="google-font-Fira"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <DokzProvider
        headerLogo={
          <Logo width="140" />
                }
        headerItems={[
          <GithubLink
            key="0"
            url="https://github.com/c3pm-labs"
          />,
          <ColorModeSwitch key="1" />,
        ]}
        sidebarOrdering={{
          'index.mdx': true,
        }}
      >
        <Component {...pageProps} />
      </DokzProvider>
    </>
  );
}

export default App;
