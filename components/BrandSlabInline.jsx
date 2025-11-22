"use client";
import React from "react";
import { default as BrandFromLayout } from "./_BrandSlabExport"; // fallback name if you split it
import { } from "./ServiceLayout"; // if BrandSlab is exported default, use this line instead

// If your BrandSlab is not exported from ServiceLayout, copy the BrandSlab JSX
// into this file and export it as default.
export default function BrandSlab() {
  // If BrandSlab is exported from ServiceLayout, just re-export that component:
  return <BrandFromLayout />;
}
