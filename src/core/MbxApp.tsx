"use client";

import { initializeI18next } from "@localization/index";
import { store } from "@store/index";
import { setPage } from "@store/slices/routing";
import { closeDrawer } from "@store/slices/ui";
import { useMbxAppSelector } from "@store/utils";
import { ComponentWithChildren, Container, Drawer, Modal } from "mobrix-ui";
import { useRouter } from "next/router";
import React, { JSX, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Provider, useDispatch } from "react-redux";
import { initConfig } from "./config";
import { MobrixAppConfig } from "./types/global";

const RouterProvider = ({
  children,
}: ComponentWithChildren<(JSX.Element | undefined)[]>) => {
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

const MainProvider = ({ children }: ComponentWithChildren<JSX.Element>) => {
  const dispatch = useDispatch();
  const { loading } = useMbxAppSelector((state) => state.localization);
  const { dark, drawerOpen } = useMbxAppSelector((state) => state.ui);
  const { isOpen, type, context } = useMbxAppSelector((state) => state.modal);
  const [config, setConfig] = useState<MobrixAppConfig>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      initConfig().then(()=>{
              // @ts-expect-error config is already initialized
      initializeI18next(window.mobrixConfig.localization);
      // @ts-expect-error config is already initialized
      setConfig(window.mobrixConfig);
      });

    }
  }, [setConfig]);

  const {
    header: Header,
    footer: Footer,
    drawer: DrawerContent,
    modals,
  } = config;
  const SelectedModal: ({
    context,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: Record<string, any>;
  }) => JSX.Element = modals && type ? () => <div /> : () => <div />;

  return loading ? (
    <div />
  ) : (
    <RouterProvider>
      {DrawerContent && (
        <Drawer
          dark={dark}
          hide={!drawerOpen}
          onClose={() => dispatch(closeDrawer())}
          data-mbx-app-drawer
        >
          <DrawerContent />
        </Drawer>
      )}
      {modals && (
        <Modal hide={!isOpen}>
          <SelectedModal context={context} />
        </Modal>
      )}
      {Header && (
        <Container data-mbx-app-header wrapper="header" dark={dark}>
          <Header />
        </Container>
      )}
      <Container dark={dark} data-mbx-app-page>
        {children}
      </Container>
      {Footer && (
        <Container dark={dark} data-mbx-app-footer wrapper="footer">
          <Footer />
        </Container>
      )}
    </RouterProvider>
  );
};

const MbxApp = ({ children }: ComponentWithChildren<JSX.Element>) => (
  <div data-mbx-app-container>
    <Provider store={store}>
      <MainProvider>{children}</MainProvider>
    </Provider>
  </div>
);

export default MbxApp;
