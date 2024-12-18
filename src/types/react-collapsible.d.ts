declare module 'react-collapsible' {
  import { FC, ReactNode } from 'react';

  interface CollapsibleProps {
    trigger: ReactNode;
    children?: ReactNode;
    className?: string;
    triggerClassName?: string;
    triggerOpenedClassName?: string;
    open?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
  }

  const Collapsible: FC<CollapsibleProps>;
  export default Collapsible;
} 