import dynamic from "next/dynamic";
import Footer from "../Footer";

const Header = dynamic(() => import("../Header"), { ssr: false });

type DefaultLayoutProps = {
  children: React.ReactNode;
  showFooter?: boolean;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
