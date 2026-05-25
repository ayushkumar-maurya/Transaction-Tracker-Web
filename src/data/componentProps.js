const componentProps = {
  editTransaction: {
    bank: {
      add: {
        title: 'Add Transaction',
        method: 'POST',
        path: 'bank/transaction',
        categoriesInfo: { parent: 'Bank', path: 'bank/banks' }
      },
      update: {
        title: 'Update Transaction',
        method: 'PUT',
        path: 'bank/transaction',
        deletePath: 'bank/transaction',
        categoriesInfo: { parent: 'Bank', path: 'bank/banks' }
      }
    },

    creditCard: {
      add: {
        title: 'Add Transaction',
        method: 'POST',
        path: 'creditcard/transaction',
        categoriesInfo: { parent: 'Credit Card', path: 'creditcard/creditcards' }
      },
      update: {
        title: 'Update Transaction',
        method: 'PUT',
        path: 'creditcard/transaction',
        deletePath: 'creditcard/transaction',
        categoriesInfo: { parent: 'Credit Card', path: 'creditcard/creditcards' }
      }
    },

    stock: {
      add: {
        title: 'Add Transaction',
        method: 'POST',
        path: 'stock/transaction',
        categoriesInfo: { parent: 'Stock', path: 'stock/stocks' }
      },
      update: {
        title: 'Update Transaction',
        method: 'PUT',
        path: 'stock/transaction',
        deletePath: 'stock/transaction',
        categoriesInfo: { parent: 'Stock', path: 'stock/stocks' }
      }
    },

    mutualFund: {
      add: {
        title: 'Add Transaction',
        method: 'POST',
        path: 'mutualfund/transaction',
        categoriesInfo: { parent: 'Mutual Fund', path: 'mutualfund/mutualfunds' }
      },
      update: {
        title: 'Update Transaction',
        method: 'PUT',
        path: 'mutualfund/transaction',
        deletePath: 'mutualfund/transaction',
        categoriesInfo: { parent: 'Mutual Fund', path: 'mutualfund/mutualfunds' }
      }
    },

    misc: {
      add: {
        title: 'Add Transaction',
        method: 'POST',
        path: 'misc/transaction',
        categoriesInfo: { parent: 'Misc Category', path: 'misc/misccategories' }
      },
      update: {
        title: 'Update Transaction',
        method: 'PUT',
        path: 'misc/transaction',
        deletePath: 'misc/transaction',
        categoriesInfo: { parent: 'Misc Category', path: 'misc/misccategories' }
      }
    }
  },

  transactions: {
    bank: {
      title: 'Transactions',
      path: 'bank/transactions',
      updatePath: 'bank/transaction/update'
    },

    creditCard: {
      title: 'Transactions',
      path: 'creditcard/transactions',
      updatePath: 'creditcard/transaction/update'
    },

    stock: {
      title: 'Transactions',
      path: 'stock/transactions',
      updatePath: 'stock/transaction/update'
    },

    mutualFund: {
      title: 'Transactions',
      path: 'mutualfund/transactions',
      updatePath: 'mutualfund/transaction/update'
    },

    misc: {
      title: 'Transactions',
      path: 'misc/transactions',
      updatePath: 'misc/transaction/update'
    }
  },

  categories: {
    bank: {
      title: 'Banks',
      path: 'bank/amounts',
      updatePath: 'bank/update'
    },

    creditCard: {
      title: 'Credit Cards',
      path: 'creditcard/amounts',
      updatePath: 'creditcard/update'
    },

    stock: {
      title: 'Stocks',
      path: 'stock/amounts',
      updatePath: 'stock/update'
    },

    mutualFund: {
      title: 'Mutual Funds',
      path: 'mutualfund/amounts',
      updatePath: 'mutualfund/update'
    },

    misc: {
      title: 'Misc Categories',
      path: 'misc/amounts',
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
