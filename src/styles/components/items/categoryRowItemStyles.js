import colours from "../../colours"

const styles = {
  item: {
    backgroundColor: colours.listItemBg,
    padding: 15
  },
  name: {
    color: colours.listItemTitle,
    fontWeight: 'bold',
    marginBottom: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  desc: {
    color: colours.listItemDesc,
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
