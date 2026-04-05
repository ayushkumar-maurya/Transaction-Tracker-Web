const componentProps = {
  categories: {
    bank: {
      pageTitle: 'Banks',
      path: 'bank/banks',
      updateInfo: {
        method: 'PUT',
        path: 'bank/bank'
      },
      deletePath: 'bank/bank'
    },

    creditCard: {
      pageTitle: 'Credit Cards',
      path: 'creditcard/creditcards',
      updateInfo: {
        method: 'PUT',
        path: 'creditcard/creditcard'
      },
      deletePath: 'creditcard/creditcard'
    },

    stock: {
      pageTitle: 'Stocks',
      path: 'stock/stocks',
      updateInfo: {
        method: 'PUT',
        path: 'stock/stock'
      },
      deletePath: 'stock/stock'
    },

    mutualFund: {
      pageTitle: 'Mutual Funds',
      path: 'mutualfund/mutualfunds',
      updateInfo: {
        method: 'PUT',
        path: 'mutualfund/mutualfund'
      },
      deletePath: 'mutualfund/mutualfund'
    },

    misc: {
      pageTitle: 'Misc Categories',
      path: 'misc/misccategories',
      updateInfo: {
        method: 'PUT',
        path: 'misc/misccategory'
      },
      deletePath: 'misc/misccategory'
    }
  },

  editCategory: {
    bank: {
      method: 'POST',
      path: 'bank/bank'
    },

    creditCard: {
      method: 'POST',
      path: 'creditcard/creditcard'
    },

    stock: {
      method: 'POST',
      path: 'stock/stock'
    },

    mutualFund: {
      method: 'POST',
      path: 'mutualfund/mutualfund'
    },

    misc: {
      method: 'POST',
      path: 'misc/misccategory'
    }
  }
}

export default componentProps
