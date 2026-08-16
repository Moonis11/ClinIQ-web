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
