import type { Metadata } from "next";

export const metadata: Metadata = { title: "Maxfiylik siyosati - ClinIQ" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <a href="/" className="glass-muted text-sm hover:underline">← Bosh sahifaga qaytish</a>
      <h1 className="mt-4 font-serif text-3xl italic text-glass-textLight dark:text-glass-textDark">
        Maxfiylik siyosati
      </h1>
      <p className="glass-muted mt-2 text-xs">Oxirgi yangilanish: 2026-yil avgust</p>

      <div className="glass-card mt-8 space-y-5 p-6 text-sm leading-relaxed sm:p-8">
        <p className="glass-muted rounded-xl bg-glass-warning/10 p-3 text-xs">
          ⚠️ Bu — boshlang'ich (namunaviy) matn. Tibbiy ma'lumotlar bilan ishlaydigan platforma sifatida,
          ushbu hujjatni rasmiy foydalanishdan oldin yurist bilan ko'rib chiqish tavsiya etiladi.
        </p>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">1. Qanday ma'lumot yig'amiz</h2>
          <p className="glass-muted mt-1.5">
            ClinIQ platformasidan foydalanganda quyidagi ma'lumotlarni yig'ishimiz mumkin: ism-familiya,
            telefon raqami, tug'ilgan sana, jins, viloyat/tuman, va (agar kiritsangiz) tibbiy tarix
            ma'lumotlari (tashxis, tahlil natijalari, dorilar, allergiya, qon guruhi).
          </p>
        </section>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">2. Ma'lumotdan qanday foydalanamiz</h2>
          <p className="glass-muted mt-1.5">
            Ma'lumotlaringiz faqat sizga tibbiy xizmat ko'rsatish, tibbiy tarixingizni yuritish, shifokor
            bilan aloqani osonlashtirish va (agar roziligingiz bilan) AI yordamida shaxsiy tavsiyalar berish
            uchun ishlatiladi. Ma'lumotlaringiz uchinchi tomonlarga sotilmaydi.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">3. Favqulodda tibbiy karta</h2>
          <p className="glass-muted mt-1.5">
            Agar Favqulodda tibbiy kartangizni to'ldirsangiz, shu ma'lumot (qon guruhi, allergiya, dorilar,
            favqulodda aloqa) maxsus, taxmin qilib bo'lmaydigan QR kod orqali, login talab qilinmasdan
            ko'rsatiladi. Bu — sizning roziligingiz bilan, faqat favqulodda holatlar uchun mo'ljallangan.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">4. Ma'lumotlarni saqlash va xavfsizlik</h2>
          <p className="glass-muted mt-1.5">
            Ma'lumotlaringiz shifrlangan holda saqlanadi. Parollar hash'lanadi, tizimga kirish JWT
            autentifikatsiya orqali himoyalangan.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">5. Sizning huquqlaringiz</h2>
          <p className="glass-muted mt-1.5">
            Istalgan vaqtda o'z ma'lumotlaringizni ko'rish, tahrirlash yoki hisobingizni o'chirishni so'rash
            huquqiga egasiz. Bunga bog'liq savol/so'rovlar uchun quyidagi aloqa orqali murojaat qiling.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-glass-textLight dark:text-glass-textDark">6. Aloqa</h2>
          <p className="glass-muted mt-1.5">
            Savollaringiz bo'lsa: <a href="mailto:munisanematova2023@gmail.com" className="underline">munisanematova2023@gmail.com</a> yoki{" "}
            <a href="tel:+998974646665" className="underline">+998 97 464 66 65</a>
          </p>
        </section>
      </div>
    </main>
  );
}
