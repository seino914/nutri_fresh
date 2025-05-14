"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Heart, Building } from "lucide-react";
import { motion } from "@/components/motion";

const services = [
  {
    title: "学校給食サービス",
    description: "発育期の子どもたちに必要な栄養素をバランスよく摂取できるメニューを提供します。食育の観点も取り入れ、食の楽しさや大切さを伝えます。",
    icon: <School className="h-12 w-12 text-primary" />,
    features: ["年齢別栄養設計", "アレルギー対応", "地産地消の取り組み", "食育プログラム連携"]
  },
  {
    title: "福祉施設食事サービス",
    description: "高齢者や障がい者の方々の健康状態や嚥下能力に配慮した、安全で美味しい食事を提供。個別の食事制限にも柔軟に対応します。",
    icon: <Heart className="h-12 w-12 text-primary" />,
    features: ["嚥下困難対応食", "疾患別対応食", "季節感のある献立", "栄養モニタリング"]
  },
  {
    title: "企業ランチサービス",
    description: "働く人々の健康維持と生産性向上をサポートする、バラエティ豊かな企業向け食事を提供。オフィス環境に合わせた配膳形態にも対応します。",
    icon: <Building className="h-12 w-12 text-primary" />,
    features: ["日替わりメニュー", "ヘルシーオプション", "ケータリングサービス", "社員食堂運営"]
  }
];

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">さまざまな施設に対応する給食サービス</h2>
          <p className="text-muted-foreground text-lg">
            それぞれの施設やニーズに合わせた、オーダーメイドの給食サービスを提供しています。
            栄養バランス、安全性、美味しさを兼ね備えた食事で、皆様の健康をサポートします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;