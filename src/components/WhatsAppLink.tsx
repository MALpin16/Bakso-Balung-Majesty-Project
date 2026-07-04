import React from "react";
import { trackEvent } from "../utils/analytics";

type Props = {
  message: string;
  children: React.ReactNode;
  className?: string;
  phone?: string;
};

const DEFAULT_PHONE = import.meta.env.VITE_WA_NUMBER || "6287760216223";

export default function WhatsAppLink({
  message,
  children,
  className,
  phone,
}: Props) {
  const wa = phone || DEFAULT_PHONE;
  const href = `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    try {
      trackEvent("whatsapp_click", { phone: wa, message });
    } catch {
      // noop
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
