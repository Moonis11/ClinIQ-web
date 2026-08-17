"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "uz" | "ru" | "en";

const translations = {
  nav_features: { uz: "Xususiyatlar", ru: "Возможности", en: "Features" },
  nav_clinics: { uz: "Klinikalar uchun", ru: "Для клиник", en: "For clinics" },
  nav_login: { uz: "Kirish", ru: "Войти", en: "Sign in" },
  hero_eyebrow: { uz: "AI asosidagi klinik intellekt platformasi", ru: "Платформа клинического интеллекта на основе ИИ", en: "AI-powered clinical intelligence platform" },
  hero_title_1: { uz: "Bitta bog'langan yo'l.", ru: "Единый связанный путь.", en: "One connected path." },
  hero_title_2: { uz: "Aqlliroq sog'liqni saqlash.", ru: "Более умное здравоохранение.", en: "Smarter healthcare." },
  hero_subtitle: {
    uz: "Bemorning tibbiy tarixi klinika almashtirilsa ham yo'qolmaydi. ClinIQ bemorlar, klinikalar va AI'ni bitta uzluksiz tizimga bog'laydi.",
    ru: "Медицинская история пациента не теряется даже при смене клиники. ClinIQ связывает пациентов, клиники и ИИ в единую непрерывную систему.",
    en: "A patient's medical history isn't lost even when they switch clinics. ClinIQ connects patients, clinics, and AI into one continuous system.",
  },
  hero_cta_patient: { uz: "Bemor sifatida boshlash", ru: "Начать как пациент", en: "Get started as a patient" },
  hero_cta_clinic: { uz: "Klinika sifatida qo'shilish", ru: "Присоединиться как клиника", en: "Join as a clinic" },
  hero_hub_label: { uz: "yagona tarix", ru: "единая история", en: "unified history" },
  stat_clinics: { uz: "xususiy klinika O'zbekistonda", ru: "частных клиник в Узбекистане", en: "private clinics in Uzbekistan" },
  stat_languages: { uz: "tilda ishlaydi", ru: "языка интерфейса", en: "languages supported" },
  stat_roles: { uz: "integratsiyalashgan rol", ru: "интегрированных ролей", en: "integrated roles" },
  flow_patient: { uz: "Bemor", ru: "Пациент", en: "Patient" },
  flow_reception: { uz: "Qabulxona", ru: "Регистратура", en: "Reception" },
  flow_doctor: { uz: "Shifokor", ru: "Врач", en: "Doctor" },
  flow_lab: { uz: "Laboratoriya", ru: "Лаборатория", en: "Lab" },
  flow_radiology: { uz: "Radiologiya", ru: "Радиология", en: "Radiology" },
  flow_ai: { uz: "AI", ru: "ИИ", en: "AI" },
  flow_care: { uz: "Davolash", ru: "Лечение", en: "Care" },
  features_title: { uz: "Nima uchun bu muhim", ru: "Почему это важно", en: "Why this matters" },
  feature_1_title: { uz: "Yagona tibbiy ma'lumotlar bazasi", ru: "Единая база медицинских данных", en: "One unified medical database" },
  feature_1_desc: { uz: "Bemorning butun tibbiy tarixi bitta joyda saqlanadi va istalgan klinikada darhol mavjud bo'ladi.", ru: "Вся медицинская история пациента хранится в одном месте и сразу доступна в любой клинике.", en: "The patient's entire medical history is stored in one place and instantly available at any clinic." },
  feature_2_title: { uz: "Ikkala tomon uchun vaqtni tejash", ru: "Экономия времени для обеих сторон", en: "Saves time for both sides" },
  feature_2_desc: { uz: "Bemor navbat kutib vaqt yo'qotmaydi, shifokor esa qog'ozbozlik o'rniga bemorga ko'proq vaqt ajratadi.", ru: "Пациент не теряет время в очереди, а врач уделяет больше времени пациенту вместо бумажной работы.", en: "Patients don't lose time waiting, and doctors spend more time on patients instead of paperwork." },
  feature_3_title: { uz: "Xizmatlar monitoringi", ru: "Мониторинг услуг", en: "Service monitoring" },
  feature_3_desc: { uz: "Qabul, laboratoriya, radiologiya, shifokor xulosasi — bemorning yo'li real vaqtda bitta joydan kuzatiladi.", ru: "Приём, лаборатория, радиология, заключение врача — путь пациента отслеживается в реальном времени из одного места.", en: "Reception, lab, radiology, doctor's conclusion — the patient's journey is tracked in real time from one place." },
  feature_4_title: { uz: "To'liq avtomatlashtirilgan ekotizim", ru: "Полностью автоматизированная экосистема", en: "A fully automated ecosystem" },
  feature_4_desc: { uz: "Navbat olishdan tortib hisobot va bildirishnomalargacha — jarayonlarning katta qismi tizim tomonidan o'zi bajariladi.", ru: "От записи на приём до отчётов и уведомлений — большая часть процессов выполняется системой автоматически.", en: "From booking to reports and notifications — most of the process runs itself." },
  emergency_eyebrow: { uz: "Noyob xususiyat", ru: "Уникальная функция", en: "Unique feature" },
  emergency_title: { uz: "Favqulodda tibbiy karta", ru: "Карта неотложной помощи", en: "Emergency medical card" },
  emergency_desc: {
    uz: "Qon guruhi, allergiya, dorilar va favqulodda aloqa — QR kod orqali, login qilmasdan, hushidan ketgan bemorga ham yordam berish mumkin.",
    ru: "Группа крови, аллергии, лекарства и экстренный контакт — через QR-код, без входа в систему, можно помочь даже пациенту без сознания.",
    en: "Blood type, allergies, medications, and emergency contact — via QR code, without logging in, so help can reach even an unconscious patient.",
  },
  emergency_point_1: { uz: "Login talab qilinmaydi", ru: "Вход в систему не требуется", en: "No login required" },
  emergency_point_2: { uz: "Faqat hayot-mamot uchun zarur ma'lumot", ru: "Только жизненно важная информация", en: "Only life-critical information" },
  emergency_point_3: { uz: "Lock screen'ga qo'yish mumkin", ru: "Можно установить на экран блокировки", en: "Can be set as your lock screen" },
  emergency_card_label: { uz: "Favqulodda ma'lumot", ru: "Экстренная информация", en: "Emergency info" },
  emergency_card_scan_note: { uz: "To'liq ma'lumot uchun QR kodni skanerlang", ru: "Отсканируйте QR-код для полной информации", en: "Scan the QR code for full details" },
  clinics_title: { uz: "Klinikangizni ClinIQ tarmog'iga qo'shing", ru: "Присоедините свою клинику к сети ClinIQ", en: "Bring your clinic into the ClinIQ network" },
  clinics_desc: {
    uz: "Qog'ozbozlikni kamaytiring, yangi bemorlarni jalb qiling va AI yordamida ish jarayonini tezlashtiring.",
    ru: "Сократите бумажную работу, привлекайте новых пациентов и ускорьте рабочие процессы с помощью ИИ.",
    en: "Cut down on paperwork, attract new patients, and speed up your workflow with AI.",
  },
  clinics_cta: { uz: "Klinika sifatida bog'lanish", ru: "Связаться как клиника", en: "Contact us as a clinic" },

  // --- Bemorlar uchun to'liq imkoniyatlar ---
  patient_features_title: { uz: "Bemorlar uchun", ru: "Для пациентов", en: "For patients" },
  patient_features_subtitle: {
    uz: "Klinikaga bormasdan ro'yxatdan o'ting va shu bitta ilova orqali sog'lig'ingizni boshqaring",
    ru: "Регистрируйтесь без похода в клинику и управляйте здоровьем через одно приложение",
    en: "Register without visiting a clinic and manage your health through one app",
  },
  pf_1_title: { uz: "Mustaqil ro'yxatdan o'tish", ru: "Самостоятельная регистрация", en: "Self-registration" },
  pf_1_desc: { uz: "Klinikaga bormasdan, ID va parol bilan bir necha daqiqada ro'yxatdan o'ting.", ru: "Зарегистрируйтесь за несколько минут по ID и паролю, не посещая клинику.", en: "Register in minutes with an ID and password, no clinic visit needed." },
  pf_2_title: { uz: "Navbat olish (offline/onlayn)", ru: "Запись на приём (очно/онлайн)", en: "Book appointments (in-person/online)" },
  pf_2_desc: { uz: "Bo'sh vaqtlarni real vaqtda ko'rib, shifokorga bir necha soniyada yoziling — yoki onlayn ko'rikni tanlang.", ru: "Смотрите свободное время в реальном времени и записывайтесь за секунды — или выберите онлайн-приём.", en: "See open slots in real time and book in seconds — or choose an online visit." },
  pf_3_title: { uz: "Shifokor reytingi", ru: "Рейтинг врача", en: "Doctor ratings" },
  pf_3_desc: { uz: "Har bir shifokorning boshqa bemorlar bergan bahosi va sharhlarini ko'rib, ongli tanlov qiling.", ru: "Смотрите оценки и отзывы других пациентов о враче и выбирайте осознанно.", en: "See ratings and reviews from other patients before you choose a doctor." },
  pf_4_title: { uz: "Klinikalarni solishtirish", ru: "Сравнение клиник", en: "Compare clinics" },
  pf_4_desc: { uz: "Narx, navbat uzunligi va reyting bo'yicha eng yaqin klinikalarni solishtiring.", ru: "Сравнивайте ближайшие клиники по цене, длине очереди и рейтингу.", en: "Compare nearby clinics by price, queue length, and rating." },
  pf_5_title: { uz: "AI sog'liq maslahati", ru: "Консультация ИИ по здоровью", en: "AI health consultation" },
  pf_5_desc: { uz: "Shaxsiy tibbiy tarixingiz asosida javob beradigan AI yordamchidan maslahat oling.", ru: "Получите совет от ИИ-помощника, который учитывает вашу личную медицинскую историю.", en: "Get advice from an AI assistant that considers your personal medical history." },
  pf_6_title: { uz: "Tahlil va radiologiya natijalari", ru: "Результаты анализов и радиологии", en: "Lab and radiology results" },
  pf_6_desc: { uz: "Natijalar tayyor bo'lishi bilan bildirishnoma oling, me'yor bilan solishtirilgan holda ko'ring.", ru: "Получайте уведомления сразу при готовности результатов, сравнивайте с нормой.", en: "Get notified the moment results are ready, viewed against normal ranges." },
  pf_7_title: { uz: "Dori eslatmalari", ru: "Напоминания о лекарствах", en: "Medication reminders" },
  pf_7_desc: { uz: "Shifokor belgilagan vaqtlarda Telegram orqali dori qabul qilish eslatmasi keladi.", ru: "Получайте напоминания о приёме лекарств в Telegram в назначенное врачом время.", en: "Get Telegram reminders to take your medication at the times your doctor set." },
  pf_8_title: { uz: "Do'stni taklif qilish", ru: "Пригласить друга", en: "Invite a friend" },
  pf_8_desc: { uz: "O'z kodingiz orqali do'stingizni taklif qiling — ikkalangiz ham bonusga ega bo'lasiz.", ru: "Приглашайте друзей по своему коду — вы оба получите бонус.", en: "Invite friends with your own code — you both get a bonus." },

  // --- Klinikalar uchun to'liq imkoniyatlar ---
  clinic_features_title: { uz: "Klinikalar uchun", ru: "Для клиник", en: "For clinics" },
  clinic_features_subtitle: {
    uz: "Qabuldan hisobotgacha — klinikangizning butun ish jarayoni bitta platformada",
    ru: "От приёма до отчётов — весь рабочий процесс вашей клиники в одной платформе",
    en: "From reception to reports — your clinic's entire workflow in one platform",
  },
  cf_1_title: { uz: "7 rolli integratsiyalashgan tizim", ru: "Интегрированная система из 7 ролей", en: "A 7-role integrated system" },
  cf_1_desc: { uz: "Qabulxona, shifokor, laboratoriya, radiologiya, menejer va bosh admin — bitta bog'langan platformada.", ru: "Регистратура, врач, лаборатория, радиология, менеджер и главный админ — на одной связанной платформе.", en: "Reception, doctor, lab, radiology, manager, and admin — on one connected platform." },
  cf_2_title: { uz: "AI qoralama va klinik formulalar", ru: "AI-черновик и клинические формулы", en: "AI drafts and clinical formulas" },
  cf_2_desc: { uz: "Shifokor kiritgan ma'lumot asosida AI tashxis/tavsiya qoralamasini tayyorlaydi, shifokor tasdiqlaydi.", ru: "ИИ готовит черновик диагноза/рекомендаций на основе данных врача, врач подтверждает.", en: "AI drafts a diagnosis/recommendation from the doctor's input, which the doctor confirms." },
  cf_3_title: { uz: "ML asosidagi xavf bashorati", ru: "Прогноз риска на основе ML", en: "ML-based risk prediction" },
  cf_3_desc: { uz: "WHO, ADA, KDIGO kabi mezonlarga asoslangan modellar orqali kasallik xavfini baholash.", ru: "Оценка риска заболеваний с помощью моделей на основе критериев WHO, ADA, KDIGO.", en: "Assess disease risk using models based on WHO, ADA, KDIGO criteria." },
  cf_4_title: { uz: "Moliya va analitika", ru: "Финансы и аналитика", en: "Finance and analytics" },
  cf_4_desc: { uz: "Tushum, to'lov usullari, shifokorlar bo'yicha trend — barchasi real vaqtda ko'rinadi.", ru: "Доход, способы оплаты, тренды по врачам — всё видно в реальном времени.", en: "Revenue, payment methods, per-doctor trends — all visible in real time." },
  cf_5_title: { uz: "Yangi bemorlar oqimi", ru: "Поток новых пациентов", en: "A stream of new patients" },
  cf_5_desc: { uz: "Mustaqil ro'yxatdan o'tgan bemorlar klinikangizni tanlashi mumkin — qo'shimcha marketingsiz.", ru: "Самостоятельно зарегистрированные пациенты могут выбрать вашу клинику - без дополнительного маркетинга.", en: "Self-registered patients can choose your clinic — no extra marketing needed." },
  cf_6_title: { uz: "Kamroq qog'ozbozlik", ru: "Меньше бумажной работы", en: "Less paperwork" },
  cf_6_desc: { uz: "Bemor tarixi raqamli saqlanadi, qayta kiritish shart emas — vaqt tejaladi.", ru: "История пациента хранится в цифровом виде, повторный ввод не нужен - экономия времени.", en: "Patient history is stored digitally, no re-entry needed — saving time." },

  footer_tagline: { uz: "O'zbekistonda AI asosidagi klinik intellekt platformasi.", ru: "Платформа клинического интеллекта на основе ИИ в Узбекистане.", en: "AI-powered clinical intelligence platform in Uzbekistan." },

  // --- B2B narxlar ---
  pricing_title: { uz: "Klinikalar uchun narxlar", ru: "Цены для клиник", en: "Pricing for clinics" },
  pricing_subtitle: { uz: "Bepul sinovdan boshlang, o'sishingiz bilan tarifni oshiring", ru: "Начните с бесплатного пробного периода и повышайте тариф по мере роста", en: "Start with a free trial and upgrade as you grow" },
  price_popular_badge: { uz: "Eng ko'p tanlanadi", ru: "Популярный", en: "Most popular" },
  price_trial_name: { uz: "Sinov", ru: "Пробный", en: "Trial" },
  price_trial_price: { uz: "Bepul", ru: "Бесплатно", en: "Free" },
  price_trial_limit: { uz: "Kuniga 1 ta AI tahlili", ru: "1 анализ ИИ в день", en: "1 AI analysis per day" },
  price_basic_name: { uz: "Asosiy", ru: "Базовый", en: "Basic" },
  price_basic_price: { uz: "$39 / shifokor / oyiga", ru: "$39 / врач / в месяц", en: "$39 / doctor / month" },
  price_basic_limit: { uz: "Kuniga 5 ta AI tahlili", ru: "5 анализов ИИ в день", en: "5 AI analyses per day" },
  price_pro_name: { uz: "Pro", ru: "Про", en: "Pro" },
  price_pro_price: { uz: "$59 / shifokor / oyiga", ru: "$59 / врач / в месяц", en: "$59 / doctor / month" },
  price_pro_limit: { uz: "Kuniga 10 ta AI tahlili", ru: "10 анализов ИИ в день", en: "10 AI analyses per day" },
  price_corporate_name: { uz: "Korporativ", ru: "Корпоративный", en: "Corporate" },
  price_corporate_price: { uz: "Individual narx", ru: "Индивидуальная цена", en: "Custom pricing" },
  price_corporate_limit: { uz: "Kuniga 20 ta AI tahlili", ru: "20 анализов ИИ в день", en: "20 AI analyses per day" },

  // --- Klinika so'rov formasi ---
  contact_field_name: { uz: "Ismingiz", ru: "Ваше имя", en: "Your name" },
  contact_field_clinic: { uz: "Klinika nomi", ru: "Название клиники", en: "Clinic name" },
  contact_field_phone: { uz: "Telefon raqamingiz", ru: "Ваш телефон", en: "Your phone" },
  contact_field_message: { uz: "Xabar (ixtiyoriy)", ru: "Сообщение (необязательно)", en: "Message (optional)" },
  contact_submit: { uz: "Yuborish", ru: "Отправить", en: "Submit" },
  contact_sent_title: { uz: "Rahmat!", ru: "Спасибо!", en: "Thank you!" },
  contact_sent_desc: { uz: "So'rovingiz qabul qilindi, tez orada bog'lanamiz.", ru: "Ваша заявка принята, мы скоро свяжемся с вами.", en: "Your request has been received — we'll be in touch soon." },
  contact_not_configured: { uz: "Forma hozircha sozlanmagan - iltimos to'g'ridan-to'g'ri telefon yoki email orqali bog'laning.", ru: "Форма пока не настроена - пожалуйста, свяжитесь напрямую по телефону или email.", en: "The form isn't set up yet — please contact us directly by phone or email." },
  contact_error: { uz: "Xatolik yuz berdi, iltimos qayta urinib ko'ring yoki to'g'ridan-to'g'ri bog'laning.", ru: "Произошла ошибка, попробуйте снова или свяжитесь напрямую.", en: "Something went wrong — please try again or contact us directly." },

  // --- Biz haqimizda / asoschi ---
  about_title: { uz: "Nega ClinIQ", ru: "Почему ClinIQ", en: "Why ClinIQ" },
  about_founder_role: { uz: "Asoschi va mahsulot rahbari", ru: "Основатель и продакт-менеджер", en: "Founder & Product Lead" },
  about_founder_bio: {
    uz: "ClinIQ hozircha asoschining shaxsiy mablag'lari hisobidan, jalb qilingan backend dasturchi bilan birgalikda rivojlantirilmoqda. Jamoada, shuningdek, Doctor panelini sinovdan o'tkazayotgan 2 nafar shifokor ham ishtirok etmoqda.",
    ru: "ClinIQ пока развивается за счёт личных средств основателя вместе с привлечённым backend-разработчиком. В команде также участвуют 2 врача, тестирующие панель врача.",
    en: "ClinIQ is currently being developed with the founder's personal funds, together with a contracted backend developer. The team also includes 2 doctors testing the Doctor panel.",
  },

  // --- Footer / aloqa ---
  footer_contact_title: { uz: "Aloqa", ru: "Контакты", en: "Contact" },
  footer_links_title: { uz: "Havolalar", ru: "Ссылки", en: "Links" },
  footer_privacy: { uz: "Maxfiylik siyosati", ru: "Политика конфиденциальности", en: "Privacy policy" },
  footer_terms: { uz: "Foydalanish shartlari", ru: "Условия использования", en: "Terms of use" },
  footer_rights: { uz: "Barcha huquqlar himoyalangan.", ru: "Все права защищены.", en: "All rights reserved." },
} as const;

export type TranslationKey = keyof typeof translations;

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = "cliniq_website_lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Lang | null) || "uz";
    setLangState(saved);
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  function t(key: TranslationKey): string {
    return translations[key]?.[lang] ?? key;
  }

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang faqat LangProvider ichida ishlatilishi kerak");
  return ctx;
}
