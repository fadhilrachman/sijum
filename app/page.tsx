import Image from "next/image";
import Link from "next/link";
import {
  PlayCircle,
  Star,
  MessageSquare,
  Shield,
  Navigation,
  Volume2,
  Moon,
  Users,
  MapPin,
  Lock,
} from "lucide-react";
import Navbar from "@/components/landing-page-v2/navbar";
import Jumbotron from "@/components/landing-page-v2/jumbotron";
import About from "@/components/landing-page-v2/about";
import Program from "@/components/landing-page-v2/program/program";
import Word from "@/components/landing-page-v2/word";
import RegisterVoluenteer from "@/components/landing-page-v2/register-volounteer";
import Footer from "@/components/landing-page-v2/footer";

export default function Component() {
  return (
    <div className="min-h-screen  bg-white font-nunito ">
      <Navbar />
      <Jumbotron />
      <About />
      <Program />
      <Word />
      <RegisterVoluenteer />
      <Footer />
    </div>
  );
}
