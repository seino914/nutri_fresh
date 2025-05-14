"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, School, Building, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-primary">NutriFresh</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#services" 
            className="font-medium hover:text-primary transition-colors"
          >
            サービス
          </Link>
          <Link 
            href="#clients" 
            className="font-medium hover:text-primary transition-colors"
          >
            導入事例
          </Link>
          <Link 
            href="#menu" 
            className="font-medium hover:text-primary transition-colors"
          >
            メニュー
          </Link>
          <Link 
            href="#quality" 
            className="font-medium hover:text-primary transition-colors"
          >
            品質
          </Link>
          <Link 
            href="#contact" 
            className="font-medium hover:text-primary transition-colors"
          >
            お問い合わせ
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button>
            お問い合わせ
          </Button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 md:hidden pt-20",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
          <div className="flex items-center gap-3 p-4 rounded-lg border border-muted hover:bg-muted/50 transition-colors">
            <School className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">学校給食</h3>
              <p className="text-sm text-muted-foreground">栄養バランスの取れた食事</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 rounded-lg border border-muted hover:bg-muted/50 transition-colors">
            <Heart className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">福祉施設</h3>
              <p className="text-sm text-muted-foreground">個別ニーズに対応した食事</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 rounded-lg border border-muted hover:bg-muted/50 transition-colors">
            <Building className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">企業ランチ</h3>
              <p className="text-sm text-muted-foreground">オフィスでの美味しい食事</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <Link 
              href="#services" 
              className="block font-medium hover:text-primary transition-colors py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              サービス
            </Link>
            <Link 
              href="#clients" 
              className="block font-medium hover:text-primary transition-colors py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              導入事例
            </Link>
            <Link 
              href="#menu" 
              className="block font-medium hover:text-primary transition-colors py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              メニュー
            </Link>
            <Link 
              href="#quality" 
              className="block font-medium hover:text-primary transition-colors py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              品質
            </Link>
            <Link 
              href="#contact" 
              className="block font-medium hover:text-primary transition-colors py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>

          <Button className="mt-6 w-full" onClick={() => setIsMenuOpen(false)}>
            無料相談はこちら
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;