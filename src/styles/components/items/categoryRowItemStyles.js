import colours from "../../colours"

const styles = {
  item: {
    backgroundColor: colours.listItemBg,
    padding: 15
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
  line: {
    margin: 0
  }
}

export default styles
