"use client";

import { motion } from "@/components/motion";

const steps = [
  {
    number: "01",
    title: "ヒアリング",
    description: "お客様のご要望、施設の特性、利用者の年齢層や特性などを詳しくお伺いします。この段階で、食事制限やアレルギー情報なども確認します。"
  },
  {
    number: "02",
    title: "プラン設計",
    description: "ヒアリング内容に基づき、最適な食事プランを設計します。栄養バランス、コスト、提供方法など、多角的に検討します。"
  },
  {
    number: "03",
    title: "試食・調整",
    description: "ご提案したメニューの試食会を実施し、ご意見をいただきます。必要に応じて調整を行い、より満足度の高いメニューに仕上げます。"
  },
  {
    number: "04",
    title: "サービス開始",
    description: "本格的なサービス提供を開始します。定期的なフィードバックを通じて、継続的に品質とサービスの向上に努めます。"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">導入の流れ</h2>
          <p className="text-muted-foreground text-lg">
            お客様に最適なサービスを提供するため、以下のステップで丁寧に進めていきます。
            ニーズに合わせたカスタマイズとスムーズな導入をお約束します。
          </p>
        </div>

        <div className="relative">
          {/* Connect line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <div className="bg-primary/10 text-primary w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold relative z-10">
                    {step.number}
                  </div>
                </div>
                <div className="md:w-1/2 bg-card p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;