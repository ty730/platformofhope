import towel from './../../images/store/poh-towel.jpg';
import towel2 from './../../images/store/towel-2.jpeg';
import towel3 from './../../images/store/towel-3.jpeg';
import towel4 from './../../images/store/towel-4.jpeg';
import towel5 from './../../images/store/towel-5.jpeg';
import towel6 from './../../images/store/towel-6.jpg';
import towel7 from './../../images/store/towel-7.jpg';
import towel8 from './../../images/store/towel-8.jpg';
import towel9 from './../../images/store/towel-9.jpg';
import tumblerColor from './../../images/store/tumbler-color-1.jpeg';
import tumblerColor2 from './../../images/store/tumbler-color-2.jpeg';
import tumblerColor3 from './../../images/store/tumbler-color-3.jpg';
import tumblerColor4 from './../../images/store/tumbler-color-4.jpg';
import tumblerWhite from './../../images/store/tumbler-black-1.jpeg';
import tumblerWhite2 from './../../images/store/tumbler-black-2.jpeg';
import tumblerWhite3 from './../../images/store/tumbler-black-3.jpg';
import tumblerWhite4 from './../../images/store/tumbler-black-4.jpg';
import mug from './../../images/store/mug-1.jpg';
import mug2 from './../../images/store/mug-2.jpeg';
import notebookLarge from './../../images/store/notebook-large-1.jpeg';
import notebookLarge2 from './../../images/store/notebook-large-2.jpeg';
import notebookLarge3 from './../../images/store/notebook-large-3.jpeg';
import notebookSmall from './../../images/store/notebook-small-1.jpeg';
import notebookSmall2 from './../../images/store/notebook-small-2.jpeg';
import notebookSmall3 from './../../images/store/notebook-small-3.jpeg';
import keyChainPlastic from './../../images/store/keychain-plastic.jpeg';
import keyChainWood from './../../images/store/keychain-wood.jpeg';
import keyChains from './../../images/store/keychains.jpg';


const TOWEL_PRODUCT_ID = "towel";
const TUMBLER_WHITE_PRODUCT_ID = "tumbler-white";
const TUMBLER_COLOR_PRODUCT_ID = "tumbler-color";
const MUG_PRODUCT_ID = "mug";
const NOTEBOOK_LARGE_PRODUCT_ID = "notebook-large";
const NOTEBOOK_SMALL_PRODUCT_ID = "notebook-small";
const KEYCHAIN_PLASTIC_PRODUCT_ID = "keychain-plastic";
const KEYCHAIN_WOOD_PRODUCT_ID = "keychain-wood";

export const PRODUCTS = {
    [TOWEL_PRODUCT_ID]: { 
        name: "Embroidered Hand Towel", cost: "$15", img: towel, carouselImages: [towel, towel2, towel3, towel4, towel5, towel6, towel7, towel8, towel9], description: "A simple yet meaningful touch for your home or office. Each towel features a carefully embroidered design."
    },
    [TUMBLER_WHITE_PRODUCT_ID]: { 
        name: "White and Silver Tumbler", cost: "$20", img: tumblerWhite, carouselImages: [tumblerWhite, tumblerWhite2, tumblerWhite3, tumblerWhite4], description: "Take hope on the go! This durable, stylish cup is perfect for busy mornings or moments of reflection wherever life takes you."
    },
    [TUMBLER_COLOR_PRODUCT_ID]: { 
        name: "Signature Tumbler", cost: "$24", img: tumblerColor, carouselImages: [tumblerColor, tumblerColor2, tumblerColor3, tumblerColor4], description: "Take hope on the go! This durable, stylish cup is perfect for busy mornings or moments of reflection wherever life takes you."
    },
    [MUG_PRODUCT_ID]: { 
        name: "Coffee Mug", cost: "$13", img: mug, carouselImages: [mug, mug2], description: "Start your day with a cup of encouragement. Each sip reminds you - and others - that hope is alive and worth sharing."
    },
    [NOTEBOOK_LARGE_PRODUCT_ID]: { 
        name: "Inspirational Journal", cost: "$20", img: notebookLarge, carouselImages: [notebookLarge, notebookLarge2, notebookLarge3], description: "Capture your thoughts, dreams, and prayers in our beautifully designed journal. Perfect for journaling your journey of faith, gratitude, and growth."
    },
    [NOTEBOOK_SMALL_PRODUCT_ID]: { 
        name: "Small Journal", cost: "$9", img: notebookSmall, carouselImages: [notebookSmall, notebookSmall2, notebookSmall3] 
    },
    [KEYCHAIN_PLASTIC_PRODUCT_ID]: { 
        name: "Key Chain", cost: "$6", img: keyChainPlastic, carouselImages: [keyChainPlastic, keyChains] 
    },
    [KEYCHAIN_WOOD_PRODUCT_ID]: { 
        name: "Wooden Key Chain", cost: "$6", img: keyChainWood, carouselImages: [keyChainWood, keyChains] 
    },
};