import { createStore } from "vuex";

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
  };
  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }
  return string;
};

export default createStore({
  state: {
    women: [
      {
        title: "Go语言程序设计",
        src: require("@/assets/img/women/go16.png"),
        price: "GO LANGUAGE PROGRAMMING",
        description:
          "对于区块链专业学生来说，学习Go语言能显著提升他们的技术能力和职业前景。Go语言的静态类型和内存管理特性增强了代码的可靠性与安全性，这对于处理金融交易等高风险场景至关重要。许多知名的区块链项目，如Hyperledger Fabric和Ethereum的部分实现，都是用Go语言开发的，掌握这一语言可以帮助学生理解区块链的核心机制和底层实现。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 1,
      },

      {
        title: "计算机导论",
        src: require("@/assets/img/women/go1.png"),
        price: "IHTRODUCTIOH TO SOFTWARE EGIEERING",
        description:
          "学习计算机导论为区块链专业学生奠定基础，理解数据结构、算法及编程原理。它帮助学生掌握底层技术，促进对分布式账本、加密技术等区块链核心概念的深入理解，增强解决实际问题的能力，是构建专业技能的关键一步。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 2,
      },
      {
        title: "程序设计基础",
        src: require("@/assets/img/women/go2.png"),
        price: "FUNDAMENTALS OF PROGRAMIG DESIGN",
        description:
          "掌握重要程序设计基础，如数据结构、算法与编程语言，对区块链专业学生至关重要。这不仅强化逻辑思维与解决问题能力，还直接支持智能合约开发、链上数据分析等专业应用，是实现创新与安全设计的基础技能。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 3,
      },
      {
        title: "数据结构与算法",
        src: require("@/assets/img/women/go3.png"),
        price: "DATA STRUCTURE AND ALGORITHM",
        description:
          "数据结构与算法是区块链专业学生的基石，助力高效处理链上数据，优化智能合约性能，提升交易速度与安全性。掌握其原理，可深化对分布式账本技术的理解，推动创新应用开发。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 4,
      },
      {
        title: "Java语言程序设计",
        src: require("@/assets/img/women/go4.png"),
        price: "JAVA LANGUAGE PROGRAMMING",
        description:
          "在区块链专业中，学习Java至关重要。Java作为一种主流编程语言，广泛应用于区块链开发中。其强大的跨平台能力和丰富的库支持，使学生能够高效构建智能合约、去中心化应用（DApps）和区块链平台。此外，Java的面向对象特性有助于学生理解区块链中的复杂数据模型和系统设计，从而提升开发能力和工作竞争力。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 5,
      },
      {
        title: "数据库原理",
        src: require("@/assets/img/women/go5.png"),
        price: "DATABASE LANGUAGE PRIHCIPLE",
        description:
          "数据库原理帮助学生理解数据存储、管理和查询的基础，能够更好地设计和优化区块链的存储结构。虽然区块链具有去中心化的特点，但仍需要数据库知识来解决数据一致性和完整性问题。掌握数据库原理，有助于学生更深入地理解区块链的交易记录、智能合约存储及其与传统数据库的关系，为后续开发和研究打下坚实基础。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 6,
      },
      {
        title: "专业指导导论",
        src: require("@/assets/img/women/go6.png"),
        price: "GUIDANCE INTRODUCTION",
        description:
          "该课程为学生提供了区块链技术的基础知识框架，帮助他们理解行业发展动态和应用前景。通过了解各种区块链平台和工具，学生能够更清晰地定位自己的学习方向和职业规划。此外，专业指导导论还涵盖了区块链的伦理和法律问题，引导学生思考技术应用中的责任与风险。参与行业实践与案例分析，有助于学生将理论知识与实际项目结合，提升解决实际问题的能力。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 7,
      },
      {
        title: "计算机组成原理",
        src: require("@/assets/img/women/go7.png"),
        price: "COMPUTER COMPOSITION",
        description:
          "学习计算机组成原理对区块链专业学生至关重要，提供硬件层面的深刻理解，包括处理器、内存及网络架构。这有助于评估计算需求，设计时考虑硬件限制，增强去中心化应用的整体性能和安全性，在多环境中可靠运行。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 8,
      },
      {
        title: "操作系统",
        src: require("@/assets/img/women/go8.png"),
        price: "OPERATING OF SYSTEM",
        description:
          "学习操作系统对区块链专业学生至关重要，它深入解析进程管理、内存分配、文件系统及网络通信机制，优化区块链节点性能，增强系统安全性和稳定性，有效管理和调度系统资源，是开发高效、可靠去中心化应用的基础。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 9,
      },
      {
        title: "计算机网络",
        src: require("@/assets/img/women/go9.png"),
        price: "COMPUTER OF NETWORK",
        description:
          "学习计算机网络对区块链专业学生至关重要，它帮助理解数据传输、协议栈及网络安全，优化P2P网络设计，提升分布式系统的通信效率与可靠性，是构建安全、高效区块链网络的基础。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 10,
      },
      {
        title: "Web前端开发技术",
        src: require("@/assets/img/women/go10.png"),
        price: "WEB DEVELDFMEKT TECHOLOGY",
        description:
          "Web前端开发技术能帮助创建直观的用户界面，提升DApp（去中心化应用）用户体验。掌握HTML、CSS、JavaScript等技能，可以更好地展示链上数据，实现交互功能，促进区块链技术普及。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 11,
      },
      {
        title: "web前端开发框架",
        src: require("@/assets/img/women/go11.png"),
        price: "WEB FRAMEWORK DEVELFMENT",
        description:
          "Web前端开发框架对区块链专业学生至关重要，它简化了DApp界面的创建过程，提升了开发效率和用户体验。熟悉如React或Vue等框架，能够更轻松地集成智能合约，实现丰富的交互功能，加速去中心化应用的部署与普及。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 12,
      },
      {
        title: "密码学及应用",
        src: require("@/assets/img/women/go12.png"),
        price: "CRYPTOGRAPHY AND APPLICATION",
        description:
          "密码学及应用对区块链专业学生极为重要，它提供了数据加密、数字签名等技术基础，保障交易安全与隐私保护。掌握相关理论与实践，能增强区块链系统的安全性，是构建可信去中心化应用的核心技能。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 13,
      },
      {
        title: "动态网站开发技术",
        src: require("@/assets/img/women/go13.png"),
        price: "DYHAMTC WEBSITE DEVELDPMENT",
        description:
          "动态网站开发技术对区块链专业学生非常重要，它能帮助构建响应式、数据驱动的DApp前端，提升用户体验。掌握如数据库集成、服务器交互等技能，可以使去中心化应用更加灵活、高效，促进用户互动与数据可视化",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 14,
      },
      {
        title: "软件工程",
        src: require("@/assets/img/women/go14.png"),
        price: "SOFTWARE EHGIEERIHG",
        description:
          "学习软件工程对区块链专业学生至关重要，它涵盖需求分析、设计、测试与维护，确保开发出高质量的区块链应用。通过规范流程和团队协作，提升项目管理能力，保证DApp的可靠性与用户满意度。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 15,
      },
      {
        title: "区块链技术原理及应用",
        src: require("@/assets/img/women/go15.png"),
        price: "BLOCKCHAIN OF APPLICATIOH",
        description:
          "区块链技术原理及应用对专业学生至关重要，它提供核心技术如共识机制、智能合约的基础知识，并指导如何设计和实施实际应用，加强理论与实践结合，推动创新解决方案的发展。",
        type: "Top",
        color: "Black",
        brand: "核心课",
        gender: "hexin",
        id: 16,
      },
    ],
    men: [
      {
        title: "分布式计算",
        src: require("@/assets/img/men/web.png"),
        price: "DISTRIBUTED COMPUTIHG",
        description:
          "分布式计算对区块链专业学生非常重要，它涵盖了节点间通信、并发处理及容错机制，有助于理解区块链的P2P网络、共识算法，提升设计与优化去中心化系统的能力，确保网络高效、安全运行。",
        type: "Top",
        color: "Black",
        brand: "选修课",
        gender: "xuanxiu",
        id: 19,
      },
      {
        title: "信息安全技术",
        src: require("@/assets/img/web1.png"),
        price: "INFORMATIOH SECURITY TECHOLGY",
        description:
          "信息安全技术对区块链专业学生至关重要，它涉及加密方法、数据保护及安全协议，帮助学生掌握保护区块链系统免受攻击的技术，确保交易安全与用户隐私，是构建可靠去中心化应用的基础。",
        type: "Shoes",
        color: "Black",
        brand: "选修课",
        gender: "xuanxiu",
        id: 20,
      },
      {
        title: "区块链金融",
        src: require("@/assets/img/web2.png"),
        price: "BLOCKCHAIH OF FIHANCE",
        description:
          "区块链金融对专业学生至关重要，它介绍了数字货币、智能合约及金融去中心化应用（DeFi）的原理，帮助理解金融创新，如借贷、交易和保险的新模式，促进在金融科技领域的应用与发展。",
        type: "Top",
        color: "Brown",
        brand: "选修课",
        gender: "xuanxiu",
        id: 21,
      },
      {
        title: "Python金融",
        src: require("@/assets/img/web1.png"),
        price: "PYTHОN OF BLOCKCHAIN FIHANCE",
        description:
          "Python在金融中的应用对区块链专业学生很有价值，Python强大的数据处理和分析能力可以帮助进行市场分析、量化交易及风险管理，同时便于开发和测试基于区块链的金融工具与应用。",
        type: "Top",
        color: "Gold",
        brand: "选修课",
        gender: "xuanxiu",
        id: 22,
      },
      {
        title: "大数据技术及应用",
        src: require("@/assets/img/web4.png"),
        price: "BIG DATA TECHOLOGY AD APPLICATIO",
        description:
          "大数据技术及应用对区块链专业学生十分重要，它涵盖了数据收集、存储、处理及分析的方法，有助于从海量链上数据中提取有价值的信息，优化决策过程，支持复杂的数据驱动型区块链应用开发。",
        type: "Top",
        color: "Blue",
        brand: "选修课",
        gender: "xuanxiu",
        id: 23,
      },
      {
        title: "区块链工程实践",
        src: require("@/assets/img/web5.png"),
        price: "BLОCKCHATH TO EHGIEERIHG",
        description:
          "区块链工程实践对专业学生至关重要，它结合理论与实际操作，包括链上应用开发、测试、部署全流程，增强解决现实问题的能力，促进创新项目落地，是推动区块链技术应用和发展的重要环节。",
        type: "Accessories",
        color: "Gold",
        brand: "选修课",
        gender: "xuanxiu",
        id: 24,
      },
      {
        title: "区块链应用开发",
        src: require("@/assets/img/web6.png"),
        price: "BLOCKCHAIN TO APPLICATION",
        description:
          "区块链应用开发对专业学生至关重要，它涵盖DApp设计、智能合约编写及前端集成，帮助学生将理论应用于实践，开发安全、高效的去中心化应用，推动技术创新与实际场景落地。",
        type: "Shoes",
        color: "Red",
        brand: "选修课",
        gender: "xuanxiu",
        id: 25,
      },
      {
        title: "支付科技",
        src: require("@/assets/img/web7.png"),
        price: "PAYMENT OF TECHOLOGY",
        description:
          "支付科技对区块链专业学生非常重要，它涵盖电子支付系统、移动支付及加密货币交易，帮助理解现代支付流程与安全机制，促进设计新型支付解决方案，推动金融科技创新与发展。",
        type: "Top",
        color: "Brown",
        brand: "选修课",
        gender: "xuanxiu",
        id: 26,
      },
      {
        title: "供应链科技",
        src: require("@/assets/img/men/web9.png"),
        price: "SUPPLY CHAIH FIHANCE",
        description:
          "供应链科技对区块链专业学生非常重要，它涵盖物流追踪、库存管理及供应链优化，利用区块链提高透明度与效率，帮助学生设计防伪溯源、成本控制的解决方案，推动供应链管理现代化。",
        type: "Top",
        color: "Brown",
        brand: "选修课",
        gender: "xuanxiu",
        id: 27,
      },
      {
        title: "金融科技",
        src: require("@/assets/img/men/web10.png"),
        price: "FINANCE OF TECHOLOGY",
        description:
          "金融科技对区块链专业学生至关重要，它融合了金融与技术，涵盖支付系统、借贷平台、保险科技及投资管理等领域，帮助学生开发创新金融服务，提升金融市场的效率与安全性。",
        type: "Top",
        color: "Red",
        brand: "选修课",
        gender: "xuanxiu",
        id: 28,
      },
      {
        title: "web就业指导",
        src: require("@/assets/img/men/web11.png"),
        price: "WEB EMPLOYMENT GUIDANCE",
        description:
          "Web就业指导对区块链专业学生有重要帮助，它提供职业规划、技能要求及面试技巧，使学生了解行业需求，明确发展方向，提升求职竞争力，顺利进入Web或区块链相关领域工作。",
        type: "Top",
        color: "Red",
        brand: "选修课",
        gender: "xuanxiu",
        id: 29,
      },
      // {
      //   title: "Playing Card Pants",
      //   src: require("@/assets/img/men/12.jpeg"),
      //   price: 949.99,
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
      //   type: "Bottom",
      //   color: "Black",
      //   brand: "Undercover",
      //   gender: "xuanxiu",
      //   id: 30,
      // },
      // {
      //   title: "Castle Backpack",
      //   src: require("@/assets/img/men/13.jpeg"),
      //   price: 699.99,
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
      //   type: "Accessories",
      //   color: "Grey",
      //   brand: "Undercover",
      //   gender: "xuanxiu",
      //   id: 31,
      // },
      // {
      //   title: "Black Portrait Jacket",
      //   src: require("@/assets/img/men/14.jpeg"),
      //   price: 1299.99,
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
      //   type: "Top",
      //   color: "Black",
      //   brand: "Undercover",
      //   gender: "xuanxiu",
      //   id: 32,
      // },
      // {
      //   title: "Red Portrait Girl",
      //   src: require("@/assets/img/men/15.jpeg"),
      //   price: 699.99,
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
      //   type: "Top",
      //   color: "Red",
      //   brand: "Yohji Yamamoto",
      //   gender: "xuanxiu",
      //   id: 33,
      // },
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    tax: 5,
    shipping: 15,
  },
  getters: {
    allProducts: (state) => state.women.concat(state.men),
    getWomen: (state) => state.women,
    getMen: (state) => state.men,

    getCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,

    getSearchWord: (state) => state.searchWord,

    getFilteredProduct: (state) => state.filteredProducts,

    getProductByIdWomen: (state) => (id) =>
      state.women.find((women) => women.id === parseInt(id)),

    getProductByIdMen: (state) => (id) =>
      state.men.find((men) => men.id === parseInt(id)),

    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      return total.toFixed(2);
    },

    getTax: (state) => state.tax,
    getShipping: (state) => state.shipping,

    cartCheckoutPrice: (state) => {
      let total = 0;

      state.cart.forEach((item) => {
        total = item.quantityPrice + state.shipping;
        total = total + (total * state.tax) / 100;
      });
      return total.toFixed(2);
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity, size, quantityPrice }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.quantityPrice += productInCart.product.price;
        productInCart.quantityPrice =
          Math.round(productInCart.quantityPrice * 100) / 100;
        return;
      }
      state.cart.push({ product, quantity, size, quantityPrice });
    },

    REMOVE_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },

    GET_PRODUCT_DETAILS: (state, product) => {
      state.productDetails.push(product);
    },

    FILTERED_PRODUCTS(state, word) {
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredProducts = null;
      } else {
        state.searchWord = word;
        word = removerAcentos(word.trim().toLowerCase());
        state.filteredProducts = state.women
          .concat(state.men)
          .filter((product) => {
            return (
              product.title.toLowerCase().includes(word) ||
              product.brand.toLowerCase().includes(word) ||
              product.color.toLowerCase().includes(word) ||
              product.type.toLowerCase().includes(word)
            );
          });
      }
    },

    ORDER_SUCCESSFUL(state) {
      state.cart = [];
    },
  },
  actions: {
    addProductToCart: (
      { commit },
      { product, quantity, size, quantityPrice }
    ) => {
      commit("ADD_TO_CART", { product, quantity, size, quantityPrice });
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    filterProducts({ commit }, word) {
      commit("FILTERED_PRODUCTS", word);
    },
    orderSuccess({ commit }) {
      commit("ORDER_SUCCESSFUL");
    },
  },
  modules: {},
});
