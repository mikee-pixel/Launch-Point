"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DESKTOP_QUERY = "(min-width: 960px)";
/** Page regions made inert while the drawer is open. */
const OUTSIDE_IDS = ["main", "site-footer"];

/**
 * Modal drawer behaviour: scroll lock, inert page behind it, focus in on open and back
 * to the trigger on close, Tab trap, Esc to close, auto-close when the viewport reaches desktop.
 */
export function useDrawer() {
  const [open, setOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) openButtonRef.current?.focus({ preventScroll: true });
  }, []);

  // Sync the outside world (scroll lock, inert regions, focus) with the open state.
  useEffect(() => {
    const outside = OUTSIDE_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    document.documentElement.classList.toggle("overflow-hidden", open);
    outside.forEach((el) => (el.inert = open));
    if (open) closeButtonRef.current?.focus({ preventScroll: true });
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      outside.forEach((el) => (el.inert = false));
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close(true);
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusable =
        drawerRef.current.querySelectorAll<HTMLElement>("a, button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      // Focus escaped (e.g. a click on empty drawer space put it on <body>): pull it back in.
      if (!drawerRef.current.contains(document.activeElement)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onDesktop = (mq: MediaQueryListEvent) => mq.matches && close(false);
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open, close]);

  return {
    open,
    show: () => setOpen(true),
    close,
    openButtonRef,
    closeButtonRef,
    drawerRef,
  };
}
