import colours from "../colours";

const styles = {
  option: {
    display: 'flex',
    flexDirection: 'column',
    height: 150,
    width: 250,
    backgroundColor: colours.itemBg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    border: `1px solid ${colours.itemBorder}`,
    borderRadius: 15,
    cursor: 'pointer'
  },

  icon: {
    height: 70,
    width: 70
  },

  title: {
    color: colours.itemFg,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 230,
    textAlign: 'center'
  }
}

export default styles
