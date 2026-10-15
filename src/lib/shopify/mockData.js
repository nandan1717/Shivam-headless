export const mockProducts = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'lunar-trajectory-tee',
    title: 'Lunar Trajectory Graphic Tee',
    description: 'Heavyweight organic cotton graphic t-shirt featuring orbital trajectory blueprints and celestial mechanics typography. Minimalist monochrome streetwear cut.',
    descriptionHtml: '<p>Heavyweight 240 GSM organic combed cotton graphic t-shirt featuring <strong>orbital trajectory blueprints</strong> and celestial mechanics typography.</p><ul><li>100% Organic Combed Cotton (240 GSM)</li><li>Pre-shrunk, oversized boxy streetwear fit</li><li>High-density screen print with water-based archival ink</li><li>Reinforced ribbed collar and drop-shoulder silhouette</li></ul>',
    vendor: 'Curious Circuit Co.',
    productType: 'Graphic T-Shirt',
    tags: ['T-Shirt', 'Space & Science', 'Graphic Tee', 'New Arrival', 'Bestseller'],
    publishedAt: '2026-06-01T00:00:00Z',
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: '38.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '38.00', currencyCode: 'USD' }
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: '48.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '48.00', currencyCode: 'USD' }
    },
    images: {
      edges: [
        { node: { url: '/cc-tshirt-lunar.jpg', altText: 'Lunar Trajectory Graphic Tee Front View', width: 800, height: 1200 } }
      ],
      nodes: [
        { url: '/cc-tshirt-lunar.jpg', altText: 'Lunar Trajectory Graphic Tee Front View', width: 800, height: 1200 }
      ]
    },
    options: [
      { id: 'opt1', name: 'Size', values: ['S', 'M', 'L', 'XL', 'XXL'] },
      { id: 'opt2', name: 'Color', values: ['Obsidian Black', 'Chalk White'] }
    ],
    variants: {
      edges: [
        { 
          node: { 
            id: 'gid://shopify/ProductVariant/1', 
            title: 'S / Obsidian Black', 
            availableForSale: true, 
            quantityAvailable: 25, 
            sku: 'CCC-LNR-S-BLK', 
            barcode: '890123456701',
            requiresShipping: true, 
            weight: 0.35, 
            weightUnit: 'KILOGRAMS', 
            price: { amount: '38.00', currencyCode: 'USD' }, 
            compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
            selectedOptions: [
              { name: 'Size', value: 'S' }, 
              { name: 'Color', value: 'Obsidian Black' }
            ], 
            image: { url: '/cc-tshirt-lunar.jpg', altText: 'Lunar Trajectory Graphic Tee' } 
          } 
        },
        { 
          node: { 
            id: 'gid://shopify/ProductVariant/2', 
            title: 'M / Obsidian Black', 
            availableForSale: true, 
            quantityAvailable: 30, 
            sku: 'CCC-LNR-M-BLK', 
            barcode: '890123456702',
            requiresShipping: true, 
            weight: 0.35, 
            weightUnit: 'KILOGRAMS', 
            price: { amount: '38.00', currencyCode: 'USD' }, 
            compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
            selectedOptions: [
              { name: 'Size', value: 'M' }, 
              { name: 'Color', value: 'Obsidian Black' }
            ], 
            image: { url: '/cc-tshirt-lunar.jpg', altText: 'Lunar Trajectory Graphic Tee' } 
          } 
        },
        { 
          node: { 
            id: 'gid://shopify/ProductVariant/3', 
            title: 'L / Obsidian Black', 
            availableForSale: true, 
            quantityAvailable: 40, 
            sku: 'CCC-LNR-L-BLK', 
            barcode: '890123456703',
            requiresShipping: true, 
            weight: 0.35, 
            weightUnit: 'KILOGRAMS', 
            price: { amount: '38.00', currencyCode: 'USD' }, 
            compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
            selectedOptions: [
              { name: 'Size', value: 'L' }, 
              { name: 'Color', value: 'Obsidian Black' }
            ], 
            image: { url: '/cc-tshirt-lunar.jpg', altText: 'Lunar Trajectory Graphic Tee' } 
          } 
        },
        { 
          node: { 
            id: 'gid://shopify/ProductVariant/4', 
            title: 'XL / Obsidian Black', 
            availableForSale: true, 
            quantityAvailable: 20, 
            sku: 'CCC-LNR-XL-BLK', 
            barcode: '890123456704',
            requiresShipping: true, 
            weight: 0.35, 
            weightUnit: 'KILOGRAMS', 
            price: { amount: '38.00', currencyCode: 'USD' }, 
            compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
            selectedOptions: [
              { name: 'Size', value: 'XL' }, 
              { name: 'Color', value: 'Obsidian Black' }
            ], 
            image: { url: '/cc-tshirt-lunar.jpg', altText: 'Lunar Trajectory Graphic Tee' } 
          } 
        }
      ],
      nodes: [
        { 
          id: 'gid://shopify/ProductVariant/1', 
          title: 'S / Obsidian Black', 
          availableForSale: true, 
          quantityAvailable: 25, 
          sku: 'CCC-LNR-S-BLK', 
          price: { amount: '38.00', currencyCode: 'USD' }, 
          compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
          selectedOptions: [{ name: 'Size', value: 'S' }, { name: 'Color', value: 'Obsidian Black' }],
          image: { url: '/cc-tshirt-lunar.jpg', altText: 'Lunar Trajectory Graphic Tee' }
        },
        { 
          id: 'gid://shopify/ProductVariant/2', 
          title: 'M / Obsidian Black', 
          availableForSale: true, 
          quantityAvailable: 30, 
          sku: 'CCC-LNR-M-BLK', 
          price: { amount: '38.00', currencyCode: 'USD' }, 
          compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
          selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Obsidian Black' }],
          image: { url: '/cc-tshirt-lunar.jpg', altText: 'Lunar Trajectory Graphic Tee' }
        },
        { 
          id: 'gid://shopify/ProductVariant/3', 
          title: 'L / Obsidian Black', 
          availableForSale: true, 
          quantityAvailable: 40, 
          sku: 'CCC-LNR-L-BLK', 
          price: { amount: '38.00', currencyCode: 'USD' }, 
          compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
          selectedOptions: [{ name: 'Size', value: 'L' }, { name: 'Color', value: 'Obsidian Black' }],
          image: { url: '/cc-tshirt-lunar.jpg', altText: 'Lunar Trajectory Graphic Tee' }
        },
        { 
          id: 'gid://shopify/ProductVariant/4', 
          title: 'XL / Obsidian Black', 
          availableForSale: true, 
          quantityAvailable: 20, 
          sku: 'CCC-LNR-XL-BLK', 
          price: { amount: '38.00', currencyCode: 'USD' }, 
          compareAtPrice: { amount: '48.00', currencyCode: 'USD' },
          selectedOptions: [{ name: 'Size', value: 'XL' }, { name: 'Color', value: 'Obsidian Black' }],
          image: { url: '/cc-tshirt-lunar.jpg', altText: 'Lunar Trajectory Graphic Tee' }
        }
      ]
    },
    metafields: [
      { namespace: 'custom', key: 'fabric', value: '100% Organic Combed Cotton, 240 GSM Heavyweight Jersey', type: 'single_line_text_field' },
      { namespace: 'custom', key: 'wash_care', value: 'Machine wash cold inside out, tumble dry low or hang dry. Do not iron directly on print.', type: 'single_line_text_field' },
      { namespace: 'custom', key: 'size_guide', value: 'Relaxed streetwear fit. For an oversized look, choose your true size.', type: 'single_line_text_field' }
    ]
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'digital-mind-tee',
    title: 'Digital Mind Neural Network Tee',
    description: 'Minimalist editorial graphic t-shirt highlighting neural topology schematics and artificial intelligence system nodes.',
    descriptionHtml: '<p>A deep-black heavyweight graphic tee celebrating the architecture of synthetic intelligence. Features <strong>neural network topology schematics</strong> and machine learning tensor dimensions.</p><ul><li>240 GSM Pure Ring-Spun Cotton</li><li>Custom cyber-schematic typography</li><li>Dropped shoulders with relaxed boxy drape</li></ul>',
    vendor: 'Curious Circuit Co.',
    productType: 'Graphic T-Shirt',
    tags: ['T-Shirt', 'AI & Tech', 'Graphic Tee', 'Neural', 'Bestseller'],
    priceRange: {
      minVariantPrice: { amount: '42.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '42.00', currencyCode: 'USD' }
    },
    images: {
      edges: [
        { node: { url: '/cc-tshirt-digital.jpg', altText: 'Digital Mind Graphic Tee', width: 800, height: 1200 } }
      ],
      nodes: [
        { url: '/cc-tshirt-digital.jpg', altText: 'Digital Mind Graphic Tee', width: 800, height: 1200 }
      ]
    },
    options: [
      { id: 'opt1', name: 'Size', values: ['S', 'M', 'L', 'XL'] }
    ],
    variants: {
      edges: [
        { node: { id: 'gid://shopify/ProductVariant/5', title: 'M', availableForSale: true, quantityAvailable: 35, sku: 'CCC-DGT-M', price: { amount: '42.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'M' }] } },
        { node: { id: 'gid://shopify/ProductVariant/6', title: 'L', availableForSale: true, quantityAvailable: 25, sku: 'CCC-DGT-L', price: { amount: '42.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'L' }] } }
      ],
      nodes: [
        { id: 'gid://shopify/ProductVariant/5', title: 'M', availableForSale: true, quantityAvailable: 35, sku: 'CCC-DGT-M', price: { amount: '42.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'M' }] },
        { id: 'gid://shopify/ProductVariant/6', title: 'L', availableForSale: true, quantityAvailable: 25, sku: 'CCC-DGT-L', price: { amount: '42.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'L' }] }
      ]
    }
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'solar-cycle-tee',
    title: 'Solar Cycle Astrophysics Tee',
    description: 'Astronomical diagram graphic t-shirt illustrating heliophysics coronal mass ejections and solar magnetic reversal cycles.',
    descriptionHtml: '<p>A tribute to the stars. Features high-resolution <strong>heliophysics coronal cycle diagrams</strong> and astronomical wavelength metrics.</p><ul><li>100% Combed Organic Cotton</li><li>High-density soft water-based screenprint</li><li>Reinforced double-stitched hems</li></ul>',
    vendor: 'Curious Circuit Co.',
    productType: 'Graphic T-Shirt',
    tags: ['T-Shirt', 'Space & Science', 'Graphic Tee', 'Astrophysics'],
    priceRange: {
      minVariantPrice: { amount: '38.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '38.00', currencyCode: 'USD' }
    },
    images: {
      edges: [
        { node: { url: '/cc-tshirt-solar.jpg', altText: 'Solar Cycle Graphic Tee', width: 800, height: 1200 } }
      ],
      nodes: [
        { url: '/cc-tshirt-solar.jpg', altText: 'Solar Cycle Graphic Tee', width: 800, height: 1200 }
      ]
    },
    options: [
      { id: 'opt1', name: 'Size', values: ['S', 'M', 'L', 'XL'] }
    ],
    variants: {
      edges: [
        { node: { id: 'gid://shopify/ProductVariant/7', title: 'M', availableForSale: true, quantityAvailable: 20, sku: 'CCC-SLR-M', price: { amount: '38.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'M' }] } },
        { node: { id: 'gid://shopify/ProductVariant/8', title: 'L', availableForSale: true, quantityAvailable: 15, sku: 'CCC-SLR-L', price: { amount: '38.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'L' }] } }
      ],
      nodes: [
        { id: 'gid://shopify/ProductVariant/7', title: 'M', availableForSale: true, quantityAvailable: 20, sku: 'CCC-SLR-M', price: { amount: '38.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'M' }] },
        { id: 'gid://shopify/ProductVariant/8', title: 'L', availableForSale: true, quantityAvailable: 15, sku: 'CCC-SLR-L', price: { amount: '38.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'L' }] }
      ]
    }
  },
  {
    id: 'gid://shopify/Product/4',
    handle: 'quantum-wave-tee',
    title: 'Quantum Wave Physics Tee',
    description: 'Quantum mechanics wave function equations and probability density waveforms on ultra-soft monochrome heavyweight cotton.',
    descriptionHtml: '<p>Exploring the boundary between particles and waves. Features <strong>Schrödinger wave function equations</strong> and harmonic oscillator schematics.</p><ul><li>240 GSM Premium Heavyweight Cotton</li><li>Matte monochrome graphic imprint</li><li>Relaxed boxy silhouette</li></ul>',
    vendor: 'Curious Circuit Co.',
    productType: 'Graphic T-Shirt',
    tags: ['T-Shirt', 'Space & Science', 'Quantum', 'Physics'],
    priceRange: {
      minVariantPrice: { amount: '40.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '40.00', currencyCode: 'USD' }
    },
    images: {
      edges: [
        { node: { url: '/cc-tshirt-wave.jpg', altText: 'Quantum Wave Physics Tee', width: 800, height: 1200 } }
      ],
      nodes: [
        { url: '/cc-tshirt-wave.jpg', altText: 'Quantum Wave Physics Tee', width: 800, height: 1200 }
      ]
    },
    options: [
      { id: 'opt1', name: 'Size', values: ['S', 'M', 'L', 'XL'] }
    ],
    variants: {
      edges: [
        { node: { id: 'gid://shopify/ProductVariant/9', title: 'M', availableForSale: true, quantityAvailable: 18, sku: 'CCC-WAV-M', price: { amount: '40.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'M' }] } },
        { node: { id: 'gid://shopify/ProductVariant/10', title: 'L', availableForSale: true, quantityAvailable: 22, sku: 'CCC-WAV-L', price: { amount: '40.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'L' }] } }
      ],
      nodes: [
        { id: 'gid://shopify/ProductVariant/9', title: 'M', availableForSale: true, quantityAvailable: 18, sku: 'CCC-WAV-M', price: { amount: '40.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'M' }] },
        { id: 'gid://shopify/ProductVariant/10', title: 'L', availableForSale: true, quantityAvailable: 22, sku: 'CCC-WAV-L', price: { amount: '40.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'L' }] }
      ]
    }
  },
  {
    id: 'gid://shopify/Product/5',
    handle: 'mars-horizon-tee',
    title: 'Mars Horizon Deep Space Tee',
    description: 'Interplanetary exploration blueprint t-shirt with Martian topography contour elevations and orbital landing telemetry.',
    descriptionHtml: '<p>A blueprint for our multi-planetary future. Features <strong>Martian topography contour elevations</strong>, rover coordinates, and orbital landing telemetry.</p><ul><li>100% Ring-Spun Cotton, 240 GSM</li><li>Drop shoulder construction</li><li>Long-lasting screen print</li></ul>',
    vendor: 'Curious Circuit Co.',
    productType: 'Graphic T-Shirt',
    tags: ['T-Shirt', 'Space & Science', 'Mars', 'Exploration', 'Bestseller'],
    priceRange: {
      minVariantPrice: { amount: '42.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '42.00', currencyCode: 'USD' }
    },
    images: {
      edges: [
        { node: { url: '/cc-tshirt-mission.jpg', altText: 'Mars Horizon Deep Space Tee', width: 800, height: 1200 } }
      ],
      nodes: [
        { url: '/cc-tshirt-mission.jpg', altText: 'Mars Horizon Deep Space Tee', width: 800, height: 1200 }
      ]
    },
    options: [
      { id: 'opt1', name: 'Size', values: ['S', 'M', 'L', 'XL'] }
    ],
    variants: {
      edges: [
        { node: { id: 'gid://shopify/ProductVariant/11', title: 'M', availableForSale: true, quantityAvailable: 24, sku: 'CCC-MAR-M', price: { amount: '42.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'M' }] } },
        { node: { id: 'gid://shopify/ProductVariant/12', title: 'L', availableForSale: true, quantityAvailable: 19, sku: 'CCC-MAR-L', price: { amount: '42.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'L' }] } }
      ],
      nodes: [
        { id: 'gid://shopify/ProductVariant/11', title: 'M', availableForSale: true, quantityAvailable: 24, sku: 'CCC-MAR-M', price: { amount: '42.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'M' }] },
        { id: 'gid://shopify/ProductVariant/12', title: 'L', availableForSale: true, quantityAvailable: 19, sku: 'CCC-MAR-L', price: { amount: '42.00', currencyCode: 'USD' }, selectedOptions: [{ name: 'Size', value: 'L' }] }
      ]
    }
  }
];

export const mockCollections = [
  {
    id: 'gid://shopify/Collection/1',
    handle: 'all',
    title: 'All Graphic Tees',
    description: 'Explore our complete collection of graphic t-shirts inspired by science, technology, and space.',
    products: {
      edges: mockProducts.map(p => ({ node: p }))
    }
  },
  {
    id: 'gid://shopify/Collection/2',
    handle: 'ai-tech',
    title: 'AI & Technology',
    description: 'Minimalist graphic tees celebrating algorithms, neural circuits, and digital futures.',
    products: {
      edges: [
        { node: mockProducts[1] }
      ]
    }
  },
  {
    id: 'gid://shopify/Collection/3',
    handle: 'space-science',
    title: 'Space & Science',
    description: 'Astrophysics diagrams, celestial trajectories, and quantum equations printed on premium heavyweight cotton.',
    products: {
      edges: [
        { node: mockProducts[0] },
        { node: mockProducts[2] },
        { node: mockProducts[3] },
        { node: mockProducts[4] }
      ]
    }
  },
  {
    id: 'gid://shopify/Collection/4',
    handle: 'bestsellers',
    title: 'Bestsellers',
    description: 'Our most sought-after graphic tees, designed for curious minds.',
    products: {
      edges: [
        { node: mockProducts[0] },
        { node: mockProducts[1] },
        { node: mockProducts[4] }
      ]
    }
  }
];
