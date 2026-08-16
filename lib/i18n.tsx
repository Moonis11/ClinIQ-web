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
  footer_tagline: { uz: "O'zbekistonda AI asosidagi klinik intellekt platformasi.", ru: "Платформа клинического интеллекта на основе ИИ в Узбекистане.", en: "AI-powered clinical intelligence platform in Uzbekistan." },
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
