import {
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
import { colors } from "../theme/colors";

//* TYPES //
type inputProps = {
  title: string;
} & TextInputProps;

//* PLATFORM //
const andorid = Platform.OS == "android";

//* TEXT INPUT //
export const Input = ({ title, ...props }: inputProps) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContnr}>
        <TextInput
          {...props}
          placeholderTextColor={colors.grey}
          style={styles.inputTxt}
        />
      </View>
    </View>
  );
};

//* STYLES//
const styles = StyleSheet.create({
  main: {
    gap: 5,
  },
  title: {
    color: colors.white,
    fontWeight: "500",
  },
  inputContnr: {
    gap: 12,
    height: andorid ? "auto" : 50,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: "row",
    borderColor: colors.blue,
    borderCurve: "continuous",
  },
  inputTxt: {
    flex: 1,
    color: colors.white,
  },
});
