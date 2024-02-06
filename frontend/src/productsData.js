const products = [
    {
      id: 1,
      name: 'No Weapon Formed Against Me Will Prosper',
      date: 2022,
      collection: "Black Dog",
      price: 3000,
      image: 'images/endscene.jpg',
      media: 'Graphite and marker on paper, digital collage',
      dimensions: "3x3ft",
      description: 'A beautiful abstract painting for your art collection.',
    },
    {
      id: 2,
      name: 'When the soul breaks through the confines of its mortal frame',
      date: 2021,
      collection: '',
      price: 2000,
      image: 'images/nihilist.jpg',
      media: 'Graphite, acrylic, marker on paper, digital collage',
      dimensions: "24x18in",
      description: 'An exquisite sculpture to adorn your living space.',
    },
    // Add more product entries as needed
    {
        id: 3,
        name: 'SAP(FORTHESOUL)',
        date: 2022,
        collection: '',
        price: 10000,
        image: 'images/SAP.JPG',
        media: '3D modeling, PIR Motion Snesor, DFPlater, SD card, jumper wires, arduino uno',
        dimensions: "9x10x4in",
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 4,
        name: 'The Paradox of the Absurdist',
        date: 2022,
        collection: '',
        price: 1000,
        image: 'images/absurdist.jpg',
        media: 'Oil on canvas, digital collage',
        dimensions: '2x3ft',
        description: 'An exquisite sculpture to adorn your living space.',
      },
      {
        id: 5,
        name: 'Fortis Fortuna Adiuvat',
        date: 2022,
        collection: 'Black Dog',
        price: 1000,
        image: 'images/angel.JPG',
        media: 'Graphite on paper, digital collage',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 6,
        name: 'Kirin',
        date: 2023,
        collection: '',
        price: 1000,
        image: 'images/kirin.jpg',
        media:'Graphic, charcoal and conte crayon on paper',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 7,
        name: 'Divinity in Hollowness',
        price: 1000,
        image: 'images/skeleton.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 8,
        name: 'Solo/Sinnerman',
        price: 1000,
        image: 'images/solo-1.JPG',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 9,
        name: 'Solo/Sinnerman',
        price: 1000,
        image: 'images/blackcat.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 10,
        name: 'The Amerikkkan Neighbor',
        price: 1000,
        image: 'images/Amerikkka.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 10,
        name: 'Smh, Bill, smh ',
        price: 1000,
        image: 'images/bill.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 11,
        name: 'The Caped Woman',
        price: 1000,
        image: 'images/cloak.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 12,
        name: 'FORESIGHT!',
        price: 1000,
        image: 'images/foresight.JPG',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 13,
        name: 'Godspeed Cowboy',
        price: 1000,
        image: 'images/godspeed.JPG',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 14,
        name: 'The Painter & Consciousness',
        price: 1000,
        image: 'images/painter.JPG',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 15,
        name: 'Transparancey',
        price: 1000,
        image: 'images/wineglass.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 15,
        name: 'Sunday Morning Cowboy',
        price: 1000,
        image: 'images/sunday.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },
      {
        id: 16,
        name: 'IGOTMYREPARATIONSBOUGHTMYSELFSOMEJEWELRY!',
        price: 1000,
        image: 'images/reparations.JPG',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 17,
        name: 'Glitter will alwas make you feel better',
        price: 1000,
        image: 'images/glitter.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 18,
        name: 'infinitum',
        price: 1000,
        image: 'images/infinitum.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 19,
        name: 'Anti',
        price: 1000,
        image: 'images/anti.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },
      {
        id: 20,
        name: 'Explicit Print',
        price: 1000,
        image: 'images/beachside.JPG',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 21,
        name: 'Easy Way Out',
        price: 1000,
        image: 'images/exit.JPG',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 22,
        name: 'Seul-2',
        price: 1000,
        image: 'images/seul-2.JPG',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 22,
        name: 'Consciousness',
        price: 1000,
        image: 'images/swan.JPG',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 23,
        name: 'Sunday Radio',
        price: 1000,
        image: 'images/radio.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },
      {
        id: 22,
        name: 'Seul-1',
        price: 1000,
        image: 'images/seul-1.JPG',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 22,
        name: 'Contrasted Saturation',
        price: 1000,
        image: 'images/umbrella.jpg',
        description: 'An exquisite sculpture to adorn your living space.',
      },
  ];
  
  export default products;