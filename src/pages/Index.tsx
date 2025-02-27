
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { X, Phone } from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState<string>("ru");
  const [wholesaleOpen, setWholesaleOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const translations = {
    ru: {
      delivery_info: "Мы доставляем в: г. Ставрополь, г. Михайловск, с. Надежда, с. Верхнерусское.",
      delivery_cost: "Бесплатная доставка при заказе от 1500 ₽. Стоимость доставки до 1500 ₽ — 200 ₽.",
      delivery_time: "Доставка осуществляется (с 16:00 до 20:00) во вторник и в пятницу",
      pelmeni: "Пельмени",
      vareniki: "Вареники",
      kotlety: "Котлеты",
      tefteli: "Тефтели",
      lulya: "Люля-кебаб",
      other: "Другие блюда",
      bliny: "Блины",
      wholesale: "Оптовым покупателям",
      order: "Заказать",
      price: "Цена:",
      ingredients: "Состав:",
      contact_phone: "+7 (928) 307-63-13",
      welcome_wholesale: "Рады приветствовать вас! С нами работают более 1500 магазинов Ставрополя и его окрестностей. Присоединяйтесь к нам, мы заботимся о качестве наших полуфабрикатов и несем ответственность за производимую продукцию.",
      faq: "Часто задаваемые вопросы:",
      faq_delivery: "Вы доставляете полуфабрикаты в магазины?",
      faq_delivery_answer: "Доставка осуществляется в магазины г. Ставрополя, г. Михайловска и другие близлежащие населенные пункты.",
      faq_pickup: "Возможен самовывоз с производства?",
      faq_pickup_answer: "Самовывоз с производства осуществляется в рабочие дни пн.-пт. с 8:00 до 17:00.",
      faq_payment: "Как осуществляется оплата?",
      faq_payment_answer: "Возможна оплата перечислением через банк или наличными.",
      faq_advertising: "Вы предоставляете рекламные материалы?",
      faq_advertising_answer: "Возможно размещение брендированной рекламы в магазине.",
      faq_equipment: "Возможно размещение холодильного оборудования?",
      faq_equipment_answer: "Холодильное оборудование не предоставляется.",
      work_hours: "Время работы:",
      work_hours_weekdays: "Пн.-Пт.: 8:00-17:00",
      work_hours_weekend: "Сб., Вс.: выходной",
      address_title: "Адрес:",
      address: "Ставропольский край, Шпаковский муниципальный округ, с. Надежда, ул. Ставропольская 77",
      email: "lepnoff2020@yandex.ru"
    },
    en: {
      delivery_info: "We deliver to: Stavropol, Mikhailovsk, Nadezhda village, Verkhnerusskoe village.",
      delivery_cost: "Free delivery for orders over 1500 ₽. Delivery cost for orders under 1500 ₽ — 200 ₽.",
      delivery_time: "Delivery is available (from 4:00 PM to 8:00 PM) on Tuesday and Friday",
      pelmeni: "Dumplings",
      vareniki: "Vareniki",
      kotlety: "Cutlets",
      tefteli: "Meatballs",
      lulya: "Lyulya Kebab",
      other: "Other Dishes",
      bliny: "Pancakes",
      wholesale: "Wholesale Buyers",
      order: "Order",
      price: "Price:",
      ingredients: "Ingredients:",
      contact_phone: "+7 (928) 307-63-13",
      welcome_wholesale: "Welcome! We work with more than 1500 stores in Stavropol and its surroundings. Join us, we care about the quality of our products and are responsible for the products we produce.",
      faq: "Frequently Asked Questions:",
      faq_delivery: "Do you deliver ready-made foods to stores?",
      faq_delivery_answer: "Delivery is carried out to stores in Stavropol, Mikhailovsk and other nearby settlements.",
      faq_pickup: "Is it possible to pick up from production?",
      faq_pickup_answer: "Pickup from production is carried out on working days Mon-Fri from 8:00 AM to 5:00 PM.",
      faq_payment: "How is payment made?",
      faq_payment_answer: "Payment is possible by bank transfer or cash.",
      faq_advertising: "Do you provide advertising materials?",
      faq_advertising_answer: "It is possible to place branded advertising in the store.",
      faq_equipment: "Is it possible to place refrigeration equipment?",
      faq_equipment_answer: "Refrigeration equipment is not provided.",
      work_hours: "Working Hours:",
      work_hours_weekdays: "Mon-Fri: 8:00 AM - 5:00 PM",
      work_hours_weekend: "Sat, Sun: day off",
      address_title: "Address:",
      address: "Stavropol Territory, Shpakovsky Municipal District, Nadezhda Village, Stavropolskaya St. 77",
      email: "lepnoff2020@yandex.ru"
    },
    de: {
      delivery_info: "Wir liefern nach: Stavropol, Mikhailovsk, Dorf Nadezhda, Dorf Verkhnerusskoe.",
      delivery_cost: "Kostenlose Lieferung bei Bestellungen über 1500 ₽. Lieferkosten für Bestellungen unter 1500 ₽ — 200 ₽.",
      delivery_time: "Die Lieferung erfolgt (von 16:00 bis 20:00 Uhr) am Dienstag und Freitag",
      pelmeni: "Knödel",
      vareniki: "Warzeniki",
      kotlety: "Koteletts",
      tefteli: "Fleischbällchen",
      lulya: "Ljulya Kebab",
      other: "Andere Gerichte",
      bliny: "Pfannkuchen",
      wholesale: "Großhandelskunden",
      order: "Bestellen",
      price: "Preis:",
      ingredients: "Zutaten:",
      contact_phone: "+7 (928) 307-63-13",
      welcome_wholesale: "Herzlich willkommen! Wir arbeiten mit mehr als 1500 Geschäften in Stavropol und Umgebung zusammen. Schließen Sie sich uns an, wir legen Wert auf die Qualität unserer Produkte und sind für die von uns hergestellten Produkte verantwortlich.",
      faq: "Häufig gestellte Fragen:",
      faq_delivery: "Liefern Sie Fertiggerichte an Geschäfte?",
      faq_delivery_answer: "Die Lieferung erfolgt an Geschäfte in Stavropol, Mikhailovsk und anderen nahegelegenen Siedlungen.",
      faq_pickup: "Ist eine Abholung ab Produktion möglich?",
      faq_pickup_answer: "Die Abholung ab Produktion erfolgt an Werktagen Mo-Fr von l8:00 bis 17:00 Uhr.",
      faq_payment: "Wie erfolgt die Bezahlung?",
      faq_payment_answer: "Die Zahlung ist per Überweisung oder in bar möglich.",
      faq_advertising: "Stellen Sie Werbematerialien zur Verfügung?",
      faq_advertising_answer: "Es ist möglich, Markenwerbung im Geschäft zu platzieren.",
      faq_equipment: "Ist es möglich, Kühlgeräte aufzustellen?",
      faq_equipment_answer: "Kühlgeräte werden nicht zur Verfügung gestellt.",
      work_hours: "Öffnungszeiten:",
      work_hours_weekdays: "Mo-Fr: 8:00-17:00 Uhr",
      work_hours_weekend: "Sa, So: Ruhetag",
      address_title: "Adresse:",
      address: "Gebiet Stavropol, Bezirk Shpakovsky, Dorf Nadezhda, Straße Stavropolskaya 77",
      email: "lepnoff2020@yandex.ru"
    },
    uz: {
      delivery_info: "Biz quyidagi joylarga yetkazib beramiz: Stavropol, Mikhailovsk, Nadezhda qishlog'i, Verkhnerusskoe qishlog'i.",
      delivery_cost: "1500 ₽ dan yuqori buyurtmalar uchun bepul yetkazib berish. 1500 ₽ gacha buyurtmalar uchun yetkazib berish narxi — 200 ₽.",
      delivery_time: "Yetkazib berish (soat 16:00 dan 20:00 gacha) seshanba va juma kunlari amalga oshiriladi",
      pelmeni: "Pelmen",
      vareniki: "Vareniki",
      kotlety: "Kotletlar",
      tefteli: "Go'shtli sharlar",
      lulya: "Lyulya Kebab",
      other: "Boshqa taomlar",
      bliny: "Blinlar",
      wholesale: "Ulgurji xaridorlar",
      order: "Buyurtma berish",
      price: "Narx:",
      ingredients: "Tarkibi:",
      contact_phone: "+7 (928) 307-63-13",
      welcome_wholesale: "Xush kelibsiz! Biz Stavropol va uning atrofidagi 1500 dan ortiq do'konlar bilan ishlaymiz. Bizga qo'shiling, biz mahsulotlarimiz sifatiga g'amxo'rlik qilamiz va ishlab chiqargan mahsulotlarimiz uchun javobgarmiz.",
      faq: "Ko'p so'raladigan savollar:",
      faq_delivery: "Siz do'konlarga tayyor mahsulotlarni yetkazib berasizmi?",
      faq_delivery_answer: "Yetkazib berish Stavropol, Mikhailovsk va boshqa yaqin joylashuv nuqtalaridagi do'konlarga amalga oshiriladi.",
      faq_pickup: "Ishlab chiqarish joyidan o'zingiz olib ketish mumkinmi?",
      faq_pickup_answer: "Ishlab chiqarish joyidan olib ketish dush-juma kunlari soat 8:00 dan 17:00 gacha amalga oshiriladi.",
      faq_payment: "To'lov qanday amalga oshiriladi?",
      faq_payment_answer: "To'lov bank orqali yoki naqd pul orqali amalga oshirilishi mumkin.",
      faq_advertising: "Siz reklama materiallari taqdim etasizmi?",
      faq_advertising_answer: "Do'konda brend reklamasini joylashtirish mumkin.",
      faq_equipment: "Sovutish uskunasini joylashtirish mumkinmi?",
      faq_equipment_answer: "Sovutish uskunasi taqdim etilmaydi.",
      work_hours: "Ish vaqti:",
      work_hours_weekdays: "Dush-Juma: 8:00-17:00",
      work_hours_weekend: "Shanba, Yakshanba: dam olish kuni",
      address_title: "Manzil:",
      address: "Stavropol o'lkasi, Shpakovsky tumani, Nadezhda qishlog'i, Stavropolskaya ko'chasi 77",
      email: "lepnoff2020@yandex.ru"
    }
  };

  const productCategories = {
    pelmeni: [
      {
        id: 1,
        name: {
          ru: "Пельмени из мяса птицы (1 кг | 0,5 кг)",
          en: "Poultry Meat Dumplings (1 kg | 0.5 kg)",
          de: "Fleischknödel aus Geflügelfleisch (1 kg | 0,5 kg)",
          uz: "Parranda go'shtidan pelmenlar (1 kg | 0,5 kg)"
        },
        ingredients: {
          ru: "Состав: мясо птицы (курица), мука пшеничная, яичный порошок, вода питьевая, соль, лук репчатый, перец черный молотый.",
          en: "Ingredients: poultry meat (chicken), wheat flour, egg powder, drinking water, salt, onion, ground black pepper.",
          de: "Zutaten: Geflügelfleisch (Huhn), Weizenmehl, Eipulver, Trinkwasser, Salz, Zwiebel, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: parranda go'shti (tovuq), bug'doy uni, tuxum kukuni, ichimlik suvi, tuz, piyoz, qora garmdori."
        },
        price: "430 ₽ | 220 ₽",
        image: "/4k.png"
      },
      {
        id: 2,
        name: {
          ru: "Пельмени из говядины и свинины (0,5 кг)",
          en: "Beef and Pork Dumplings (0.5 kg)",
          de: "Knödel aus Rind- und Schweinefleisch (0,5 kg)",
          uz: "Mol go'shti va cho'chqa go'shtidan pelmenlar (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: говядина, свинина, мука пшеничная, яичный порошок, вода питьевая, соль, лук репчатый, перец черный молотый.",
          en: "Ingredients: beef, pork, wheat flour, egg powder, drinking water, salt, onion, ground black pepper.",
          de: "Zutaten: Rindfleisch, Schweinefleisch, Weizenmehl, Eipulver, Trinkwasser, Salz, Zwiebel, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: mol go'shti, cho'chqa go'shti, bug'doy uni, tuxum kukuni, ichimlik suvi, tuz, piyoz, qora garmdori."
        },
        price: "215 ₽",
        image: "/4k.png"
      },
      {
        id: 3,
        name: {
          ru: "Пельмени из свинины (0,5 кг)",
          en: "Pork Dumplings (0.5 kg)",
          de: "Knödel aus Schweinefleisch (0,5 kg)",
          uz: "Cho'chqa go'shtidan pelmenlar (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: свинина, мука пшеничная, яичный порошок, вода питьевая, соль, лук репчатый, перец черный молотый.",
          en: "Ingredients: pork, wheat flour, egg powder, drinking water, salt, onion, ground black pepper.",
          de: "Zutaten: Schweinefleisch, Weizenmehl, Eipulver, Trinkwasser, Salz, Zwiebel, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: cho'chqa go'shti, bug'doy uni, tuxum kukuni, ichimlik suvi, tuz, piyoz, qora garmdori."
        },
        price: "205 ₽",
        image: "/4k.png"
      },
      {
        id: 4,
        name: {
          ru: "Пельмени «Надеждинские» из говядины и свинины (1 кг)",
          en: "\"Nadezhdinsky\" Beef and Pork Dumplings (1 kg)",
          de: "\"Nadezhdinsky\" Knödel aus Rind- und Schweinefleisch (1 kg)",
          uz: "\"Nadezhdinsky\" mol go'shti va cho'chqa go'shtidan pelmenlar (1 kg)"
        },
        ingredients: {
          ru: "Состав: говядина, свинина, мука пшеничная, яичный порошок, вода питьевая, соль, лук репчатый, перец черный молотый, масло подсолнечное, фосфат, глутамат.",
          en: "Ingredients: beef, pork, wheat flour, egg powder, drinking water, salt, onion, ground black pepper, sunflower oil, phosphate, glutamate.",
          de: "Zutaten: Rindfleisch, Schweinefleisch, Weizenmehl, Eipulver, Trinkwasser, Salz, Zwiebel, gemahlener schwarzer Pfeffer, Sonnenblumenöl, Phosphat, Glutamat.",
          uz: "Tarkibi: mol go'shti, cho'chqa go'shti, bug'doy uni, tuxum kukuni, ichimlik suvi, tuz, piyoz, qora garmdori, kungaboqar yog'i, fosfat, glutamat."
        },
        price: "410 ₽",
        image: "/8k.png"
      },
      {
        id: 5,
        name: {
          ru: "Пельмени «Надеждинские» из свинины (1 кг)",
          en: "\"Nadezhdinsky\" Pork Dumplings (1 kg)",
          de: "\"Nadezhdinsky\" Knödel aus Schweinefleisch (1 kg)",
          uz: "\"Nadezhdinsky\" cho'chqa go'shtidan pelmenlar (1 kg)"
        },
        ingredients: {
          ru: "Состав: свинина, мука пшеничная, яичный порошок, вода питьевая, соль, специи.",
          en: "Ingredients: pork, wheat flour, egg powder, drinking water, salt, spices.",
          de: "Zutaten: Schweinefleisch, Weizenmehl, Eipulver, Trinkwasser, Salz, Gewürze.",
          uz: "Tarkibi: cho'chqa go'shti, bug'doy uni, tuxum kukuni, ichimlik suvi, tuz, ziravorlar."
        },
        price: "400 ₽",
        image: "/8k.png"
      }
    ],
    vareniki: [
      {
        id: 6,
        name: {
          ru: "Вареники «Надеждинские» с творогом (1 кг)",
          en: "\"Nadezhdinsky\" Vareniki with Cottage Cheese (1 kg)",
          de: "\"Nadezhdinsky\" Warzeniki mit Quark (1 kg)",
          uz: "\"Nadezhdinsky\" tvorog bilan vareniki (1 kg)"
        },
        ingredients: {
          ru: "Состав: творог, мука пшеничная высшего сорта, вода питьевая, яичный порошок, соль поваренная пищевая.",
          en: "Ingredients: cottage cheese, premium wheat flour, drinking water, egg powder, table salt.",
          de: "Zutaten: Quark, Weizenmehl der höchsten Sorte, Trinkwasser, Eipulver, Speisesalz.",
          uz: "Tarkibi: tvorog, oliy nav bug'doy uni, ichimlik suvi, tuxum kukuni, osh tuzi."
        },
        price: "310 ₽",
        image: "/12k.png"
      },
      {
        id: 7,
        name: {
          ru: "Вареники «Надеждинские» с картофелем и грибами (1 кг)",
          en: "\"Nadezhdinsky\" Vareniki with Potatoes and Mushrooms (1 kg)",
          de: "\"Nadezhdinsky\" Warzeniki mit Kartoffeln und Pilzen (1 kg)",
          uz: "\"Nadezhdinsky\" kartoshka va qo'ziqorin bilan vareniki (1 kg)"
        },
        ingredients: {
          ru: "Состав: картофель вареный, грибы, лук репчатый, мука пшеничная высшего сорта, масло растительное (подсолнечное), вода, соль, яичный порошок.",
          en: "Ingredients: boiled potatoes, mushrooms, onion, premium wheat flour, vegetable oil (sunflower), water, salt, egg powder.",
          de: "Zutaten: gekochte Kartoffeln, Pilze, Zwiebel, Weizenmehl der höchsten Sorte, Pflanzenöl (Sonnenblume), Wasser, Salz, Eipulver.",
          uz: "Tarkibi: qaynatilgan kartoshka, qo'ziqorinlar, piyoz, oliy nav bug'doy uni, o'simlik yog'i (kungaboqar), suv, tuz, tuxum kukuni."
        },
        price: "220 ₽",
        image: "/12k.png"
      },
      {
        id: 8,
        name: {
          ru: "Вареники «Надеждинские» с картофелем (1 кг)",
          en: "\"Nadezhdinsky\" Vareniki with Potatoes (1 kg)",
          de: "\"Nadezhdinsky\" Warzeniki mit Kartoffeln (1 kg)",
          uz: "\"Nadezhdinsky\" kartoshka bilan vareniki (1 kg)"
        },
        ingredients: {
          ru: "Состав: картофель вареный, мука пшеничная высшего сорта, лук репчатый, масло растительное (подсолнечное), вода, соль, яичный порошок.",
          en: "Ingredients: boiled potatoes, premium wheat flour, onion, vegetable oil (sunflower), water, salt, egg powder.",
          de: "Zutaten: gekochte Kartoffeln, Weizenmehl der höchsten Sorte, Zwiebel, Pflanzenöl (Sonnenblume), Wasser, Salz, Eipulver.",
          uz: "Tarkibi: qaynatilgan kartoshka, oliy nav bug'doy uni, piyoz, o'simlik yog'i (kungaboqar), suv, tuz, tuxum kukuni."
        },
        price: "185 ₽",
        image: "/12k.png"
      },
      {
        id: 9,
        name: {
          ru: "Вареники «Надеждинские» с сыром (0,5 кг)",
          en: "\"Nadezhdinsky\" Vareniki with Cheese (0.5 kg)",
          de: "\"Nadezhdinsky\" Warzeniki mit Käse (0,5 kg)",
          uz: "\"Nadezhdinsky\" pishloq bilan vareniki (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: сыр, мука пшеничная высшего сорта, вода питьевая, яичный порошок, соль поваренная пищевая.",
          en: "Ingredients: cheese, premium wheat flour, drinking water, egg powder, table salt.",
          de: "Zutaten: Käse, Weizenmehl der höchsten Sorte, Trinkwasser, Eipulver, Speisesalz.",
          uz: "Tarkibi: pishloq, oliy nav bug'doy uni, ichimlik suvi, tuxum kukuni, osh tuzi."
        },
        price: "220 ₽",
        image: "/16k.png"
      },
      {
        id: 10,
        name: {
          ru: "Вареники «Надеждинские» с клубникой (0,5 кг)",
          en: "\"Nadezhdinsky\" Vareniki with Strawberry (0.5 kg)",
          de: "\"Nadezhdinsky\" Warzeniki mit Erdbeeren (0,5 kg)",
          uz: "\"Nadezhdinsky\" qulupnay bilan vareniki (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: клубника, мука пшеничная, яичный порошок, вода питьевая, соль, специи.",
          en: "Ingredients: strawberry, wheat flour, egg powder, drinking water, salt, spices.",
          de: "Zutaten: Erdbeeren, Weizenmehl, Eipulver, Trinkwasser, Salz, Gewürze.",
          uz: "Tarkibi: qulupnay, bug'doy uni, tuxum kukuni, ichimlik suvi, tuz, ziravorlar."
        },
        price: "195 ₽",
        image: "/17k.png"
      }
    ],
    kotlety: [
      {
        id: 11,
        name: {
          ru: "Котлеты «Надеждинские» из говядины и свинины (1 кг | 0,4 кг)",
          en: "\"Nadezhdinsky\" Beef and Pork Cutlets (1 kg | 0.4 kg)",
          de: "\"Nadezhdinsky\" Koteletts aus Rind- und Schweinefleisch (1 kg | 0,4 kg)",
          uz: "\"Nadezhdinsky\" mol go'shti va cho'chqa go'shtidan kotletlar (1 kg | 0,4 kg)"
        },
        ingredients: {
          ru: "Состав: говядина, свинина, картофель, лук репчатый, вода, яичный порошок, сухари. Специи: соль, перец чёрный молотый.",
          en: "Ingredients: beef, pork, potatoes, onion, water, egg powder, breadcrumbs. Spices: salt, ground black pepper.",
          de: "Zutaten: Rindfleisch, Schweinefleisch, Kartoffeln, Zwiebel, Wasser, Eipulver, Semmelbrösel. Gewürze: Salz, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: mol go'shti, cho'chqa go'shti, kartoshka, piyoz, suv, tuxum kukuni, non uvog'i. Ziravorlar: tuz, qora garmdori."
        },
        price: "490 ₽ | 220 ₽",
        image: "/2k.png"
      },
      {
        id: 12,
        name: {
          ru: "Котлеты по-Киевски «Надеждинские» из мяса птицы (0,5 кг — 4 шт)",
          en: "\"Nadezhdinsky\" Chicken Kiev (0.5 kg — 4 pcs)",
          de: "\"Nadezhdinsky\" Kiewer Hühnerschnitzel (0,5 kg — 4 Stk)",
          uz: "\"Nadezhdinsky\" Kiev uslubidagi parranda go'shtidan kotletlar (0,5 kg — 4 dona)"
        },
        ingredients: {
          ru: "Состав: филе курицы, сливочное масло, зелень свежая (укроп), вода питьевая, молоко питьевое стерилизованное, мука, яичный порошок, сухари панировочные, соль, перец черный молотый.",
          en: "Ingredients: chicken fillet, butter, fresh herbs (dill), drinking water, sterilized milk, flour, egg powder, breadcrumbs, salt, ground black pepper.",
          de: "Zutaten: Hühnerfilet, Butter, frische Kräuter (Dill), Trinkwasser, sterilisierte Milch, Mehl, Eipulver, Semmelbrösel, Salz, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: tovuq filesi, sariyog', yangi ko'katlar (ukrop), ichimlik suvi, sterilizatsiya qilingan ichimlik suti, un, tuxum kukuni, non uvog'i, tuz, qora garmdori."
        },
        price: "360 ₽",
        image: "/10k.png"
      },
      {
        id: 13,
        name: {
          ru: "Котлеты «Надеждинские» из мяса птицы (0,5 кг)",
          en: "\"Nadezhdinsky\" Poultry Cutlets (0.5 kg)",
          de: "\"Nadezhdinsky\" Geflügelkoteletts (0,5 kg)",
          uz: "\"Nadezhdinsky\" parranda go'shtidan kotletlar (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: мясо птицы (курица), крахмал, сухари панировочные, яичный порошок, вода, лук репчатый. Специи: соль, перец черный молотый.",
          en: "Ingredients: poultry meat (chicken), starch, breadcrumbs, egg powder, water, onion. Spices: salt, ground black pepper.",
          de: "Zutaten: Geflügelfleisch (Huhn), Stärke, Semmelbrösel, Eipulver, Wasser, Zwiebel. Gewürze: Salz, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: parranda go'shti (tovuq), kraxmal, non uvog'i, tuxum kukuni, suv, piyoz. Ziravorlar: tuz, qora garmdori."
        },
        price: "340 ₽",
        image: "/11k.png"
      },
      {
        id: 14,
        name: {
          ru: "Котлеты «Надеждинские» из печени (0,5 кг)",
          en: "\"Nadezhdinsky\" Liver Cutlets (0.5 kg)",
          de: "\"Nadezhdinsky\" Leberkoteletts (0,5 kg)",
          uz: "\"Nadezhdinsky\" jigardan kotletlar (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: печень свиная, сухари панировочные, морковь, вода питьевая, лук репчатый. Специи: соль, перец черный молотый.",
          en: "Ingredients: pork liver, breadcrumbs, carrots, drinking water, onion. Spices: salt, ground black pepper.",
          de: "Zutaten: Schweineleber, Semmelbrösel, Karotten, Trinkwasser, Zwiebel. Gewürze: Salz, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: cho'chqa jigari, non uvog'i, sabzi, ichimlik suvi, piyoz. Ziravorlar: tuz, qora garmdori."
        },
        price: "170 ₽",
        image: "/18k.png"
      }
    ],
    other: [
      {
        id: 15,
        name: {
          ru: "Хинкали «Надеждинские» (1 кг)",
          en: "\"Nadezhdinsky\" Khinkali (1 kg)",
          de: "\"Nadezhdinsky\" Chinkali (1 kg)",
          uz: "\"Nadezhdinsky\" xinkali (1 kg)"
        },
        ingredients: {
          ru: "Состав: говядина, свинина жирная, мука пшеничная, лук репчатый, яичный порошок, зелень свежая, вода питьевая.",
          en: "Ingredients: beef, fatty pork, wheat flour, onion, egg powder, fresh herbs, drinking water.",
          de: "Zutaten: Rindfleisch, fettes Schweinefleisch, Weizenmehl, Zwiebel, Eipulver, frische Kräuter, Trinkwasser.",
          uz: "Tarkibi: mol go'shti, yog'li cho'chqa go'shti, bug'doy uni, piyoz, tuxum kukuni, yangi ko'katlar, ichimlik suvi."
        },
        price: "450 ₽",
        image: "/3k.png"
      },
      {
        id: 16,
        name: {
          ru: "Манты «Надеждинские» (1 кг)",
          en: "\"Nadezhdinsky\" Manti (1 kg)",
          de: "\"Nadezhdinsky\" Manti (1 kg)",
          uz: "\"Nadezhdinsky\" manti (1 kg)"
        },
        ingredients: {
          ru: "Состав: мясо птицы, картофель, мука пшеничная высшего сорта, лук репчатый, яичный порошок, вода питьевая.",
          en: "Ingredients: poultry meat, potatoes, premium wheat flour, onion, egg powder, drinking water.",
          de: "Zutaten: Geflügelfleisch, Kartoffeln, Weizenmehl der höchsten Sorte, Zwiebel, Eipulver, Trinkwasser.",
          uz: "Tarkibi: parranda go'shti, kartoshka, oliy nav bug'doy uni, piyoz, tuxum kukuni, ichimlik suvi."
        },
        price: "420 ₽",
        image: "/7k.png"
      },
      {
        id: 17,
        name: {
          ru: "Голубцы «Надеждинские» (1 кг)",
          en: "\"Nadezhdinsky\" Cabbage Rolls (1 kg)",
          de: "\"Nadezhdinsky\" Kohlrouladen (1 kg)",
          uz: "\"Nadezhdinsky\" karam o'ramalari (1 kg)"
        },
        ingredients: {
          ru: "Состав: говядина, свинина, капуста, морковь, рис, вода питьевая, лук репчатый. Специи: соль, перец черный молотый.",
          en: "Ingredients: beef, pork, cabbage, carrots, rice, drinking water, onion. Spices: salt, ground black pepper.",
          de: "Zutaten: Rindfleisch, Schweinefleisch, Kohl, Karotten, Reis, Trinkwasser, Zwiebel. Gewürze: Salz, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: mol go'shti, cho'chqa go'shti, karam, sabzi, guruch, ichimlik suvi, piyoz. Ziravorlar: tuz, qora garmdori."
        },
        price: "430 ₽",
        image: "/5k.png"
      },
      {
        id: 18,
        name: {
          ru: "Долма «Надеждинская» (0,5 кг)",
          en: "\"Nadezhdinsky\" Dolma (0.5 kg)",
          de: "\"Nadezhdinsky\" Dolma (0,5 kg)",
          uz: "\"Nadezhdinsky\" do'lma (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: говядина, мясо птицы (курица), рис, вода питьевая, листья виноградные, лук репчатый, кинза, соль, перец черный молотый.",
          en: "Ingredients: beef, poultry meat (chicken), rice, drinking water, grape leaves, onion, cilantro, salt, ground black pepper.",
          de: "Zutaten: Rindfleisch, Geflügelfleisch (Huhn), Reis, Trinkwasser, Weinblätter, Zwiebel, Koriander, Salz, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: mol go'shti, parranda go'shti (tovuq), guruch, ichimlik suvi, uzum barglari, piyoz, kinza, tuz, qora garmdori."
        },
        price: "420 ₽",
        image: "/6k.png"
      },
      {
        id: 19,
        name: {
          ru: "Голубцы «Надеждинские» ленивые (0,5 кг)",
          en: "\"Nadezhdinsky\" Lazy Cabbage Rolls (0.5 kg)",
          de: "\"Nadezhdinsky\" Faule Kohlrouladen (0,5 kg)",
          uz: "\"Nadezhdinsky\" dangasa karam o'ramalari (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: говядина, свинина, капуста, морковь, рис, вода питьевая, лук репчатый. Специи: соль, перец черный молотый.",
          en: "Ingredients: beef, pork, cabbage, carrots, rice, drinking water, onion. Spices: salt, ground black pepper.",
          de: "Zutaten: Rindfleisch, Schweinefleisch, Kohl, Karotten, Reis, Trinkwasser, Zwiebel. Gewürze: Salz, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: mol go'shti, cho'chqa go'shti, karam, sabzi, guruch, ichimlik suvi, piyoz. Ziravorlar: tuz, qora garmdori."
        },
        price: "230 ₽",
        image: "/15k.png"
      },
      {
        id: 20,
        name: {
          ru: "Тефтели «Надеждинские» из мяса птицы (0,5 кг)",
          en: "\"Nadezhdinsky\" Poultry Meatballs (0.5 kg)",
          de: "\"Nadezhdinsky\" Geflügelfleischbällchen (0,5 kg)",
          uz: "\"Nadezhdinsky\" parranda go'shtidan tefteli (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: мясо птицы (курица), крупа рисовая, лук репчатый, яичный порошок, вода питьевая. Специи: соль.",
          en: "Ingredients: poultry meat (chicken), rice, onion, egg powder, drinking water. Spices: salt.",
          de: "Zutaten: Geflügelfleisch (Huhn), Reis, Zwiebel, Eipulver, Trinkwasser. Gewürze: Salz.",
          uz: "Tarkibi: parranda go'shti (tovuq), guruch, piyoz, tuxum kukuni, ichimlik suvi. Ziravorlar: tuz."
        },
        price: "295 ₽",
        image: "/13k.png"
      },
      {
        id: 21,
        name: {
          ru: "Тефтели «Надеждинские» из говядины и свинины (0,5 кг)",
          en: "\"Nadezhdinsky\" Beef and Pork Meatballs (0.5 kg)",
          de: "\"Nadezhdinsky\" Fleischbällchen aus Rind- und Schweinefleisch (0,5 kg)",
          uz: "\"Nadezhdinsky\" mol go'shti va cho'chqa go'shtidan tefteli (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: говядина, свинина, крупа рисовая, лук репчатый, яичный порошок, вода питьевая. Специи: соль.",
          en: "Ingredients: beef, pork, rice, onion, egg powder, drinking water. Spices: salt.",
          de: "Zutaten: Rindfleisch, Schweinefleisch, Reis, Zwiebel, Eipulver, Trinkwasser. Gewürze: Salz.",
          uz: "Tarkibi: mol go'shti, cho'chqa go'shti, guruch, piyoz, tuxum kukuni, ichimlik suvi. Ziravorlar: tuz."
        },
        price: "260 ₽",
        image: "/14k.png"
      },
      {
        id: 22,
        name: {
          ru: "Люля-кебаб «Надеждинские» из говядины и свинины (1 кг)",
          en: "\"Nadezhdinsky\" Beef and Pork Lyulya Kebab (1 kg)",
          de: "\"Nadezhdinsky\" Ljulya Kebab aus Rind- und Schweinefleisch (1 kg)",
          uz: "\"Nadezhdinsky\" mol go'shti va cho'chqa go'shtidan lulya-kabob (1 kg)"
        },
        ingredients: {
          ru: "Состав: говядина, свинина, петрушка, соль, лук репчатый, перец черный молотый.",
          en: "Ingredients: beef, pork, parsley, salt, onion, ground black pepper.",
          de: "Zutaten: Rindfleisch, Schweinefleisch, Petersilie, Salz, Zwiebel, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: mol go'shti, cho'chqa go'shti, petrushka, tuz, piyoz, qora garmdori."
        },
        price: "530 ₽",
        image: "/1K.png"
      },
      {
        id: 23,
        name: {
          ru: "Люля-кебаб «Надеждинские» из мяса птицы (0,5 кг)",
          en: "\"Nadezhdinsky\" Poultry Lyulya Kebab (0.5 kg)",
          de: "\"Nadezhdinsky\" Ljulya Kebab aus Geflügelfleisch (0,5 kg)",
          uz: "\"Nadezhdinsky\" parranda go'shtidan lulya-kabob (0,5 kg)"
        },
        ingredients: {
          ru: "Состав: мясо птицы (курица), лук репчатый, зелень, соль, перец черный молотый.",
          en: "Ingredients: poultry meat (chicken), onion, herbs, salt, ground black pepper.",
          de: "Zutaten: Geflügelfleisch (Huhn), Zwiebel, Kräuter, Salz, gemahlener schwarzer Pfeffer.",
          uz: "Tarkibi: parranda go'shti (tovuq), piyoz, ko'katlar, tuz, qora garmdori."
        },
        price: "365 ₽",
        image: "/9k.png"
      },
      {
        id: 24,
        name: {
          ru: "Блины «Надеждинские» с творогом (0,4 кг)",
          en: "\"Nadezhdinsky\" Pancakes with Cottage Cheese (0.4 kg)",
          de: "\"Nadezhdinsky\" Pfannkuchen mit Quark (0,4 kg)",
          uz: "\"Nadezhdinsky\" tvorog bilan blinc (0,4 kg)"
        },
        ingredients: {
          ru: "Состав: мука пшеничная высшего сорта, масло растительное (подсолнечное), яичный порошок, соль поваренная пищевая, сахар, вода питьевая, молоко питьевое стерилизованное, пекарный порошок, творог, сахар.",
          en: "Ingredients: premium wheat flour, vegetable oil (sunflower), egg powder, table salt, sugar, drinking water, sterilized milk, baking powder, cottage cheese, sugar.",
          de: "Zutaten: Weizenmehl der höchsten Sorte, Pflanzenöl (Sonnenblume), Eipulver, Speisesalz, Zucker, Trinkwasser, sterilisierte Milch, Backpulver, Quark, Zucker.",
          uz: "Tarkibi: oliy nav bug'doy uni, o'simlik yog'i (kungaboqar), tuxum kukuni, osh tuzi, shakar, ichimlik suvi, sterilizatsiya qilingan ichimlik suti, pishiriq kukuni, tvorog, shakar."
        },
        price: "160 ₽",
        image: "/19k.png"
      },
      {
        id: 25,
        name: {
          ru: "Блины «Надеждинские» с мясом (0,4 кг)",
          en: "\"Nadezhdinsky\" Pancakes with Meat (0.4 kg)",
          de: "\"Nadezhdinsky\" Pfannkuchen mit Fleisch (0,4 kg)",
          uz: "\"Nadezhdinsky\" go'sht bilan blinc (0,4 kg)"
        },
        ingredients: {
          ru: "Состав: мука пшеничная высшего сорта, масло растительное (подсолнечное), яичный порошок, соль поваренная пищевая, вода питьевая, молоко питьевое стерилизованное, пекарный порошок, говядина, свинина.",
          en: "Ingredients: premium wheat flour, vegetable oil (sunflower), egg powder, table salt, drinking water, sterilized milk, baking powder, beef, pork.",
          de: "Zutaten: Weizenmehl der höchsten Sorte, Pflanzenöl (Sonnenblume), Eipulver, Speisesalz, Trinkwasser, sterilisierte Milch, Backpulver, Rindfleisch, Schweinefleisch.",
          uz: "Tarkibi: oliy nav bug'doy uni, o'simlik yog'i (kungaboqar), tuxum kukuni, osh tuzi, ichimlik suvi, sterilizatsiya qilingan ichimlik suti, pishiriq kukuni, mol go'shti, cho'chqa go'shti."
        },
        price: "160 ₽",
        image: "/19k.png"
      }
    ]
  };

  const fadeInDownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const ProductCard = ({ product }: { product: any }) => {
    return (
      <motion.div
        variants={fadeInUpVariants}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="p-4 pb-2">
            <div className="relative w-full h-48 mb-2 overflow-hidden rounded-md bg-gray-50">
              <img 
                src={product.image} 
                alt={product.name[language]} 
                className="object-contain w-full h-full"
                loading="lazy" 
              />
            </div>
            <CardTitle className="text-lg font-medium text-center line-clamp-2 h-12">
              {product.name[language]}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow">
            <p className="text-sm text-gray-600 mb-2">
              {translations[language].ingredients} {product.ingredients[language].replace(/Состав: |Ingredients: |Zutaten: |Tarkibi: /, '')}
            </p>
            <p className="text-base font-bold text-red-500 mt-auto">
              {translations[language].price} {product.price}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button 
              className="w-full bg-red-500 hover:bg-red-600 transition-colors"
              onClick={() => window.location.href = `tel:${translations[language].contact_phone}`}
            >
              <Phone className="mr-2 h-4 w-4" />
              {translations[language].order}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInDownVariants}
          className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/Lep.png" alt="Логотип" className="h-12 md:h-16 mr-4" />
            <div className="text-gray-700 text-sm max-w-xs">
              {translations[language].delivery_info}<br />
              {translations[language].delivery_cost}
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Button 
              variant="outline" 
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
              onClick={() => window.location.href = `tel:${translations[language].contact_phone}`}
            >
              <Phone className="mr-2 h-4 w-4" />
              {translations[language].contact_phone}
            </Button>
            <span className="text-gray-600 text-xs mt-2 italic">
              {translations[language].delivery_time}
            </span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Select defaultValue="ru" onValueChange={(value) => setLanguage(value)}>
              <SelectTrigger className="w-[120px] border-red-200 focus:ring-red-300">
                <SelectValue placeholder="Русский" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ru">Русский</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="uz">O'zbekcha</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>
        
        <motion.nav 
          initial="hidden"
          animate="visible"
          variants={fadeInDownVariants}
          className="bg-red-500 py-3"
        >
          <div className="container mx-auto px-4">
            <Tabs defaultValue="pelmeni" className="w-full">
              <TabsList className="w-full h-auto flex flex-wrap justify-center bg-red-500 p-0">
                <TabsTrigger 
                  value="pelmeni" 
                  className="text-white data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-none focus:ring-0 hover:bg-red-600 transition-colors duration-200"
                >
                  {translations[language].pelmeni}
                </TabsTrigger>
                <TabsTrigger 
                  value="vareniki" 
                  className="text-white data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-none focus:ring-0 hover:bg-red-600 transition-colors duration-200"
                >
                  {translations[language].vareniki}
                </TabsTrigger>
                <TabsTrigger 
                  value="kotlety" 
                  className="text-white data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-none focus:ring-0 hover:bg-red-600 transition-colors duration-200"
                >
                  {translations[language].kotlety}
                </TabsTrigger>
                <TabsTrigger 
                  value="other" 
                  className="text-white data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-none focus:ring-0 hover:bg-red-600 transition-colors duration-200"
                >
                  {translations[language].other}
                </TabsTrigger>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-red-600 transition-colors duration-200"
                  onClick={() => setWholesaleOpen(true)}
                >
                  {translations[language].wholesale}
                </Button>
              </TabsList>
            </Tabs>
          </div>
        </motion.nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="pelmeni" className="w-full">
          <TabsContent value="pelmeni" className="mt-6">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {isClient && productCategories.pelmeni.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="vareniki" className="mt-6">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {isClient && productCategories.vareniki.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="kotlety" className="mt-6">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {isClient && productCategories.kotlety.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="other" className="mt-6">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {isClient && productCategories.other.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>

      <Dialog open={wholesaleOpen} onOpenChange={setWholesaleOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-red-500">
              {translations[language].wholesale}
            </DialogTitle>
            <DialogClose className="absolute right-4 top-4 opacity-70 hover:opacity-100 transition-opacity">
              <X className="h-4 w-4" />
            </DialogClose>
          </DialogHeader>
          
          <div className="py-4">
            <p className="mb-4">
              {translations[language].welcome_wholesale}
            </p>
            
            <h3 className="text-lg font-bold mt-6 mb-3">
              {translations[language].faq}
            </h3>
            
            <div className="space-y-3">
              <div>
                <p className="font-medium">{translations[language].faq_delivery}</p>
                <p className="text-gray-600">{translations[language].faq_delivery_answer}</p>
              </div>
              
              <div>
                <p className="font-medium">{translations[language].faq_pickup}</p>
                <p className="text-gray-600">{translations[language].faq_pickup_answer}</p>
              </div>
              
              <div>
                <p className="font-medium">{translations[language].faq_payment}</p>
                <p className="text-gray-600">{translations[language].faq_payment_answer}</p>
              </div>
              
              <div>
                <p className="font-medium">{translations[language].faq_advertising}</p>
                <p className="text-gray-600">{translations[language].faq_advertising_answer}</p>
              </div>
              
              <div>
                <p className="font-medium">{translations[language].faq_equipment}</p>
                <p className="text-gray-600">{translations[language].faq_equipment_answer}</p>
              </div>
            </div>
            
            <h3 className="text-lg font-bold mt-6 mb-3">
              {translations[language].work_hours}
            </h3>
            
            <p className="text-gray-600">
              {translations[language].work_hours_weekdays}<br />
              {translations[language].work_hours_weekend}
            </p>
            
            <h3 className="text-lg font-bold mt-6 mb-3">
              {translations[language].address_title}
            </h3>
            
            <p className="text-gray-600">
              {translations[language].address}<br />
              {translations[language].contact_phone}<br />
              Email: <a href={`mailto:${translations[language].email}`} className="text-red-500 hover:underline">
                {translations[language].email}
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
