import { JSX } from "react";

export interface MobrixAppConfig {
  header?: () => JSX.Element;
  footer?: () => JSX.Element;
  drawer?: () => JSX.Element;
  modals?: Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ context }: { context: Record<string, any> }) => JSX.Element
  >;
}
