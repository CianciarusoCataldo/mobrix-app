import { ComponentWithChildren } from "mobrix-ui";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "@store/slices/routing";
import { useTranslation } from "react-i18next";

const MainProvider = ({ children }: ComponentWithChildren) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname } = router;
  const { t } = useTranslation("page-titles");
  const title = t(pathname);

  useEffect(() => {
    dispatch(setPage(pathname));

    if (document.title !== title) {
      document.title = title;
    }
  }, [dispatch, pathname, title]);

  return children;
};

export default MainProvider;
