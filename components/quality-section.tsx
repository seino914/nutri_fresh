"use client";

import { Check, Shield, Award, FileCheck } from "lucide-react";
import { motion } from "@/components/motion";
import Image from "next/image";

const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "徹底した衛生管理",
    description: "HACCPに基づく衛生管理を徹底し、安全な食事提供を最優先しています。定期的な検査と記録で品質を担保します。"
  },
  {
    icon: <Check className="h-10 w-10 text-primary" />,
    title: "安全な食材選定",
    description: "原材料は厳選された国内産を中心に使用。放射性物質検査、残留農薬検査などを実施し、安全性を確認しています。"
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "資格者による管理",
    description: "管理栄養士、栄養士、調理師などの資格保有者が食事の計画から調理まで責任を持って管理しています。"
  },
  {
    icon: <FileCheck className="h-10 w-10 text-primary" />,
    title: "各種認証取得",
    description: "ISO 22000、ISO 9001などの国際規格を取得。第三者機関による定期的な審査で品質を保証しています。"
  }
];

const QualitySection = () => {
  return (
    <section id="quality" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">安全・安心への取り組み</h2>
            <p className="text-lg text-muted-foreground mb-12">
              お客様に安心して食事を楽しんでいただくため、私たちは食の安全と品質に妥協しません。
              原材料の選定から調理・配送まで、すべての工程で厳格な品質管理を行っています。
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-sm"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
                alt="Professional chef preparing meals in kitchen"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -left-12 top-1/4 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">品質検査実施</h4>
              <p className="text-sm text-muted-foreground">
                毎日の細菌検査と定期的な第三者機関による品質検査を実施しています。
              </p>
            </div>
            
            <div className="absolute -right-12 bottom-1/4 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">専用調理施設</h4>
              <p className="text-sm text-muted-foreground">
                最新の設備を備えた専用調理施設で、衛生的かつ効率的に調理しています。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;