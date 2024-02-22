"use client";
import React from "react";
import Faq from "@/components/faq";

const faqsKitchen = [
  {
    header: "How do I buy a modular kitchen?",
    text: "The first step to buying a modular kitchen is to have a complete understanding of the available space.  Remember the kitchen triangle concept to consider movement between the stove, sink and refrigerator for a smooth flow.  It is important to plan your electrical fixtures smartly, depending on the appliances you will need.  Lastly, make the best use of available space with organisers for your household items.",
  },
  {
    header: "What is the best modular kitchen design?",
    text: "The best modular kitchen designs are L-shaped and parallel kitchens.    L-shaped kitchens are one of the best-selling kitchen layouts. This design offers an easy and efficient workspace. It allows appliances and cabinets to be installed along right-angled walls with an open area in the centre. This makes it a great choice for small kitchens or open-plan spaces where you wish to add an island.    Parallel (Galley) layout works well in small spaces as they only    require one to two metres between each side and provide ample    storage. It is also easy to create a working triangle in this layout,    where your sink, refrigeration and oven are within easy reach,    making a busy kitchen easier to navigate.",
  },
  {
    header: "What does a modular kitchen cost?",
    text: "A modular kitchen typically costs anywhere from Rs 1 lakh to Rs 5 lakhs, depending on your choices. The price depends on certain factors such as:    Size of the kitchen, Cabinet material and finish, Accessories,    Appliances",
  },
  {
    header: "what is a best material for Modular kitchen?",
    text: "The best material for a modular kitchen is BWR(boiling water resistant) / BWP (boiling water proof) ply. The other recommended materials include particle board and high-density-high-moisture resistant board, commonly known as HDHMR. These are core materials    for carcass/internal boxes",
  },
  {
    header: "What Accessories should I include in Modular kitchen?",
    text: (
      <div>
        A modular kitchen should have the following accessories:
        <br />
        Drawers - wire baskets, cutlery organisers, tandem drawers <br /> Oil
        pull-outs Corner units - carousel, magic corner, lemans corner Tall
        units with basket storage to help organise essentials like cereals,
        pulses etc
      </div>
    ),
  },
  {
    header: "What are the units of a Modular kitchen?",
    text: (
      <div>
        The units of a modular kitchen are:
        <ul>
          <li>Kitchen base units - below the counter</li>
          <li>Kitchen wall units - overhead storage</li>
          <li>Tall units - groceries, syrups etc</li>
          <li>Kitchen sink units - detergent holder, dustbins</li>
          <li>Tall units - built-in appliances</li>
          <li>Hob units</li>
        </ul>
      </div>
    ),
  },
  {
    header: "What Appliances does the Modular kitchen include",
    text: (
      <div>
        The appliances of a modular kitchen include
        <ul>
          <li>Sink</li>
          <li>Hob or cooktop for cooking</li>
          <li>Chimney (advisable to control kitchen smoke)</li>
          <li>
            other appliances such as oven, microwave, dishwasher, fryer -
            depending on what you need.
          </li>
        </ul>
      </div>
    ),
  },
];
const faqsPoojaUnit = [
  {
    header: " What are the best Pooja unit designs?",
    text: "A good puja unit design is one that facilitates storage of puja essentials like incense sticks, utensils, flowers, fruits, kumkum, bells, diyas. It should have sufficient space for idols, photos of other decors. It is best to use bright and warm colours, rich ornaments and good lighting to enhance the look and feel.",
  },
  {
    header: "What is the cost of Pooja unit based on size?",
    text: "The cost of puja units depends on the size - It could be a small and basic unit or a grand set-up, which would be the highlight of the house. Puja units start from Rs.12,000. This would cover a minimalist puja design with drawers and a jaali as the back panel. The material here is PLPB for the drawers and MDF for the jaali. The price will vary as per the design/finish chosen.",
  },

  {
    header: "How can I choose best material for Pooja unit ?",
    text: (
      <div>
        Here are the best material options for puja units, depending on your
        preference and style:{" "}
        <ul>
          <li>
            Traditional puja unit with jaali - These jaalis are usually made of
            MDF and come in various patterns. It allows both transparency &
            closure at the same time. This unit is available in a combination of
            materials like commercial ply, PLPB etc. Our laminates follow a desi
            brown/earthy colour scheme.
          </li>
          <li>
            Modern puja unit - Use wooden shutters with a white jaali and white
            laminate. These laminates are also available in bright and trendy
            colours. The wooden finish is considered to be the go-to-material
            for puja unit as they are quite easy to maintain.
          </li>
        </ul>
      </div>
    ),
  },
  {
    header: "What Appliances does the Modular kitchen include",
    text: (
      <div>
        The appliances of a modular kitchen include
        <ul>
          <li>Sink</li>
          <li>Hob or cooktop for cooking</li>
          <li>Chimney (advisable to control kitchen smoke)</li>
          <li>
            other appliances such as oven, microwave, dishwasher, fryer -
            depending on what you need.
          </li>
        </ul>
      </div>
    ),
  },
];
const faqsTVUnit = [
  {
    header: "What are the best design for a Tv unit?",
    text: (
      <div>
        The best TV unit design is built on the following 3 premises:
        <ul>
          <li>The entertainment unit is the focal point of the living room</li>
          <li>
            Clutter such as wires, setup boxes and other accessories, is hidden
          </li>
          <li>Decor is placed and highlighted well with open shelves</li>
        </ul>
      </div>
    ),
  },
  {
    header: " How can I add storage to my TV unit?",
    text: "Add storage to your TV unit with drawers. If there is no space available, then it is recommended to have wall-mounted cabinets and shelves.",
  },
  {
    header: "What is the average price of an Tv unit ?",
    text: "The average price of an entertainment unit is Rs.18,000/- for a 4ft wide TV. The cost of a TV unit depends on factors such as the size of the TV & living area, cabinet material & finish and storage. The price can go up or down depending on your requirement.",
  },
  {
    header: "which wood is best for tv unit ?",
    text: "The best wood types for a TV unit are commercial ply and BWR ply due to their resistance to constant exposure to water. They are also resistant to termites, are sturdy and long-lasting. This type of wood allows for any finish and can be personalized to your style.",
  },
  {
    header: "Is it better to wall mount a TV?",
    text: "It is better to mount your TV because it can be fixed at eye level and won't fall off, therefore kid- friendly too.",
  },

  {
    header: "How can I choose best material for Pooja unit ?",
    text: (
      <div>
        Here are the best material options for puja units, depending on your
        preference and style:{" "}
        <ul>
          <li>
            Traditional puja unit with jaali - These jaalis are usually made of
            MDF and come in various patterns. It allows both transparency &
            closure at the same time. This unit is available in a combination of
            materials like commercial ply, PLPB etc. Our laminates follow a desi
            brown/earthy colour scheme.
          </li>
          <li>
            Modern puja unit - Use wooden shutters with a white jaali and white
            laminate. These laminates are also available in bright and trendy
            colours. The wooden finish is considered to be the go-to-material
            for puja unit as they are quite easy to maintain.
          </li>
        </ul>
      </div>
    ),
  },
];
const faqsStudyUnit = [
  {
    header: "How to design a study unit in a small budget?",
    text: "A small-budget home office typically costs Rs 25,000, including loose furniture like a study table and a couple of storage units like shutters/open units/flap units. The price usually depends on factors such as style, storage and material.",
  },
  {
    header: "what are the types of study unit finish?",
    text: "There are several types of study unit finishes. The best- sellers are laminates, acrylic and pre-laminated boards. Laminates are moisture and scratch-resistant and retain their look for years. Acrylics have an ultra-glossy look, are easy to clean, and are scratch & moisture-resistant. They are also shutter-resistant and do not chip or crack easily. Pre-laminated boards are moisture-resistant and are known for their consistency and stability.",
  },

  {
    header: "How to add storage to a study unit ?",
    text: "Add storage to your study unit with wall-mounted shelves and cabinets. This space allows for better accessibility and organisation while keeping the desk clutter-free.",
  },
  {
    header: "How to design a effective study unit?",
    text: (
      <div>
        Here is how to design an effective study unit:
        <br /> Keep the desk clutter-free to keep it distraction-free Make it
        accessible with built-in storage and space for your books, documents,
        pen stands, art supplies etc. Get a comfortable chair with lumbar
        support and a table, depending on your child&#39;s height. <br />
        Natural lighting from a window or a study table lamp are great ways to
        brighten up the space. For a dose of motivation, have a writing wall
        (marker board), inspiring posters and quirky organisers.
      </div>
    ),
  },
  {
    header: "How much does it cost for a home office?",
    text: "A home office typically costs Rs. 25,000, including loose furniture like a study table and a couple of storage units like shutters/open units/flap units. The price usually depends on factors such as style, storage and material.",
  },
];
const faqsLivingRoom = [
  {
    header: "What are the best Interior Design ideas for your living room?",
    text: (
      <div>
        The best interior design for a living room follows certain rules:{" "}
        <ul>
          <li>
            Choose loose furniture that is proportionate to the room size -
            sofa, chairs, etc.
          </li>
          <li>
            Good lighting (natural or ambient) can either visually enlarge your
            room or make it dark as per your preference.
          </li>
          <li>
            Add mirrors in your decor to create an illusion of bigger space.
          </li>
          <li>Free up enough space for air circulation and smooth flow.</li>
          <li>Allocate your budget between must-haves and wants.</li>
          <li>
            Remember the 80/20 rule on interiors vs. design. Decide on a theme
            first, then choose an appropriate colour palette and other elements
            such as material, finish, decor.
          </li>
        </ul>
      </div>
    ),
  },
  {
    header: "What are the best colours for a Living Room?",
    text: (
      <div>
        Some of the best colours for a living room include:
        <ul>
          <li>Nature green</li>
          <li>Orange in shades of cinnamon, terracotta or rust</li>
          <li>
            Deep reds such as bordeaux, merlot and burgundy Violet and plum.
          </li>
          <li>Ink blue with subtle green undertones.</li>
          <li>Grey & Beige</li>
        </ul>
      </div>
    ),
  },
];
const faqsWardobe = [
  {
    header: "what is the best finish for a wardrobe?",
    text: "The best finish options for wardrobes are high-gloss laminate and acrylic as they are easy to clean and maintain.",
  },
  {
    header: "What are the best design Ideas for Wardrobes?",
    text: (
      <div>
        The best wardrobe designs are hinged, sliding and armadio wardrobes.
        <ul>
          <li>
            Hinged wardrobe - These are widely used, cost- effective and fit
            corners well.
          </li>
          <li>
            Sliding wardrobe - Modern, space-saving as the doors don&#39;t wing
            out
          </li>
          <li>
            Floor to ceiling sliding wardrobe (Armadio) - This is a premium
            finish if you do not like separate loft shutters
          </li>
        </ul>
      </div>
    ),
  },

  {
    header: "Is MDF good for Wardrobes",
    text: "Yes, MDF is one of the best materials for wardrobes. It is cost-effective and eco-friendly as it involves a recycling process.",
  },
  {
    header: "what is the price of a wardrobe?",
    text: "The price of a wardrobe ranges from Rs 30,000 to Rs 1.5L. The cost depends on certain factors such as size, material, finish, site condition and internal configuration. A wardrobe of about 5' width, with the internals of drawers/hanger rod and a couple of shelves, costs approximately Rs. 50,000 with core materials of ply & laminate shutter finish. The price can go up or down depending on your modifications.",
  },
  {
    header: "what are the types of wardrobes?",
    text: "The types of wardrobe are hinged, sliding and armadio wardrobes.    Hinged wardrobe - These are widely used, cost-effective and fit corners well.    Sliding wardrobe - modern, space-saving as the doors don't wing out    Floor to ceiling sliding wardrobe (armadio) - This is a premium finish if you do not like separate loft shutters",
  },
];
const page = () => {
  return (
    <div>
      <Faq
        faqs={faqsKitchen}
        title="FAQ"
        subheading="MODULAR KITCHEN"
        description="Any Questions? Look Here"
      />
      <Faq
        faqs={faqsPoojaUnit}
        title="FAQ"
        subheading="POOJA UNIT"
        description="Any Questions? Look Here"
      />
      <Faq
        faqs={faqsTVUnit}
        title="FAQ"
        subheading="TV UNIT"
        description="Any Questions? Look Here"
      />
      <Faq
        faqs={faqsStudyUnit}
        title="FAQ"
        subheading="Study UNIT"
        description="Any Questions? Look Here"
      />
      <Faq
        faqs={faqsLivingRoom}
        title="FAQ"
        subheading="Living Room"
        description="Any Questions? Look Here"
      />
      <Faq
        faqs={faqsWardobe}
        title="FAQ"
        subheading="Wardrobe"
        description="Any Questions? Look Here"
      />
    </div>
  );
};

export default page;
