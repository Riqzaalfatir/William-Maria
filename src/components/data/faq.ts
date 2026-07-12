export type FAQIsi = {
  pertanyaan: string;
  jawaban: string[];
};

export type FAQSection = {
  judul: string;
  items: FAQIsi[];
};

export const faqData: FAQSection[] = [
  {
    judul: "ATTENDANCE & GUESTS",
    items: [
      {
        pertanyaan: "Can I bring a plus one?",
        jawaban: [
          "We are keeping our celebration intimate and can only accommodate the guests specifically named on your invitation. We appreciate your understanding!",
        ],
      },
      {
        pertanyaan: "What is the dress code?",
        jawaban: [
          "Holy Matrimony (Garden Ceremony)\nFor our Holy Matrimony, we kindly encourage guests to wear neutral or earth-tone colors, such as beige, nude, brown, cream, or similar shades. Comfortable, casual attire with a relaxed resort feel is perfect for the garden setting.\nWe also recommend avoiding high heels, as the ceremony will be held on the lawn. Feel free to wear sunglasses during the ceremony if you'd like.",
          "Reception (Evening Celebration)\nFor the reception, we kindly encourage ladies to wear a long black or navy evening dress, while gentlemen are requested to wear a formal suit. If you don't have a suit, a black dress shirt with formal trousers is absolutely welcome.",
          "Kindly Note,\nWe kindly request that guests do not wear batik for both the Holy Matrimony and Reception. Thank you!",
        ],
      },
      {
        pertanyaan: "Where will the Holy Matrimony take place?",
        jawaban: [
          "Holy Matrimony will be held at Putting Garden, at outdoor garden venue within Intercontinental Bandung Dago Pakar. The venue is located next to the hotel's swimming pool, making it easy to find once you arrive.",
        ],
      },
    ],
  },
  {
    judul: "GIFT",
    items: [
      {
        pertanyaan: "Unfortunately, I can't attend.",
        jawaban: [
          "Your presence is the greatest gift we could ask for. However, if you'd still like to bless us with a wedding gift, please feel free to contact the Groom or Bride directly via WhatsApp or Instagram.",
          "Groom: @william___23\nBride: @marlawrena",
          "Thank you for celebrating with us in your own special way. We truly appreciate your love and support.",
        ],
      },
      {
        pertanyaan: "Unfortunately, I can't attend. How can I send a wedding gift?",
        jawaban: [
          "Your presence is the greatest gift we could ask for. However, if you'd still like to bless us with a wedding gift, please feel free to contact the Groom or Bride directly via WhatsApp or Instagram.",
          "Groom: @william___23\nBride: @marlawrena",
          "Thank you for celebrating with us in your own special way. We truly appreciate your love and support.",
        ],
      },
    ],
  },
  {
    judul: "TRAVEL",
    items: [
      {
        pertanyaan: "Do you have any stay recommendation?",
        jawaban: [
          "We recommend staying at Intercontinental Dago Pakar, Hotel Indigo Bandung, Swiss-Belresort Dago Heritage, or The Cartel Hotel, all conveniently located near our venue. We're also happy to offer our guests a special room rate at Intercontinental Bandung Dago Pakar. If you're interested, please let our RSVP team know.",
          "If you plan to stay at Intercontinental, kindly inform our RSVP team in advance so we can prepare a Welcome Gift waiting for you in your room!",
        ],
      },
    ],
  },
];