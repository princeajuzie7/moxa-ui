/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { HeroText } from "@/components/hero";
import { Input } from "@workspace/ui/components/input";
import {
  ArrowUpRight,
  Github,
  Command,
  Sparkles,
  Zap,
  Menu,
} from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { ThemeToggle } from "@/components/theme/theme-toggle"
const MOXA_TEXT = "MOXA"

export default function Home() {
  const [email, setEmail] = useState("")
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const ref = useRef<HTMLDivElement>(null)

  const springConfig = { damping: 30, stiffness: 200 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)



  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 backdrop-blur-sm bg-background/50">
        <Link href="/" className="text-xl font-medium relative group">
          <span className="relative z-10">moxa</span>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["Documentation", "Components", "Examples", ""].map((item, i) => (
            <Link
              key={i}
              href="#"
              className="relative group text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="relative z-10 flex items-center gap-1">
                {item} {item === "" && <Github className="w-4 h-4" />}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-black/95 backdrop-blur-xl border-neutral-800"
            >
              <nav className="flex flex-col space-y-6 mt-8">
                {["Documentation", "Components", "Examples", "GitHub"].map(
                  (item, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="text-lg text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      {item}{" "}
                      {item === "GitHub" && <Github className="w-5 h-5" />}
                    </Link>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <main
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        ref={ref}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-50 md:opacity-100"
          style={{
            background:
              "radial-gradient(600px at 0 0, rgba(236, 72, 153, 0.15), transparent)",
            transform: "translate3d(0, 0, 0)",
            x: springX,
            y: springY,
          }}
        />

        <div className="relative mt-5 text-center z-10 max-w-6xl mx-auto">
          {/* Open Source Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Open Source UI Components for React Native
          </motion.div>

          {/* Main Content Section */}
          <div className="mt-8 space-y-8 md:space-y-12">
            {/* Animated MOXA text */}
            <div className="relative mx-auto perspective">
              <div className="flex items-center justify-center">
                {MOXA_TEXT.split("").map((letter, index) => (
                  <motion.div key={index} className="relative">
                    <span className="text-[20vw] md:text-[15vw] lg:text-[190px] font-bold tracking-tighter leading-none text-white relative z-10 block">
                      {letter}
                    </span>
                  </motion.div>
                ))}
              </div>
                {/* <HeroText /> */}
            </div>

            {/* Description and Waitlist */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto px-4">
                Beautiful, fast and modern React Native components. Built with
                performance and customization in mind.
              </h2>

              {/* Feature Cards */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 px-4 justify-center">
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-neutral-900/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/5 flex items-center gap-2">
                    <Command className="w-4 h-4 text-fuchsia-500" />
                    <span className="text-sm">Type Safe</span>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-neutral-900/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/5 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Native Performance</span>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-neutral-900/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-500" />
                    <span className="text-sm">Customizable</span>
                  </div>
                </motion.div>
              </div>

              {/* Waitlist Form */}
              <div className="max-w-md mx-auto px-4 mt-12">
                <div className="flex gap-2 p-1 rounded-lg bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-neutral-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button className="bg-white text-black hover:bg-white/90 px-6">
                    Join Waitlist
                  </Button>
                </div>
              </div>

              {/* Documentation Links */}
              <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap mt-8">
                <Button
                  variant="link"
                  className="text-white hover:text-white/90 text-base h-auto p-0 hover:no-underline group relative"
                >
                  <span className="relative z-10 px-4 md:px-6 py-2">
                    Documentation
                    <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-violet-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform" />
                </Button>
                <Button
                  variant="link"
                  className="text-white hover:text-white/90 text-base h-auto p-0 hover:no-underline flex items-center gap-2 group relative"
                >
                  <span className="relative z-10 px-4 md:px-6 py-2">
                    Get Started
                    <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="absolute inset-0 bg-white/5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Code Preview Hint */}
        <motion.div
          className="fixed bottom-6 right-6 px-6 py-3 rounded-xl bg-neutral-900/50 backdrop-blur-sm text-sm text-neutral-400 flex items-center gap-3 border border-white/5 hidden md:flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse" />
          <span>React Native Components</span>
        </motion.div>
      </main>
    </div>
  );
}

