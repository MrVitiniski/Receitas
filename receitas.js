const receitasPizzaria = [
  {
    id: 1,
    titulo: { en: "1. Meatball", pt: "1. Almôndegas (Meatball)" },
    meta: { en: "Equipment: Bimby / Oven", pt: "Equipamento: Bimby / Forno" },
    ingredientes: {
      en: [
        "Peeled Garlic 150g",
        "Bread crumbs 400g",
        "Parm reggiano 400g",
        "Pepper 20g",
        "Salt 100g",
        "Parsley 200g",
        "Basil 75g",
        "Eggs 12p",
        "Olive oil 300ml",
        "Minced meat 10kg"
      ],
      pt: [
        "Alho descascado 150g",
        "Farinha de rosca 400g",
        "Parmesão reggiano 400g",
        "Pimenta 20g",
        "Sal 100g",
        "Salsa 200g",
        "Manjericão 75g",
        "Ovos 12 un",
        "Azeite 300ml",
        "Carne moída 10kg"
      ]
    },
    passos: {
      en: [
        "Combine dry ingredients first in Bimby.",
        "Combine dry and wet ingredients.",
        "Make 40g meatballs.",
        "Put them into a tray, add a bit of olive oil on top, cover and put into the oven.",
        "Shake every 5 mins. After 15 mins check if ready, leave outside uncovered to cool down."
      ],
      pt: [
        "Combine primeiro os ingredientes secos na Bimby.",
        "Misture os ingredientes secos com os ingredientes molhados.",
        "Modele almôndegas de 40g.",
        "Coloque em uma assadeira, adicione um fio de azeite por cima, cubra e leve ao forno.",
        "Chacoalhe a assadeira a cada 5 min. Após 15 min, verifique o ponto e deixe esfriar sem tampa."
      ]
    }
  },
  {
    id: 2,
    titulo: { en: "2. Baba Ganoush", pt: "2. Baba Ganoush" },
    meta: { en: "Equipment: Oven / Bimby", pt: "Equipamento: Forno / Bimby" },
    ingredientes: {
      en: [
        "Eggplant 4kg",
        "Ground cumin 20g",
        "Garlic 30g",
        "Salt and pepper 15-15g",
        "Olive oil 50ml",
        "Tahini 200g",
        "Lemon Juice 1 lemon"
      ],
      pt: [
        "Berinjela 4kg",
        "Cominho em pó 20g",
        "Alho 30g",
        "Sal e pimenta 15g-15g",
        "Azeite 50ml",
        "Tahine 200g",
        "Suco de 1 limão"
      ]
    },
    passos: {
      en: [
        "Make holes on each side of eggplants with a fork.",
        "Put in oven; after 10 mins turn over; bake 10 mins more until soft and a bit burned.",
        "Cool in a metal pot with plastic cover; when warm enough, blitz with seasoning in Bimby until creamy."
      ],
      pt: [
        "Faça furos em todos os lados das berinjelas com um garfo.",
        "Leve ao forno; após 10 min vire e asse por mais 10 min até amaciar e queimar levemente.",
        "Deixe esfriar em recipiente de metal com plástico; depois bata na Bimby com os temperos até ficar cremoso."
      ]
    }
  },
  {
    id: 3,
    titulo: { en: "3. VEGAN Shroom Paste", pt: "3. Pasta Vegana de Cogumelos" },
    meta: { en: "Equipment: Bimby", pt: "Equipamento: Bimby" },
    ingredientes: {
      en: ["Mushroom mix 650g", "Miso paste 200g", "Olive oil 200ml", "Water 350ml"],
      pt: ["Mix de cogumelos 650g", "Pasta de missô 200g", "Azeite 200ml", "Água 350ml"]
    },
    passos: {
      en: [
        "Add everything to Bimby and slowly mix until smooth thick paste.",
        "If machine stops mixing, stir with spoon and restart."
      ],
      pt: [
        "Adicione tudo na Bimby e misture lentamente até virar uma pasta grossa e lisa.",
        "Se a máquina travar, mexa com colher e reinicie."
      ]
    }
  },
  {
    id: 4,
    titulo: { en: "4. Herb oil", pt: "4. Óleo de Ervas" },
    meta: { en: "Process time: 1 minute", pt: "Tempo de processo: 1 minuto" },
    ingredientes: {
      en: ["Basil 100g", "Parsley 100g", "Mint 50g", "Olive oil 800ml"],
      pt: ["Manjericão 100g", "Salsa 100g", "Hortelã 50g", "Azeite 800ml"]
    },
    passos: {
      en: ["Mix everything in Bimby for 1 minute."],
      pt: ["Misture tudo na Bimby por 1 minuto."]
    }
  },
  {
    id: 5,
    titulo: { en: "5. Habanero Honey", pt: "5. Mel de Habanero" },
    meta: { en: "Setup: 60°C | Time: 45 mins", pt: "Configuração: 60°C | Tempo: 45 min" },
    ingredientes: {
      en: ["Honey 1000g", "Habanero peppers 5p (deseeded)"],
      pt: ["Mel 1000g", "Pimentas habanero 5 un (sem sementes)"]
    },
    passos: {
      en: ["Mix in Bimby at 60°C for 45 minutes."],
      pt: ["Misture na Bimby a 60°C por 45 minutos."]
    }
  },
  {
    id: 6,
    titulo: { en: "6. Chili oil", pt: "6. Óleo de Pimenta" },
    meta: { en: "Setup: 60°C | Time: 30 mins", pt: "Configuração: 60°C | Tempo: 30 min" },
    ingredientes: {
      en: ["Chili powder 100g", "Olive oil 1000g"],
      pt: ["Pimenta em pó 100g", "Azeite 1000g"]
    },
    passos: {
      en: ["Mix in Bimby at 60°C for 30 mins."],
      pt: ["Misture na Bimby a 60°C por 30 min."]
    }
  },
  {
    id: 7,
    titulo: { en: "7. Aioli", pt: "7. Aioli" },
    meta: { en: "Process: Direct mix", pt: "Processo: mistura direta" },
    ingredientes: {
      en: [
        "Confit garlic 350g",
        "Mayo 200g",
        "Worcester sauce 3 spoon",
        "Salt&Pepper 10-5g",
        "Lemon juice - 1/2 lemon"
      ],
      pt: [
        "Alho confitado 350g",
        "Maionese 200g",
        "Molho inglês 3 colheres",
        "Sal e pimenta 10-5g",
        "Suco de limão - 1/2 limão"
      ]
    },
    passos: {
      en: ["Mix everything in a pot."],
      pt: ["Misture tudo em um pote."]
    }
  },
  {
    id: 8,
    titulo: { en: "8. Pickled Juice", pt: "8. Líquido para Conserva" },
    meta: { en: "Standard Escabeche Ratio", pt: "Proporção padrão de escabeche" },
    ingredientes: {
      en: [
        "Water 3 part (f.e.:1500ml)",
        "Vinegar 2 part (f.e.:1000ml)",
        "Sugar 1 part (f.e.:500g)",
        "Salt 10% of the sugar (f.e.:50g)"
      ],
      pt: [
        "Água 3 partes (ex.: 1500ml)",
        "Vinagre 2 partes (ex.: 1000ml)",
        "Açúcar 1 parte (ex.: 500g)",
        "Sal 10% do açúcar (ex.: 50g)"
      ]
    },
    passos: {
      en: ["Cook together."],
      pt: ["Cozinhe tudo junto."]
    }
  },
  {
    id: 9,
    titulo: { en: "9. Shroom mix", pt: "9. Mix de Cogumelos" },
    meta: { en: "Process: Oven without lid | Preserve", pt: "Processo: forno sem tampa | Conserva" },
    ingredientes: {
      en: ["Shitake mushrooms 8kg", "Soy sauce 1l", "Vinegar 250ml", "Garlic 10 cloves (minced)"],
      pt: ["Cogumelos shiitake 8kg", "Molho de soja 1L", "Vinagre 250ml", "Alho 10 dentes (picado)"]
    },
    passos: {
      en: [
        "Slice mushrooms, mince garlic on top, mix with vinegar and soy sauce.",
        "Bake 15 mins without lid until top is a bit burnt.",
        "Remove, mix well, cool down.",
        "Put in vacuum plastic bags and freeze."
      ],
      pt: [
        "Fatie os cogumelos, adicione alho picado e misture com vinagre e molho de soja.",
        "Asse por 15 min sem tampa até dourar/queimar levemente no topo.",
        "Retire, misture bem e deixe esfriar.",
        "Embale em sacos a vácuo e congele."
      ]
    }
  },
  {
    id: 10,
    titulo: { en: "10. Marinara sauce", pt: "10. Molho Marinara" },
    meta: { en: "Tomato base", pt: "Base de tomate" },
    ingredientes: {
      en: ["Tomato sauce 2 cans", "Water 150ml", "Olive oil 100ml"],
      pt: ["Molho de tomate 2 latas", "Água 150ml", "Azeite 100ml"]
    },
    passos: {
      en: ["Mix all ingredients together until homogeneous."],
      pt: ["Misture tudo até ficar homogêneo."]
    }
  },
  {
    id: 11,
    titulo: { en: "11. Speck reduction base", pt: "11. Base redução de Speck" },
    meta: { en: "Prep: Overnight oven / Slow cook", pt: "Preparo: forno noturno / cozimento lento" },
    ingredientes: {
      en: [
        "Salt 2 tbspoon",
        "Pepper 0,5 tbspoon",
        "Garlic cloves 6-8",
        "Speck trimmings 200-250g",
        "Onions 2 big pieces",
        "Little sugar (additional)",
        "Salami leftover pieces",
        "Parsley stamps (leftover)"
      ],
      pt: [
        "Sal 2 colheres de sopa",
        "Pimenta 0,5 colher de sopa",
        "Dentes de alho 6-8",
        "Retalhos de speck 200-250g",
        "Cebolas 2 unidades grandes",
        "Um pouco de açúcar (adicional)",
        "Retalhos de salame",
        "Talos de salsa (sobras)"
      ]
    },
    passos: {
      en: [
        "Cut onions, speck and salami in big pieces and put in a 1/1 gastro GN with other ingredients.",
        "Mix well, put lid on, seal with aluminium foil and bake overnight.",
        "In the morning remove parsley stamps and blend with hand mixer until thick sauce.",
        "If too thick add a bit of water. Taste salt, put in piping bags and freeze."
      ],
      pt: [
        "Corte cebola, speck e salame em pedaços grandes e coloque em GN 1/1 com os demais ingredientes.",
        "Misture bem, tampe, vede com papel-alumínio e leve ao forno durante a noite.",
        "De manhã, retire os talos de salsa e bata com mixer até virar molho grosso.",
        "Se ficar muito espesso, adicione um pouco de água. Ajuste sal, coloque em sacos de confeitar e congele."
      ]
    }
  },
  {
    id: 12,
    titulo: { en: "12. Ranch sauce", pt: "12. Molho Ranch" },
    meta: { en: "Finalization: Consistency adjustment", pt: "Finalização: ajuste de consistência" },
    ingredientes: {
      en: [
        "Creme fraiche 600g",
        "Herb oil 200ml",
        "Water 50ml",
        "Garlic cloves 2 (minced)",
        "Dijon Mustard 1 tbspoon",
        "Salt&Pepper 1-0,5 teaspoon"
      ],
      pt: [
        "Creme fraîche 600g",
        "Óleo de ervas 200ml",
        "Água 50ml",
        "Alho 2 dentes (picado)",
        "Mostarda Dijon 1 colher de sopa",
        "Sal e pimenta 1-0,5 colher de chá"
      ]
    },
    passos: {
      en: ["Mix everything together, taste salt, if too thick add some water."],
      pt: ["Misture tudo, ajuste o sal e, se ficar muito espesso, adicione um pouco de água."]
    }
  }
];

window.receitasPizzaria = receitasPizzaria;