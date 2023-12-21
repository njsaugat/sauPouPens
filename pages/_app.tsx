import Navbar from "../components/Navbar";
import "../styles/globals.css";

type MyAppProps = {
  Component: React.ComponentType<any>;
  pageProps: Record<string, any>;
};
function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
