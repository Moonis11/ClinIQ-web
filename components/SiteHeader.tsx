"use client";
import Image from "next/image";
const APP_URL="https://cliniqpatient-production.up.railway.app";
export default function SiteHeader({home=false}:{home?:boolean}){const b=home?"":"/";return <header className="new-header"><a className="brand" href="/"><Image src="/cliniq-logo.jpeg" alt="ClinIQ" width={42} height={42}/><span>Clin<b>IQ</b><small>Digital health</small></span></a><nav><a href={`${b}#qanday-ishlaydi`}>Qanday ishlaydi</a><a href={`${b}#imkoniyatlar`}>Imkoniyatlar</a><a href={`${b}#ai`}>AI yordamchi</a><a href={`${b}#doktorlar`}>Doktorlar</a><a href="/legal">Huquqiy hujjatlar</a></nav><a className="header-login" href={`${APP_URL}/patient/login`}>Kirish <span>↗</span></a></header>}
