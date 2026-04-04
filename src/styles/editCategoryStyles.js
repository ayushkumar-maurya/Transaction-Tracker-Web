import colours from "./colours"

const styles = {
  formContainer: {
    backgroundColor: colours.screenBg,
    paddingTop: 40,
    paddingBottom: 40
  },
  label: {
    margin: 0,
    color: colours.inputLabel
  },
  input: {
    marginBottom: 15,
    color: colours.textInput
  },
  textarea: {
    resize: 'none'
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15
  },
  button: {
    marginLeft: 15,
    marginRight: 15,
    color: colours.buttonFg,
    border: 'none'
  },
  editBtn: {
    backgroundColor: colours.buttonBg
  },
  deleteBtn: {
    backgroundColor: colours.buttonDanger
  },
  cancelBtn: {
    backgroundColor: colours.buttonCancel
  },
}

export default styles
