"use client";
import React from "react";
import Accordion from "./Accordian";

import { motion } from "framer-motion";
import { onceTrue, slideInFromBottom } from "../utils/motion";

const faqs = [
  {
    title: "Co to jest wycena nieruchomości?",
    answer: "Wycena nieruchomości to profesjonalny proces określania wartości rynkowej nieruchomości, przeprowadzany przez licencjonowanego rzeczoznawcę majątkowego. Obejmuje analizę czynników takich jak lokalizacja, stan techniczny, standard wykończenia, prawne aspekty własności oraz porównanie z podobnymi obiektami na rynku. Wycena jest kluczowa przy transakcjach kupna-sprzedaży, kredytach hipotecznych, podziałach majątku, czy wycenie dla celów ubezpieczeniowych i podatkowych.",
  },
  {
    title: "Jak wygląda wycena nieruchomości przez biegłego sądowego?",
    answer: "Wycena nieruchomości przez biegłego sądowego to proces obejmujący szczegółową analizę i ocenę wartości nieruchomości dla celów sądowych. Biegły analizuje dokumentację, przeprowadza wizję lokalną, bada stan techniczny i prawny obiektu oraz porównuje go z podobnymi nieruchomościami na rynku. Na podstawie zebranych danych i zastosowania odpowiednich metod wyceny, biegły sporządza raport wyceny, który może być wykorzystany jako dowód w procesie sądowym lub w innych procedurach prawnych.",
  },
  {
    title: "Jak długo trwa wycena nieruchomosci?",
    answer: "Czas trwania wyceny nieruchomości zależy od wielu czynników, takich jak rodzaj i lokalizacja nieruchomości, dostępność dokumentacji oraz zakres potrzebnych analiz. Zwykle proces ten może zająć od kilku dni do nawet kilku tygodni. Dla prostych wycen, w przypadku której wszystkie niezbędne informacje są szybko dostępne, może to być kwestia kilku dni roboczych. Natomiast bardziej skomplikowane przypadki, wymagające szczegółowych analiz rynkowych lub dodatkowych ekspertyz, mogą przedłużyć czas potrzebny na dokładne oszacowanie wartości nieruchomości.",
  },
  {
    title: "Kiedy wycena nieruchomosci do zachowku?",
    answer: "Wycena nieruchomości do celów zachowku jest potrzebna, gdy ustala się wartość spadku, aby dokładnie obliczyć należną część dla spadkobierców. Proces ten powinien rozpocząć się możliwie szybko po otwarciu spadku, aby wszelkie roszczenia i podziały mogły być przeprowadzone na podstawie aktualnych wartości rynkowych nieruchomości wchodzących w skład spadku. Warto zlecić wycenę profesjonalnemu rzeczoznawcy majątkowemu, by zapewnić obiektywność i precyzję w ocenie.",
  },
  {
    title: "Wycena nieruchomości obciążonej hipoteką?",
    answer: "Wycena nieruchomości obciążonej hipoteką uwzględnia obciążenie jako jeden z elementów wpływających na wartość rynkową nieruchomości. Rzeczoznawca ocenia wartość nieruchomości z uwzględnieniem wszystkich czynników, w tym hipoteki, aby określić rzeczywistą wartość nieruchomości na otwartym rynku. Hipoteka może wpływać na wartość nieruchomości, szczególnie jeśli jest ona przedmiotem sprzedaży lub negocjacji.",
  },
  {
    title: "Wycena nieruchomości obciążonej służebnością?",
    answer: "Wycena nieruchomości obciążonej służebnością musi uwzględnić ograniczenia użytkowania wynikające z służebności. Służebność może wpływać na wartość nieruchomości, zmniejszając jej atrakcyjność na rynku. Rzeczoznawca bierze pod uwagę rodzaj służebności, jej trwałość oraz wpływ na możliwości wykorzystania nieruchomości. Ostateczna wartość będzie odzwierciedleniem tych czynników, dostosowując cenę do specyficznych warunków i ograniczeń nieruchomości.",
  },
  {
    title: "Wycena nieruchomości a operat szacunkowy?",
    answer: "Wycena nieruchomości i operat szacunkowy to terminy używane w procesie oceny wartości nieruchomości. Wycena jest ogólnym terminem określającym szacowanie wartości, natomiast operat szacunkowy to formalny dokument sporządzony przez rzeczoznawcę majątkowego, który zawiera wyniki tej wyceny. Operat szacunkowy obejmuje analizę nieruchomości, rynku, stosowanych metod wyceny oraz ostateczną ocenę wartości, będąc oficjalnym dowodem wartości nieruchomości dla banków, sądów czy innych instytucji.",
  },
  {
    title: "Wycena nieruchomości a urząd skarbowy?",
    answer: "Urząd Skarbowy opiera się na cenie nieruchomości z aktu notarialnego, porównując ją do średnich cen rynkowych w okolicy. Nie mając bezpośredniego wglądu w stan faktyczny nieruchomości, ważne jest przedstawienie urzędowi dokładnej dokumentacji wyceny, która odzwierciedla rzeczywistą wartość nieruchomości, aby zapewnić adekwatne potraktowanie podatkowe.ar",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="py-12 px-6 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <button className="font-semibold uppercase mx-auto mb-5 text-center px-7 py-3 bg-main rounded-md inline-block text-white">
          FAQs
        </button>
        {faqs.map((faq, index) => (
          <motion.div
            variants={slideInFromBottom(index / 6, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="w-full flex items-center justify-center"
            key={index}
          >
            <Accordion title={faq.title} answer={faq.answer} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
