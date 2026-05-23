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
  infoSecionContainer: {
    display: 'flex'
  },
  date: {
    flexGrow: 0,
    flexShrink: 0,
    paddingRight: 10,
    color: colours.listItemContent1,
    fontWeight: 'bold',
    marginBottom: 0
  },
  category: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
    color: colours.listItemContent1,
    fontWeight: 'bold',
    marginBottom: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  desc: {
    color: colours.listItemContent2,
    fontWeight: 'bold',
    marginBottom: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  remark: {
    color: colours.listItemContent2,
    marginBottom: 0,
    fontSize: '0.85rem',
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
    color: colours.listItemContent1,
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: 0
  },

  line: {
    margin: 0
  }
}

export default styles
