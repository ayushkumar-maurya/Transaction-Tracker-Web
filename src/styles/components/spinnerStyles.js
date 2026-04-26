import colours from "../colours"

const styles = {
  container: {
    display: 'flex',
    position: 'absolute',
    zIndex: 999,
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colours.spinnerBg
  },
  spinner: {
    color: colours.spinner
  }
}

export default styles
