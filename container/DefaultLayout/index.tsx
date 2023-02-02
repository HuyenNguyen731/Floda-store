import dynamic from "next/dynamic";

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
    </>
  );
};

export default DefaultLayout;
