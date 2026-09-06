"use client";
import {createContext,useContext,useEffect,useState,ReactNode} from "react";
export type SiteLang="uz"|"uzc"|"ru"|"en";
const C=createContext<{lang:SiteLang;setLang:(v:SiteLang)=>void}|null>(null);
export function SiteLanguageProvider({children}:{children:ReactNode}){const[lang,setState]=useState<SiteLang>("uz");useEffect(()=>{const v=localStorage.getItem("cliniq_website_site_lang") as SiteLang|null;if(v)setState(v)},[]);function setLang(v:SiteLang){setState(v);localStorage.setItem("cliniq_website_site_lang",v)}return <C.Provider value={{lang,setLang}}>{children}</C.Provider>}
export function useSiteLanguage(){const v=useContext(C);if(!v)throw new Error("useSiteLanguage requires SiteLanguageProvider");return v}
