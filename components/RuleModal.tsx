"use client";

import { useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Rule } from "@/data/rules";
import RuleView from "./RuleView";

interface Props {
  rule: Rule;
}

export default function RuleModal({ rule }: Props) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => router.back(), [router]);

  // ESC closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Move focus into panel on open
  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  const CloseButton = (
    <button
      onClick={close}
      aria-label="Close"
      className="w-8 h-8 flex items-center justify-center rounded-full text-lg transition-opacity hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-current"
      style={{ color: "inherit" }}
    >
      ✕
    </button>
  );

  return (
    <AnimatePresence>
      {/* backdrop */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        aria-hidden="true"
      />

      {/* panel */}
      <motion.div
        key="panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Rule ${rule.id}`}
        tabIndex={-1}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 outline-none"
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
          <RuleView rule={rule} controlSlot={CloseButton} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
