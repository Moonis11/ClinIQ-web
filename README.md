# ClinIQ Website (marketing sahifa)

Bu — **butunlay mustaqil** loyiha. `cliniq-frontend` (bemor/xodim ilovasi) va
`cliniq-backend`ga hech qanday bog'liqligi yo'q — o'z `package.json`i,
o'z bog'liqliklari bilan alohida ishlaydi. Buni o'zgartirish asosiy
ilovaga hech qanday ta'sir qilmaydi.

## Lokal ishga tushirish

```bash
npm install
npm run dev
```

`http://localhost:3000` da ochiladi.

## Railway'ga joylashtirish (mavjud hisobingiz ichida, yangi xizmat sifatida)

1. Railway dashboard -> mavjud loyihangiz (masalan "faithful-radiance") ->
   **"+ New"** -> **"GitHub Repo"** (yoki shu papkani alohida yangi GitHub
   repo qilib push qiling, keyin shuni ulang)
2. Bu - **yangi, alohida xizmat (service)** bo'lib qo'shiladi, mavjud
   backend/frontend xizmatlaringizga tegmaydi
3. Railway avtomatik aniqlaydi (Next.js) - qo'shimcha sozlash shart emas
4. Domain: Railway avtomatik `*.up.railway.app` manzil beradi, yoki
   Settings -> Domains orqali o'z domeningizni (masalan `cliniq.uz`)
   ulashingiz mumkin

## Muhim: mahsulot havolasi

`app/page.tsx` faylida `APP_URL` o'zgaruvchisi bor - bu asosiy
ilovangizning (bemor/xodim) havolasi:

```ts
const APP_URL = "https://cliniqpatient-production.up.railway.app";
```

Agar asosiy ilovaning domeni o'zgarsa, shu bitta qatorni yangilash
kifoya.

## Tuzilishi

- `app/page.tsx` - bosh sahifaning butun mazmuni
- `lib/i18n.tsx` - 3 tilli (uz/ru/en) tarjima tizimi (mustaqil, asosiy
  ilovaning i18n tizimidan alohida)
- `lib/theme.tsx` - qorong'i/yorug' rejim
- `components/` - kichik yordamchi komponentlar (til tanlash, tema
  tugmasi)
- `app/globals.css` - ClinIQ'ning "shisha" (glassmorphic) dizayn tizimi

## Klinika so'rov formasi - Telegram orqali xabar olish

Bosh sahifadagi "Klinika sifatida bog'lanish" formasi ishlashi uchun,
Railway'da (yangi xizmat -> Variables bo'limida) IKKITA muhit
o'zgaruvchisini qo'shing:

- `TELEGRAM_BOT_TOKEN` - @BotFather orqali yaratilgan bot tokeni
  (agar asosiy ilovada allaqachon bot bo'lsa, o'sha tokenni qayta
  ishlatsangiz ham bo'ladi)
- `TELEGRAM_CHAT_ID` - xabarlar kelishi kerak bo'lgan chat/guruh ID'si
  (o'zingizning shaxsiy Telegram ID'ingiz yoki alohida guruh bo'lishi
  mumkin)

Bular sozlanmaguncha, forma "hozircha sozlanmagan, to'g'ridan-to'g'ri
bog'laning" deb ko'rsatadi - jimgina ishlamay qolmaydi.

## Google Analytics qo'shish (ixtiyoriy)

Saytga necha kishi kirganini kuzatish uchun, app/layout.tsx fayliga
Google Analytics skriptini qo'shishingiz mumkin - avval
analytics.google.com'da hisob oching, Measurement ID (masalan
G-XXXXXXX) oling, keyin so'rasangiz shu skriptni qo'shib beraman.
