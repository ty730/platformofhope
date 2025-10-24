import towel from './../../images/store/poh-towel.jpg';
import tumbler from './../../images/store/tumbler-color-1.jpeg';
import mug from './../../images/store/mug-1.jpg';
import notebookLarge from './../../images/store/notebook-large-1.jpeg';
import notebookSmall from './../../images/store/notebook-small-1.jpeg';
import keyChainPlastic from './../../images/store/keychain-plastic.jpeg';
import keyChainWood from './../../images/store/keychain-wood.jpeg';
import coaster from './../../images/store/coaster.jpeg';
import pen from './../../images/store/pen-1.jpeg';

const TOWEL_PRODUCT_ID = "towel";
const TUMBLER_PRODUCT_ID = "tumbler";
const MUG_PRODUCT_ID = "mug";
const NOTEBOOK_LARGE_PRODUCT_ID = "notebook-large";
const NOTEBOOK_SMALL_PRODUCT_ID = "notebook-small";
const KEYCHAIN_PLASTIC_PRODUCT_ID = "keychain-plastic";
const KEYCHAIN_WOOD_PRODUCT_ID = "keychain-wood";
const COASTER_PRODUCT_ID = "coaster";
const PEN_PRODUCT_ID = "pen";

export const PRODUCTS = {
    [TOWEL_PRODUCT_ID]: { name: "Towel", cost: "$25", img: towel },
    [TUMBLER_PRODUCT_ID]: { name: "Tumbler", cost: "$25", img: tumbler },
    [MUG_PRODUCT_ID]: { name: "Mug", cost: "$25", img: mug },
    [NOTEBOOK_LARGE_PRODUCT_ID]: { name: "Large Notebook", cost: "$25", img: notebookLarge },
    [NOTEBOOK_SMALL_PRODUCT_ID]: { name: "Small Notebook", cost: "$25", img: notebookSmall },
    [KEYCHAIN_PLASTIC_PRODUCT_ID]: { name: "Key Chain", cost: "$10", img: keyChainPlastic },
    [KEYCHAIN_WOOD_PRODUCT_ID]: { name: "Wooden Key Chain", cost: "$10", img: keyChainWood },
    [COASTER_PRODUCT_ID]: { name: "Coaster", cost: "$10", img: coaster },
    [PEN_PRODUCT_ID]: { name: "Pen", cost: "$10", img: pen },
};