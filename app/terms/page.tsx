import type { Metadata } from "next";

export const metadata: Metadata = { title: "Foydalanish shartlari - ClinIQ" };

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <a href="/" className="glass-muted text-sm hover:underline">← Bosh sahifaga qaytish</a>
      <h1 className="mt-4 font-serif text-3xl italic text-glass-textLight dark:text-glass-textDark">
        Foydalanish shartlari
      </h1>
      <p className="glass-muted mt-2 text-xs">Oxirgi yangilanish: 2026-yil avgust</p>

      <div className="glass-card mt-8 space-y-5 p-6 text-sm leading-relaxed sm:p-8">
        <p className="glass-muted rounded-xl bg-glass-warning/10 p-3 text-xs">
          ⚠️ Bu — boshlang'ich (namunaviy) matn. Rasmiy foydalanishdan oldin yurist bilan ko'rib chiqish
          tavsiya etiladi.
        </p>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">1. Xizmat tavsifi</h2>
          <p className="glass-muted mt-1.5">
            ClinIQ - bemorlar, klinikalar va sun'iy intellektni bitta platformada bog'laydigan tibbiy
            axborot tizimi. Platforma hozircha test/sinov rejimida ishlaydi.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">2. AI maslahat - tashxis emas</h2>
          <p className="glass-muted mt-1.5">
            ClinIQ'dagi sun'iy intellekt maslahati hech qachon rasmiy tibbiy tashxis yoki davolash tavsiyasi
            o'rnini bosmaydi. Har qanday sog'liq bilan bog'liq qaror uchun malakali shifokorga murojaat
            qiling.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">3. Foydalanuvchi javobgarligi</h2>
          <p className="glass-muted mt-1.5">
            Ro'yxatdan o'tishda kiritilgan ma'lumotlarning to'g'riligi uchun foydalanuvchining o'zi
            javobgardir. Hisobingiz ma'lumotlarini (ID, parol) uchinchi shaxslarga bermang.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">4. Xizmat o'zgarishi</h2>
          <p className="glass-muted mt-1.5">
            Platforma hali rivojlanish bosqichida bo'lgani uchun, funksiyalar oldindan ogohlantirmasdan
            o'zgarishi yoki vaqtincha mavjud bo'lmasligi mumkin.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">5. Aloqa</h2>
          <p className="glass-muted mt-1.5">
            Savollaringiz bo'lsa: <a href="mailto:munisanematova2023@gmail.com" className="underline">munisanematova2023@gmail.com</a> yoki{" "}
            <a href="tel:+998974646665" className="underline">+998 97 464 66 65</a>
          </p>
        </section>
      </div>
    </main>
  );
}
