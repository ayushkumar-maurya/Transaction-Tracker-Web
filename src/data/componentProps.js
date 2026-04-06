const componentProps = {
  categories: {
    bank: {
      title: 'Banks',
      path: 'bank/banks',
      updatePath: 'bank/update'
    },

    creditCard: {
      title: 'Credit Cards',
      path: 'creditcard/creditcards',
      updatePath: 'creditcard/update'
    },

    stock: {
      title: 'Stocks',
      path: 'stock/stocks',
      updatePath: 'stock/update'
    },

    mutualFund: {
      title: 'Mutual Funds',
      path: 'mutualfund/mutualfunds',
      updatePath: 'mutualfund/update'
    },

    misc: {
      title: 'Misc Categories',
      path: 'misc/misccategories',
      updatePath: 'misc/update'
    }
  },

  editCategory: {
    bank: {
      add: {
        method: 'POST',
        path: 'bank/bank'
      },
      update: {
        method: 'PUT',
        path: 'bank/bank',
        deletePath: 'bank/bank'
      }
    },

    creditCard: {
      add: {
        method: 'POST',
        path: 'creditcard/creditcard'
      },
      update: {
        method: 'PUT',
        path: 'creditcard/creditcard',
        deletePath: 'creditcard/creditcard'
      }
    },

    stock: {
      add: {
        method: 'POST',
        path: 'stock/stock'
      },
      update: {
        method: 'PUT',
        path: 'stock/stock',
        deletePath: 'stock/stock'
      }
    },

    mutualFund: {
      add: {
        method: 'POST',
        path: 'mutualfund/mutualfund'
      },
      update: {
        method: 'PUT',
        path: 'mutualfund/mutualfund',
        deletePath: 'mutualfund/mutualfund'
      }
    },

    misc: {
      add: {
        method: 'POST',
        path: 'misc/misccategory'
      },
      update: {
        method: 'PUT',
        path: 'misc/misccategory',
        deletePath: 'misc/misccategory'
      }
    }
  }
}

export default componentProps
