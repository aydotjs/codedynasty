"use client";

import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { X } from "lucide-react";

import navigation from "@/config/navigation.json";
import siteConfig from "@/config/siteConfig.json";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SocialShare1 } from "../tools/Social";
import Logo from "../elements/logo/Logo";

type MenuItem = {
  id: number;
  name: string;
  path: string;
  hasChildren?: boolean;
  children?: MenuItem[];
};

const SideNavModal = () => {
  const SideMenuData = navigation.header as MenuItem[];
  const { footer_info, social } = siteConfig;

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <button className="xl:hidden p-2 rounded-lg hover:bg-theme/10 transition-colors">
          <FaBars className="w-6 h-6" />
        </button>
      </DrawerTrigger>

      <DrawerContent className="h-full border-none bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <DrawerTitle className="hidden">Side Navigation</DrawerTitle>
        <DrawerDescription className="hidden">
          Site navigation drawer
        </DrawerDescription>

        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-theme rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-10 animate-blob animation-delay-4000" />
        </div>

        <div className="relative w-full h-full px-6 sm:px-8 pt-6 pb-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
            <Logo light />
            <DrawerClose asChild>
              <Button
                size="icon"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
              >
                <X className="w-5 h-5 text-white" />
              </Button>
            </DrawerClose>
          </div>

          <ScrollArea className="h-[calc(100vh-200px)] pr-4">
            {/* Navigation */}
            <nav className="space-y-2">
              {SideMenuData.map((item) => (
                <div key={item.id}>
                  {item.hasChildren ? (
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        value={`item-${item.id}`}
                        className="border-none"
                      >
                        <AccordionTrigger className="text-lg font-semibold text-white hover:text-theme px-4 py-3 rounded-lg hover:bg-white/5">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 pt-2 space-y-1">
                          {item.children?.map((child) => (
                            <DrawerClose asChild key={child.id}>
                              <Link
                                href={child.path}
                                className="block text-base text-white/70 hover:text-theme px-4 py-2 rounded-lg hover:bg-white/5"
                              >
                                {child.name}
                              </Link>
                            </DrawerClose>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <DrawerClose asChild>
                      <Link
                        href={item.path}
                        className="block text-lg font-semibold text-white hover:text-theme px-4 py-3 rounded-lg hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    </DrawerClose>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-6">
              {/* Contact */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                  Contact
                </p>

                <div className="space-y-2">
                  {footer_info?.mobile && (
                    <a
                      href={`tel:${footer_info.mobile}`}
                      className="block text-sm text-white/80 hover:text-theme"
                    >
                      {footer_info.mobile}
                    </a>
                  )}

                  {footer_info?.email && (
                    <a
                      href={`mailto:${footer_info.email}`}
                      className="block text-sm text-white/80 hover:text-theme"
                    >
                      {footer_info.email}
                    </a>
                  )}

                  {footer_info?.address && (
                    <a
                      href={footer_info.address.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-white/80 hover:text-theme"
                    >
                      {footer_info.address.name}
                    </a>
                  )}
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {social.map((item, i) => (
                    <span
                      key={`social-${i}`}
                      className="text-white/80 hover:text-theme transition-colors"
                    >
                      {SocialShare1(item)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </DrawerContent>
    </Drawer>
  );
};

export default SideNavModal;
