"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "@/components/motion";

const testimonials = [
  {
    quote: "子どもたちが楽しみにしている給食の時間。栄養バランスが良く、アレルギー対応も完璧で安心しています。何より子どもたちが「おいしい！」と言って食べてくれることが一番の評価です。",
    name: "山田 美咲",
    position: "○○小学校 栄養教諭",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    quote: "高齢者施設での食事は難しい面がありますが、きめ細かな対応と柔軟性に助けられています。入居者の方々の状態に合わせた食事提供で、笑顔が増えました。",
    name: "佐藤 健太",
    position: "△△福祉施設 施設長",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    rating: 5
  },
  {
    quote: "社員の健康管理の一環として導入しましたが、予想以上の効果がありました。ランチタイムが楽しみという声が増え、午後の業務効率も上がっています。コスト面でも満足しています。",
    name: "鈴木 真理子",
    position: "□□株式会社 人事部長",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">お客様の声</h2>
          <p className="text-muted-foreground text-lg">
            私たちのサービスを導入いただいたお客様からいただいた声をご紹介します。
            お客様の満足と信頼が私たちの原動力です。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;