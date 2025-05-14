"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "@/components/motion";

// Menu data
const menuCategories = [
  {
    id: "school",
    label: "学校給食",
    meals: [
      {
        title: "栄養満点の定番メニュー",
        description: "成長期に必要な栄養素をバランスよく摂取できるよう工夫されたメニューです。",
        imageUrl: "https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg",
        badges: ["タンパク質", "鉄分", "カルシウム"]
      },
      {
        title: "行事食（お祝い給食）",
        description: "季節の行事に合わせた特別メニュー。食を通じて日本の文化や習慣を学びます。",
        imageUrl: "https://images.pexels.com/photos/6287266/pexels-photo-6287266.jpeg",
        badges: ["季節感", "伝統", "バラエティ"]
      },
      {
        title: "アレルギー対応食",
        description: "アレルギーを持つ児童も安心して食べられる、代替食材を使用した特別メニュー。",
        imageUrl: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
        badges: ["アレルギーフリー", "安全", "栄養バランス"]
      }
    ]
  },
  {
    id: "welfare",
    label: "福祉施設",
    meals: [
      {
        title: "やわらか食",
        description: "咀嚼や嚥下に配慮した、柔らかく食べやすい食事です。栄養価はそのままに、食べやすさを追求しています。",
        imageUrl: "https://images.pexels.com/photos/6287297/pexels-photo-6287297.jpeg",
        badges: ["嚥下サポート", "栄養豊富", "彩り"]
      },
      {
        title: "療養食",
        description: "疾患に合わせた栄養管理を行い、回復をサポートする食事メニューです。塩分・糖分などを調整しています。",
        imageUrl: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg",
        badges: ["塩分控えめ", "糖質管理", "健康サポート"]
      },
      {
        title: "季節の行事食",
        description: "季節の食材や行事に合わせた特別メニューで、食の楽しみを提供します。",
        imageUrl: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg",
        badges: ["季節感", "彩り", "楽しさ"]
      }
    ]
  },
  {
    id: "corporate",
    label: "企業ランチ",
    meals: [
      {
        title: "バランス定食",
        description: "主食・主菜・副菜がバランス良く組み合わされた、働く人の健康をサポートする定食メニューです。",
        imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        badges: ["栄養バランス", "満足感", "エネルギー補給"]
      },
      {
        title: "ヘルシーオプション",
        description: "カロリー控えめで栄養価の高い、ヘルシー志向の方向けのメニューです。",
        imageUrl: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg",
        badges: ["低カロリー", "高タンパク", "食物繊維"]
      },
      {
        title: "特別ケータリング",
        description: "会議や特別なイベント向けの、見栄えと味にこだわったケータリングメニューです。",
        imageUrl: "https://images.pexels.com/photos/2412950/pexels-photo-2412950.jpeg",
        badges: ["高級感", "彩り", "バラエティ"]
      }
    ]
  }
];

const MenuShowcase = () => {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ニーズに合わせた多彩なメニュー</h2>
          <p className="text-muted-foreground text-lg">
            栄養バランスはもちろん、見た目や美味しさにもこだわった多彩なメニューをご用意しています。
            それぞれの施設やご要望に合わせて、最適な食事プランをご提案します。
          </p>
        </div>

        <Tabs defaultValue="school" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="school">学校給食</TabsTrigger>
            <TabsTrigger value="welfare">福祉施設</TabsTrigger>
            <TabsTrigger value="corporate">企業ランチ</TabsTrigger>
          </TabsList>
          
          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-3 gap-6">
                {category.meals.map((meal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="overflow-hidden rounded-t-xl h-64 relative">
                      <Image
                        src={meal.imageUrl}
                        alt={meal.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="bg-card p-6 rounded-b-xl shadow-sm">
                      <h3 className="text-xl font-bold mb-2">{meal.title}</h3>
                      <p className="text-muted-foreground mb-4">{meal.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {meal.badges.map((badge, i) => (
                          <Badge key={i} variant="secondary">{badge}</Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuShowcase;