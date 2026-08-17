"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "not_configured" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, clinicName, message }),
      });
      if (res.ok) {
        setStatus("sent");
        setName(""); setPhone(""); setClinicName(""); setMessage("");
        return;
      }
      const data = await res.json().catch(() => ({}));
      setStatus(data?.error === "not_configured" ? "not_configured" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="glass-card p-6 text-center">
        <p className="text-2xl">✅</p>
        <p className="mt-2 text-sm font-semibold text-glass-textLight dark:text-glass-textDark">{t("contact_sent_title")}</p>
        <p className="glass-muted mt-1 text-xs">{t("contact_sent_desc")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-3 p-6 text-left">
      <div>
        <label className="mb-1 block text-xs font-medium glass-muted">{t("contact_field_name")}</label>
        <input required value={name} onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-glass-borderLight bg-glass-inputLight px-3.5 py-2.5 text-sm outline-none dark:border-glass-borderDark dark:bg-glass-inputDark" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium glass-muted">{t("contact_field_clinic")}</label>
        <input required value={clinicName} onChange={(e) => setClinicName(e.target.value)}
          className="w-full rounded-xl border border-glass-borderLight bg-glass-inputLight px-3.5 py-2.5 text-sm outline-none dark:border-glass-borderDark dark:bg-glass-inputDark" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium glass-muted">{t("contact_field_phone")}</label>
        <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+998 90 123 45 67"
          className="w-full rounded-xl border border-glass-borderLight bg-glass-inputLight px-3.5 py-2.5 text-sm outline-none dark:border-glass-borderDark dark:bg-glass-inputDark" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium glass-muted">{t("contact_field_message")}</label>
        <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-xl border border-glass-borderLight bg-glass-inputLight px-3.5 py-2.5 text-sm outline-none dark:border-glass-borderDark dark:bg-glass-inputDark" />
      </div>

      {status === "not_configured" && (
        <p className="rounded-xl bg-glass-warning/15 px-3.5 py-2.5 text-xs text-glass-warning">{t("contact_not_configured")}</p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-glass-danger/15 px-3.5 py-2.5 text-xs text-glass-danger">{t("contact_error")}</p>
      )}

      <button type="submit" disabled={status === "sending"} className="glass-btn-secondary w-full">
        {status === "sending" ? "..." : t("contact_submit")}
      </button>
    </form>
  );
}
