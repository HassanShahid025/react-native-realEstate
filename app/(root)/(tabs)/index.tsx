import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-red-500 text-2xl">Home</Text>
      <Link href="/sign-in">Signin</Link>
      <Link href="/explore">explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">property-1</Link>
    </View>
  );
}
