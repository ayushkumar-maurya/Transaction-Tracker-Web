import colours from "./colours";

const styles = {
  container: {
    backgroundColor: colours.screenBg,
    padding: 0
  },

  childContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },

  empty: {
    height: 150,
    width: 250,
    margin: 10
  }
}

export default styles
