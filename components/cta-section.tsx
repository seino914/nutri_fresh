"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            給食サービスに関するご相談はお気軽に
          </h2>
          <p className="text-lg opacity-90 mb-10">
            お客様のニーズに合わせた最適な給食プランをご提案します。
            無料相談・お見積もりを随時受け付けておりますので、まずはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact" className="text-lg px-8">
                無料相談はこちら
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-lg px-8">
              <Link href="#services">
                サービス詳細を見る
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;