export const productsData = {
  categories: {
    'docinhos': {
      id: 'docinhos',
      name: 'Docinhos Gourmet',
      description: 'Nossa seleção especial de doces finos e artesanais para suas celebrações.',
      products: [
        {
          id: 'docinhos-50',
          name: 'Docinhos Gourmet - 50 Unidades',
          price: 90.00,
          shortDesc: 'Caixa com 50 docinhos variados. Escolha até 3 sabores.',
          longDesc: 'Uma seleção requintada com 50 docinhos artesanais, perfeitos para pequenas celebrações e presentes. Você pode escolher até 3 sabores entre nossas opções tradicionais e especiais (Brigadeiro, Ninho com Nutella, Churros, entre outros).',
          images: [
            '/criscakes_delight_475448451_17929464885006455_4748208513815392116_n.jpg',
            '/criscakes_delight_649412918_17973375201006455_2058929966113317070_n.jpg',
            '/criscakes_delight_669663282_17977790376006455_5629608072181704733_n.jpg'
          ],
          maxFlavors: 3,
          availableFlavors: [
            'Brigadeiro ao leite', 'Brigadeiro com kitkat', 'Brigadeiro com Nutella',
            'Chocolate branco', 'Chocolate branco c/ doce de leite', 'Chocolate Branco c/ kikat branco',
            'M&M', 'Ferrero rocher', 'Beijinho', 'Coco queimado c/ doce de leite', 'Coco queimado',
            'Churros', 'Morango c/ Nutella', 'Morango', 'Romeu e Julieta', 'Casadinho',
            'Ninho c/ nutella', 'Ninho c/ Oreo', 'Ninho c/ doce de leite', 'Oreo', 'Prestígio'
          ],
          rating: 4.8,
          reviews: [
            { id: 1, name: 'Nadir Fleury', date: '29/09/2023', text: 'Deliciosos! Vieram como pedi e pude presentear com orgulho.' },
            { id: 2, name: 'Regina Carvalho', date: '08/08/2023', text: 'Já mandei ótimo por conhecer os produtos. A textura do brigadeiro de ninho é perfeita.' }
          ],
          relatedProducts: ['bolo-personalizado']
        },
        {
          id: 'docinhos-100',
          name: 'Docinhos Gourmet - 100 Unidades',
          price: 170.00,
          shortDesc: 'Caixa grande com 100 docinhos variados. Escolha até 6 sabores.',
          longDesc: 'Nossa clássica caixa para eventos maiores. Inclui 100 docinhos enrolados à mão com os melhores ingredientes. Permite a escolha de até 6 sabores para montar uma mesa de doces completa e elegante.',
          images: [
            '/criscakes_delight_670163953_17978264274006455_7236080723711805137_n (1).jpg',
            '/criscakes_delight_1772989702_3848438805750180596_60095438454_1.jpg',
            '/criscakes_delight_670163953_17978264274006455_7236080723711805137_n.jpg'
          ],
          maxFlavors: 6,
          availableFlavors: [
            'Brigadeiro ao leite', 'Brigadeiro com kitkat', 'Brigadeiro com Nutella',
            'Chocolate branco', 'Chocolate branco c/ doce de leite', 'Chocolate Branco c/ kikat branco',
            'M&M', 'Ferrero rocher', 'Beijinho', 'Coco queimado c/ doce de leite', 'Coco queimado',
            'Churros', 'Morango c/ Nutella', 'Morango', 'Romeu e Julieta', 'Casadinho',
            'Ninho c/ nutella', 'Ninho c/ Oreo', 'Ninho c/ doce de leite', 'Oreo', 'Prestígio'
          ],
          rating: 4.9,
          reviews: [
            { id: 1, name: 'Camila Santos', date: '12/10/2023', text: 'Encomendei para o aniversário do meu filho e não sobrou nenhum! Muito maravilhosos.' },
            { id: 2, name: 'Amanda Oliveira', date: '05/11/2023', text: 'Apresentação impecável, digna de confeitaria de luxo. Sabor inigualável.' }
          ],
          relatedProducts: ['bolo-personalizado']
        }
      ]
    },
    'bolos': {
      id: 'bolos',
      name: 'Bolos Decorados',
      description: 'Bolos artesanais com recheios premium e decoração exclusiva.',
      products: [
        {
          id: 'bolo-personalizado',
          name: 'Bolo Personalizado',
          price: 110.00,
          shortDesc: 'Bolo decorado em chantininho ou buttercream. Escolha tamanho e recheio.',
          longDesc: 'Bolo perfeito para celebrar momentos únicos. Massa fofinha, molhadinha e com até 2 camadas de recheio à sua escolha. A decoração é feita em chantininho ou buttercream, com cores e texturas personalizadas.',
          images: [
            '/criscakes_delight_1776714841_3879687317582107292_60095438454_1.jpg',
            '/criscakes_delight_1776802119_3880418948475354069_60095438454_1.jpg'
          ],
          hasVariants: true,
          variants: [
            { id: 'v1', name: 'Tam 15cm - 15 fatias', price: 110.00 },
            { id: 'v2', name: 'Tam 20cm - 25 fatias', price: 145.00 },
            { id: 'v3', name: 'Tam 22cm - 35 fatias', price: 205.00 },
            { id: 'v4', name: 'Tam 25cm - 45 fatias', price: 240.00 },
            { id: 'v5', name: 'Tam 27cm - 55 fatias', price: 275.00 },
            { id: 'v6', name: 'Tam 30cm - 70 fatias', price: 315.00 }
          ],
          maxFillings: 2,
          traditionalFillings: [
            'Chocolate', 'Ninho', 'Coco cremoso', 'Doce de leite com coco', 'Doce de leite',
            'Coco queimado', 'Chocolate com crocante de amendoim', 'Paçoca'
          ],
          specialFillings: [
            'Abacaxi com coco', 'Doce de leite com ameixa', 'Oreo', 'Ninho com Nutella',
            'Kinder bueno', 'Ninho com morangos', 'Chocolate com ovomaltine', 'Nozes',
            'Ninho com uvas', 'Mousse de maracujá'
          ],
          rating: 5.0,
          reviews: [
            { id: 1, name: 'Juliana Paes', date: '20/12/2023', text: 'Bolo lindo e super recheado. Pedi massa de chocolate com doce de leite e estava divino.' }
          ],
          relatedProducts: ['docinhos-50']
        },
        {
          id: 'naked-cake-classico',
          name: 'Naked Cake Clássico',
          price: 85.00,
          shortDesc: 'O charme do rústico com o sabor premium. Sem cobertura.',
          longDesc: 'O charme do rústico com o sabor premium. O Naked Cake deixa o recheio à mostra, sendo finalizado com acetato e fita para sustentação. Ideal para celebrações minimalistas e elegantes.',
          images: [
            '/criscakes_delight_1773430833_3852139234958896005_60095438454_1.jpg',
            '/criscakes_delight_1773867688_3855803327670467223_60095438454.jpg'
          ],
          hasVariants: true,
          variants: [
            { id: 'v1', name: 'Tam 15cm - 15 fatias', price: 85.00 },
            { id: 'v2', name: 'Tam 20cm - 25 fatias', price: 110.00 },
            { id: 'v3', name: 'Tam 22cm - 35 fatias', price: 145.00 },
            { id: 'v4', name: 'Tam 25cm - 45 fatias', price: 170.00 },
            { id: 'v5', name: 'Tam 27cm - 55 fatias', price: 215.00 }
          ],
          maxFillings: 2,
          traditionalFillings: [
            'Chocolate', 'Ninho', 'Coco cremoso', 'Doce de leite com coco', 'Doce de leite',
            'Coco queimado', 'Chocolate com crocante de amendoim', 'Paçoca'
          ],
          specialFillings: [
            'Abacaxi com coco', 'Doce de leite com ameixa', 'Oreo', 'Ninho com Nutella',
            'Kinder bueno', 'Ninho com morangos', 'Chocolate com ovomaltine', 'Nozes',
            'Ninho com uvas', 'Mousse de maracujá'
          ],
          rating: 4.8,
          reviews: [
            { id: 1, name: 'Renato Silva', date: '10/03/2024', text: 'Achei lindíssimo, bem minimalista. O recheio de paçoca é um espetáculo à parte.' }
          ],
          relatedProducts: ['docinhos-50']
        }
      ]
    },
    'chocolates': {
      id: 'chocolates',
      name: 'Kits Festa',
      description: 'Kits completos para facilitar sua festa com elegância e praticidade.',
      products: [
        {
          id: 'kit-festa-1',
          name: 'Kit Festa 1 (Bolo + 30 Doces + 4 Cupcakes)',
          price: 180.00,
          shortDesc: 'O pacote perfeito: Bolo 15 fatias, 30 doces, 4 cupcakes e 1 Topo 3D.',
          longDesc: 'Para facilitar sua vida, criamos este combo que atende até 15 pessoas com excelência. Inclui 1 bolo de 15 fatias decorado, 30 docinhos gourmet (até 2 sabores), 4 cupcakes recheados e 1 topo de bolo 3D personalizado.',
          images: [
            '/criscakes_delight_469400789_17921486385006455_1591918298856863978_n.jpg',
            '/criscakes_delight_651013290_17974286274006455_5955380989462866878_n.jpg',
            '/criscakes_delight_506342461_17943955413006455_4975255188854294390_n.jpg'
          ],
          maxFillings: 2,
          traditionalFillings: [
            'Chocolate', 'Ninho', 'Coco cremoso', 'Doce de leite com coco', 'Doce de leite',
            'Coco queimado', 'Chocolate com crocante de amendoim', 'Paçoca'
          ],
          specialFillings: [
            'Abacaxi com coco', 'Doce de leite com ameixa', 'Oreo', 'Ninho com Nutella',
            'Kinder bueno', 'Ninho com morangos', 'Chocolate com ovomaltine', 'Nozes',
            'Ninho com uvas', 'Mousse de maracujá'
          ],
          rating: 4.9,
          reviews: [
            { id: 1, name: 'Patrícia Gomes', date: '02/02/2024', text: 'Facilitou muito minha vida! O kit chegou impecável e o bolo estava maravilhoso.' }
          ],
          relatedProducts: ['docinhos-50']
        },
        {
          id: 'kit-festa-2',
          name: 'Kit Festa 2 (Bolo + 50 Doces + 6 Cupcakes)',
          price: 240.00,
          shortDesc: 'Bolo 25 fatias, 1 Topo 3D, 50 Doces, 6 cupcakes.',
          longDesc: 'A solução ideal para festas de médio porte. Nosso Kit Festa 2 serve confortavelmente 25 convidados, trazendo nosso bolo de assinatura e doces finos variados que encantam a todos.',
          images: [
            '/criscakes_delight_670439159_17978494563006455_3557055351669735031_n.jpg',
            '/criscakes_delight_475448451_17929464885006455_4748208513815392116_n.jpg',
            '/criscakes_delight_506342461_17943955413006455_4975255188854294390_n.jpg'
          ],
          maxFillings: 2,
          traditionalFillings: [
            'Chocolate', 'Ninho', 'Coco cremoso', 'Doce de leite com coco', 'Doce de leite',
            'Coco queimado', 'Chocolate com crocante de amendoim', 'Paçoca'
          ],
          specialFillings: [
            'Abacaxi com coco', 'Doce de leite com ameixa', 'Oreo', 'Ninho com Nutella',
            'Kinder bueno', 'Ninho com morangos', 'Chocolate com ovomaltine', 'Nozes',
            'Ninho com uvas', 'Mousse de maracujá'
          ],
          rating: 5.0,
          reviews: [
            { id: 1, name: 'Renata Costa', date: '15/02/2024', text: 'Excelente custo-benefício. Tudo muito fresco e muito bem decorado.' }
          ],
          relatedProducts: ['bolo-personalizado']
        },
        {
          id: 'kit-festa-3',
          name: 'Kit Festa 3 (Bolo + 80 Doces + 10 Cupcakes)',
          price: 350.00,
          shortDesc: 'Bolo 40 fatias, 1 Topo 3D, 80 Doces, 10 cupcakes.',
          longDesc: 'O Kit Festa Premium! Serve com fartura 40 pessoas. Contempla um bolo grande decorado, uma enorme variedade de 80 doces finos e 10 cupcakes recheados para uma mesa de doces impecável.',
          images: [
            '/criscakes_delight_1776714841_3879687317582107292_60095438454_1.jpg',
            '/criscakes_delight_1757184731_3715857304622531173_60095438454.jpg',
            '/criscakes_delight_1775861624_3872530429589409852_60095438454_2.jpg'
          ],
          maxFillings: 2,
          traditionalFillings: [
            'Chocolate', 'Ninho', 'Coco cremoso', 'Doce de leite com coco', 'Doce de leite',
            'Coco queimado', 'Chocolate com crocante de amendoim', 'Paçoca'
          ],
          specialFillings: [
            'Abacaxi com coco', 'Doce de leite com ameixa', 'Oreo', 'Ninho com Nutella',
            'Kinder bueno', 'Ninho com morangos', 'Chocolate com ovomaltine', 'Nozes',
            'Ninho com uvas', 'Mousse de maracujá'
          ],
          rating: 4.8,
          reviews: [
            { id: 1, name: 'Fernando Silva', date: '28/02/2024', text: 'Sobrou bolo e doces de tão bem servido! A qualidade é espetacular.' }
          ],
          relatedProducts: ['docinhos-100']
        }
      ]
    }
  }
};

export const getAllProducts = () => {
  let all = [];
  Object.values(productsData.categories).forEach(cat => {
    all = [...all, ...cat.products];
  });
  return all;
};

export const getProductById = (id) => {
  const all = getAllProducts();
  return all.find(p => p.id === id);
};
