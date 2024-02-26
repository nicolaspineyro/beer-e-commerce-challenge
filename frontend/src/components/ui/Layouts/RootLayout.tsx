import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader, Footer, RootNavBar } from "components/ui";

const RootLayout = () => {
  return (
    <div className="root-layout-container">
      <header>
        <RootNavBar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
