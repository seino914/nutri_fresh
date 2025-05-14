"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "@/components/motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            栄養バランスに優れた
            <span className="text-primary block">給食サービス</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            学校、福祉施設、企業向けに、健康と満足を両立した食事を提供します。一人ひとりに合わせた栄養管理と、安全・安心の品質でサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              無料相談はこちら
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              サービス詳細
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                  <Image 
                    src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`} 
                    alt="Client" 
                    width={40} 
                    height={40}
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="font-medium">信頼のサービス</div>
              <div className="text-sm text-muted-foreground">100社以上の導入実績</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg"
              alt="Kids enjoying nutritious meal at school cafeteria"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold">栄養管理</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              専属の栄養士が、年齢や体格に合わせた栄養バランスを設計します。
            </p>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold">安全基準</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              国内厳格基準をクリアした食材のみを使用し、安心を提供します。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;