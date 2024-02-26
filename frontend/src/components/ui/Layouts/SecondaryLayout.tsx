import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { Loader, SecondaryNavBar } from "components/ui";
import { getSectionTitle } from "src/utils";

const SecondaryLayout = () => {
  const location = useLocation();
  const title = getSectionTitle(location.pathname);
  return (
    <div className="secondary-layout-container">
      <header>
        <SecondaryNavBar title={title} />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SecondaryLayout;
