import "../styles/globals.css";

type MyAppProps = {
  Component: React.ComponentType<any>;
  pageProps: Record<string, any>;
};
function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
