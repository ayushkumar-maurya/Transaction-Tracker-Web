const assetsPath = '/'

const menus = {
  home: [
    {
      title: 'Bank',
      icon: `${assetsPath}home/bank.png`,
      navPath: 'bank'
    },
    {
      title: 'Credit Card',
      icon: `${assetsPath}home/credit-card.png`,
      navPath: 'creditcard'
    },
    {
      title: 'Stock',
      icon: `${assetsPath}home/stock.png`,
      navPath: 'stock'
    },
    {
      title: 'Mutual Fund',
      icon: `${assetsPath}home/mutual-fund.png`,
      navPath: 'mutualfund'
    },
    {
      title: 'Misc',
      icon: `${assetsPath}home/misc.png`,
      navPath: 'misc'
    }
  ],

  bank: [
    {
      title: 'Banks',
      icon: `${assetsPath}bank/banks.png`,
      navPath: ''
    },
    {
      title: 'Add Bank',
      icon: `${assetsPath}bank/add-bank.png`,
      navPath: 'bank/add'
    }
  ],

  creditCard: [
    {
      title: 'Credit Cards',
      icon: `${assetsPath}credit-card/credit-cards.png`,
      navPath: ''
    },
    {
      title: 'Add Credit Card',
      icon: `${assetsPath}credit-card/add-credit-card.png`,
      navPath: 'creditcard/add'
    }
  ],

  stock: [
    {
      title: 'Stocks',
      icon: `${assetsPath}stock/stocks.png`,
      navPath: ''
    },
    {
      title: 'Add Stock',
      icon: `${assetsPath}stock/add-stock.png`,
      navPath: 'stock/add'
    }
  ],

  mutualFund: [
    {
      title: 'Mutual Funds',
      icon: `${assetsPath}mutual-fund/mutual-funds.png`,
      navPath: ''
    },
    {
      title: 'Add Mutual Fund',
      icon: `${assetsPath}mutual-fund/add-mutual-fund.png`,
      navPath: 'mutualfund/add'
    }
  ],

  misc: [
    {
      title: 'Misc Categories',
      icon: `${assetsPath}misc/misc-categories.png`,
      navPath: ''
    },
    {
      title: 'Add Misc Category',
      icon: `${assetsPath}misc/add-misc-category.png`,
      navPath: 'misc/add'
    }
  ]
}

export default menus
