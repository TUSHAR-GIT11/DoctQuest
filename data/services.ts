
import type { LucideIcon } from "lucide-react";
import {
  HeartPulse,
  Leaf,
  Stethoscope,
} from "lucide-react";

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Preventive Care",
    description:
      "Build healthier habits with personalized care and regular health guidance.",
    icon: HeartPulse,
    color: "bg-[#e9f0e5]",
  },
  {
    number: "02",
    title: "Nutrition & Wellness",
    description:
      "Find a balanced approach to nutrition, movement and everyday wellbeing.",
    icon: Leaf,
    color: "bg-[#f3eae1]",
  },
  {
    number: "03",
    title: "Expert Consultation",
    description:
      "Connect with healthcare professionals to discuss your health goals.",
    icon: Stethoscope,
    color: "bg-[#eeebf1]",
  },
];
