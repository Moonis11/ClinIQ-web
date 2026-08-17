import { NextRequest, NextResponse } from "next/server";

// Bu yo'l klinika so'rov formasidan kelgan ma'lumotni Telegram bot
// orqali TO'G'RIDAN-TO'G'RI sizga yuboradi - alohida baza yoki
// email xizmati kerak emas. Ishlashi uchun Railway'da ikkita muhit
// o'zgaruvchisini (environment variable) sozlash SHART:
//
//   TELEGRAM_BOT_TOKEN - @BotFather orqali yaratilgan bot tokeni
//   TELEGRAM_CHAT_ID   - xabar boradigan chat/guruh ID'si
//
// Agar bular sozlanmagan bo'lsa, forma buni aniq xabar bilan
// ko'rsatadi (jimgina "muvaffaqiyatli" demaydi).
export async function POST(req: NextRequest) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 }
    );
  }

  let body: { name?: string; phone?: string; clinicName?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const name = (body.name || "").trim().slice(0, 200);
  const phone = (body.phone || "").trim().slice(0, 60);
  const clinicName = (body.clinicName || "").trim().slice(0, 200);
  const message = (body.message || "").trim().slice(0, 1000);

  if (!name || !phone || !clinicName) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  const text =
    `🏥 Yangi klinika so'rovi (ClinIQ website)\n\n` +
    `Ism: ${name}\n` +
    `Klinika: ${clinicName}\n` +
    `Telefon: ${phone}\n` +
    (message ? `Xabar: ${message}\n` : "");

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!tgRes.ok) {
      return NextResponse.json({ ok: false, error: "telegram_failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "telegram_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
