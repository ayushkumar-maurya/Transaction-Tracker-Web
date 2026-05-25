import colours from "../../colours"

const styles = {
  item: {
    display: 'flex',
    backgroundColor: colours.listItemBg,
    padding: 15
  },

  infoContainer: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0
  },
  name: {
    color: colours.listItemContent1,
    fontWeight: 'bold',
    marginBottom: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  desc: {
    color: colours.listItemContent2,
    fontSize: '0.85rem',
    marginBottom: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  amtContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    flexGrow: 0,
    flexShrink: 0
  },
  amt: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: 0
  },
  positiveAmt: {
    color: colours.positiveAmtFg
  },
  negativeAmt: {
    color: colours.negativeAmtFg
  },

  line: {
    margin: 0
  }
}

export default styles
