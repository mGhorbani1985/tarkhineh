import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Instagram } from "iconsax-react";
import {
    UserCircleIcon,
    Cog6ToothIcon,
  } from "@heroicons/react/24/solid";
import Twitter from "../../Common/Twitter";
import Telegram from "../../Common/Telegram";
import { Typography } from "@material-tailwind/react";
import FooterContactForm from "./FooterContaactForm";


const Footer = () => {
    return ( 
    <footer className="bg-[url('src/assets/Images/Bg/Footer.png')] bg-no-repeat bg-cover grid grid-cols-12">
       <div className="col-span-6 md:col-span-3 mt-8">
            <div className="pr-5 text-center flex flex-col items-center">
                <Typography variant="h5" className="text-white block my-5">
                   دسترسی آسان
                </Typography>
                <FooterLink toLink="" titleLink=" پرسش‌های متداول"></FooterLink>
                <FooterLink toLink="" titleLink="   قوانین ترخینه"></FooterLink>
                <FooterLink toLink="" titleLink="     حریم خصوصی "></FooterLink>
                <div className="flex w-full md:w-40 justify-between items-center gap-2">
                <Twitter size="30"/>
                <Instagram size="30" className="text-white"/>
                <Telegram size="30" />
                </div>
            </div>
       </div>
       <div className="col-span-6 md:col-span-3 mt-8">
       <div className="text-center">
                <Typography variant="h5" className="text-white block my-5">
                   شعبه‌های ترخینه
                </Typography>
                <FooterLink toLink="" titleLink=" شعبه اکباتان "></FooterLink>
                <FooterLink toLink="" titleLink=" شعبه چالوس "></FooterLink>
                <FooterLink toLink="" titleLink=" شعبه اقدسیه "></FooterLink>
                <FooterLink toLink="" titleLink=" شعبه ونک "></FooterLink>
            </div>
       </div>
       <div className="hidden md:flex md:col-span-6">
        <Typography variant="h5" className="text-white block my-5 mt-8">
                 پیام به ترخیه
                </Typography>
        <FooterContactForm />
       </div>
    </footer>
     );
}
 
export default Footer;


const FooterLink = ({children , toLink, titleLink}) => {
    return(
        <>
        <Link to={toLink} className="text-white block mb-5 text-base">
         {titleLink}
        </Link>
        {children}
        </>
    )
}

export {FooterLink};