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
      title: 'Add Transaction',
      icon: `${assetsPath}bank/add-transaction.png`,
      navPath: 'bank/transaction/add'
    },
    {
      title: 'Banks',
      icon: `${assetsPath}bank/banks.png`,
      navPath: 'bank/banks'
    },
    {
      title: 'Add Bank',
      icon: `${assetsPath}bank/add-bank.png`,
      navPath: 'bank/add'
    }
  ],

  creditCard: [
    {
      title: 'Add Transaction',
      icon: `${assetsPath}credit-card/add-transaction.png`,
      navPath: 'creditcard/transaction/add'
    },
    {
      title: 'Credit Cards',
      icon: `${assetsPath}credit-card/credit-cards.png`,
      navPath: 'creditcard/creditcards'
    },
    {
      title: 'Add Credit Card',
      icon: `${assetsPath}credit-card/add-credit-card.png`,
      navPath: 'creditcard/add'
    }
  ],

  stock: [
    {
      title: 'Add Transaction',
      icon: `${assetsPath}stock/add-transaction.png`,
      navPath: 'stock/transaction/add'
    },
    {
      title: 'Stocks',
      icon: `${assetsPath}stock/stocks.png`,
      navPath: 'stock/stocks'
    },
    {
      title: 'Add Stock',
      icon: `${assetsPath}stock/add-stock.png`,
      navPath: 'stock/add'
    }
  ],

  mutualFund: [
    {
      title: 'Add Transaction',
      icon: `${assetsPath}mutual-fund/add-transaction.png`,
      navPath: 'mutualfund/transaction/add'
    },
    {
      title: 'Mutual Funds',
      icon: `${assetsPath}mutual-fund/mutual-funds.png`,
      navPath: 'mutualfund/mutualfunds'
    },
    {
      title: 'Add Mutual Fund',
      icon: `${assetsPath}mutual-fund/add-mutual-fund.png`,
      navPath: 'mutualfund/add'
    }
  ],

  misc: [
    {
      title: 'Add Transaction',
      icon: `${assetsPath}misc/add-transaction.png`,
      navPath: 'misc/transaction/add'
    },
    {
      title: 'Misc Categories',
      icon: `${assetsPath}misc/misc-categories.png`,
      navPath: 'misc/misccategories'
    },
    {
      title: 'Add Misc Category',
      icon: `${assetsPath}misc/add-misc-category.png`,
      navPath: 'misc/add'
    }
  ]
}

export default menus
