interface MobileMenuBarProps {
  open: boolean;
  handleToggle: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export default MobileMenuBarProps;
