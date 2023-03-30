import { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

const initialState = {
  name: "",
  email: "",
  password: "",
};
const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    if (!isShowKeyboard) {
      return;
    }
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/bg.png")}
          style={styles.background}
        >
          {/* <Image
          source={require("../../assets/images/bg.png")}
          style={styles.background}
        /> */}
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            {/* <View> */}
            <View style={styles.formBg}>
              <View style={styles.avatar}>
                <Image />
                <TouchableOpacity
                  // onPress={handleAddAvatar}
                  activeOpacity={0.7}
                  style={styles.addAvatar}
                >
                  <Image
                    source={require("../../assets/add.png")}
                    style={styles.addBtn}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? 32 : 78,
                }}
              >
                <View>
                  <Text style={styles.title}>Register</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  value={state.name}
                  onChangeText={(value) =>
                    setState((prevState) => {
                      return { ...prevState, name: value };
                    })
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  // onBlur={(value = "")}
                  placeholderTextColor={"#BDBDBD"}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => {
                      return { ...prevState, email: value };
                    })
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  // onBlur={(value = "")}
                  placeholderTextColor={"#BDBDBD"}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => {
                      return { ...prevState, password: value };
                    })
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  // onBlur={(value = "")}
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                />
                {!isShowKeyboard && (
                  <TouchableOpacity
                    onPress={handleSubmit}
                    activeOpacity={0.7}
                    style={styles.btn}
                  >
                    <Text style={styles.btnText}>Sign Up</Text>
                  </TouchableOpacity>
                )}
                {!isShowKeyboard && (
                  <TouchableOpacity onPress={handleSubmit} activeOpacity={0.7}>
                    <Text style={styles.singInLink}>
                      Already have an account? Sign in
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  backgroundWrapper: {
    flex: 1,
  },
  background: {
    // position: "absolute",
    // width: "100%",
    // height: "100%",
    borderWidth: 2,
    borderColor: "red",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  avatar: {
    position: "absolute",

    left: 130,
    top: -60,

    height: 120,
    width: 120,
    borderRadius: 16,
    // borderWidth: 2,
    // borderColor: "red",
    backgroundColor: "#f6f6f6",
  },
  addAvatar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    right: -13,
    bottom: 14,

    height: 25,
    width: 25,

    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
  addBtn: {},
  title: {
    fontSize: 30,
    fontFamily: "Roboto-Regular",
    alignSelf: "center",
    color: "#212121",
    marginBottom: 32,
  },
  form: {
    marginHorizontal: 16,
  },
  formBg: {
    backgroundColor: "#fff",
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    paddingHorizontal: 16,
    height: 50,

    backgroundColor: "#F6F6F6",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    marginBottom: 16,
  },
  btn: {
    fontFamily: "Roboto-Regular",
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    marginBottom: 16,
    Top: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  singInLink: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    textAlign: "center",
  },
});
