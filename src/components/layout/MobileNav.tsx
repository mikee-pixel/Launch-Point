"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import type { NavItem } from "@/config/routes";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { useDrawer } from "./useDrawer";

type MobileNavProps = {
  items: NavItem[];
  cta: NavItem;
  contact: { email: string; phone: string };
};

const iconButton =
  "inline-flex size-11 items-center justify-center rounded-sm border border-line-dark text-on-dark " +
  "transition-colors duration-200 ease-brand hover:bg-white/5";

/** Left slide-out drawer below 960px: focus trap, Esc/backdrop close, inert page behind it. */
export function MobileNav({ items, cta, contact }: MobileNavProps) {
  const { open, show, close, openButtonRef, closeButtonRef, drawerRef } =
    useDrawer();

  return (
    <div className="min-[960px]:hidden" data-open={open}>
      <button
        ref={openButtonRef}
        type="button"
        className={iconButton}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        aria-label="Open menu"
        onClick={show}
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <div
        aria-hidden="true"
        onClick={() => close(true)}
        className={cn(
          "fixed inset-0 z-[70] bg-backdrop transition-[opacity,visibility]",
          open
            ? "visible opacity-100 duration-300 ease-out"
            : "invisible opacity-0 duration-[220ms] ease-in",
        )}
      />

      <div
        ref={drawerRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={cn(
          "fixed inset-y-0 left-0 z-[80] flex w-[clamp(50vw,320px,80vw)] flex-col overflow-y-auto overscroll-contain",
          "border-r border-line-dark bg-navy-900 text-on-dark shadow-xl",
          "pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]",
          "transition-[transform,visibility] motion-reduce:translate-x-0 motion-reduce:transition-[opacity,visibility]",
          open
            ? "visible translate-x-0 duration-[380ms] ease-out-expo motion-reduce:opacity-100"
            : "invisible -translate-x-full duration-[240ms] ease-in motion-reduce:opacity-0",
        )}
      >
        <div className="flex min-h-18 items-center justify-between gap-4 border-b border-line-dark pr-4 pl-6">
          <Logo className="h-11" onClick={() => close(false)} />
          <button
            ref={closeButtonRef}
            type="button"
            className={iconButton}
            aria-label="Close menu"
            onClick={() => close(true)}
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col py-2">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => close(false)}
              style={{ transitionDelay: open ? `${120 + i * 40}ms` : "0ms" }}
              className={cn(
                "group flex min-h-14 w-full items-center justify-between border-b border-line-dark px-6",
                "font-display text-[1.0625rem] leading-tight font-semibold text-on-dark no-underline",
                "transition-[opacity,transform,color,background-color] duration-300 ease-brand",
                "hover:bg-white/5 hover:text-orchid focus-visible:bg-white/5 focus-visible:text-orchid focus-visible:outline-offset-[-3px]",
                open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0",
                "motion-reduce:translate-x-0 motion-reduce:opacity-100",
              )}
            >
              {item.label}
              <ArrowRight
                aria-hidden="true"
                className="size-4 text-on-dark-muted transition-transform duration-200 group-hover:translate-x-[3px] group-hover:text-orchid"
              />
            </Link>
          ))}
        </nav>

        <div
          style={{
            transitionDelay: open ? `${120 + items.length * 40}ms` : "0ms",
          }}
          className={cn(
            "mt-auto grid gap-4 border-t border-line-dark p-6 transition-[opacity,transform] duration-300 ease-brand",
            open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0",
            "motion-reduce:translate-x-0 motion-reduce:opacity-100",
          )}
        >
          <ButtonLink
            href={cta.href}
            arrow
            className="w-full"
            onClick={() => close(false)}
          >
            {cta.label}
          </ButtonLink>
          <p className="text-[0.8125rem] [overflow-wrap:anywhere] text-on-dark-muted">
            {contact.email}
            <br />
            {contact.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
