import DrawerContent from "@src/contents/drawer";
import { closeDrawer } from "@src/store/slices/ui";
import { useMbxAppSelector } from "@store/utils";
import { ContainerProps, Drawer } from "mobrix-ui";
import React from "react";
import { useDispatch } from "react-redux";

const AppContainer = (props: ContainerProps) => {
  const dispatch = useDispatch();
  const { dark, drawerOpen } = useMbxAppSelector((state) => state.ui);
  return (
    <Drawer
      {...props}
      dark={dark}
      hide={!drawerOpen}
      onClose={() => dispatch(closeDrawer())}
      data-mbx-app-drawer
    >
      <DrawerContent />
    </Drawer>
  );
};

export default AppContainer;
