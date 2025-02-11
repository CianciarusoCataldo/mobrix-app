export interface ModalState {
  isOpen: boolean;
  type: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: Record<string, any>;
}
