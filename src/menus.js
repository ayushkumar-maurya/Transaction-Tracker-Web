const assetsPath = '/'

const menus = {
  home: [
    {
      title: 'Bank',
      icon: `${assetsPath}home/bank.png`,
      navPath: 'bank',
      navParams: null
    },
    {
      title: 'Credit Card',
      icon: `${assetsPath}home/credit-card.png`,
      navPath: 'creditcard',
      navParams: null
    },
    {
      title: 'Stock',
      icon: `${assetsPath}home/stock.png`,
      navPath: 'stock',
      navParams: null
    },
    {
      title: 'Mutual Fund',
      icon: `${assetsPath}home/mutual-fund.png`,
      navPath: 'mutualfund',
      navParams: null
    },
    {
      title: 'Misc',
      icon: `${assetsPath}home/misc.png`,
      navPath: 'misc',
      navParams: null
    }
  ],

  bank: [
    {
      title: 'Banks',
      icon: `${assetsPath}bank/banks.png`,
      navPath: '',
      navParams: null
    },
    {
      title: 'Add Bank',
      icon: `${assetsPath}bank/add-bank.png`,
      navPath: 'bank/add',
      navParams: { method: 'POST', path: 'bank/bank' }
    }
  ],

  creditCard: [
    {
      title: 'Credit Cards',
      icon: `${assetsPath}credit-card/credit-cards.png`,
      navPath: '',
      navParams: null
    },
    {
      title: 'Add Credit Card',
      icon: `${assetsPath}credit-card/add-credit-card.png`,
      navPath: 'creditcard/add',
      navParams: { method: 'POST', path: 'creditcard/creditcard' }
    }
  ],

  stock: [
    {
      title: 'Stocks',
      icon: `${assetsPath}stock/stocks.png`,
      navPath: '',
      navParams: null
    },
    {
      title: 'Add Stock',
      icon: `${assetsPath}stock/add-stock.png`,
      navPath: 'stock/add',
      navParams: { method: 'POST', path: 'stock/stock' }
    }
  ],

  mutualFund: [
    {
      title: 'Mutual Funds',
      icon: `${assetsPath}mutual-fund/mutual-funds.png`,
      navPath: '',
      navParams: null
    },
    {
      title: 'Add Mutual Fund',
      icon: `${assetsPath}mutual-fund/add-mutual-fund.png`,
      navPath: 'mutualfund/add',
      navParams: { method: 'POST', path: 'mutualfund/mutualfund' }
    }
  ],

  misc: [
    {
      title: 'Misc Categories',
      icon: `${assetsPath}misc/misc-categories.png`,
      navPath: '',
      navParams: null
    },
    {
      title: 'Add Misc Category',
      icon: `${assetsPath}misc/add-misc-category.png`,
      navPath: 'misc/add',
      navParams: { method: 'POST', path: 'misc/misccategory' }
    }
  ]
}

export default menus
