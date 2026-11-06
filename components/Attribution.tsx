"use client";
import { useEffect } from "react";
import { inquiryAdSource } from "@/lib/whatsapp";
export default function Attribution() {
  useEffect(() => {
    inquiryAdSource();
  }, []);
  return null;
}
