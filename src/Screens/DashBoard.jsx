import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Convert from "../Components/Basic/Convert";
import Navbar from "../Components/Navbar";

import headMark from "../../assets/Icons/dashboardmark.png";
import hostAvatar from "../../assets/Icons/hostavatar.png";
import startImage from "../../assets/Icons/Iconstar.png";
import messageImage from "../../assets/Icons/nav-chat.png";
import reservarImage from "../../assets/Icons/nav-reservas.png";
import payhistoryImge from "../../assets/Icons/payhistory.png";
import paytypeImge from "../../assets/Icons/paytype.png.png";
import addhostImge from "../../assets/Icons/addhost.png";
import boataddImge from "../../assets/Icons/boatadd.png";

const DashBoard = () => {
  const navigation = useNavigation();

  const nextStep = (url) => {
    navigation.navigate(url);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.head} className="flex">
          <View className="flex items-center">
            <Image source={headMark}></Image>
          </View>
          <Text style={styles.Title} className="mt-5">
            Dashboard
          </Text>
          <View className="flex flex-row items-center justify-start mt-3">
            <Image source={hostAvatar}></Image>
            <View className="flex ml-4">
              <Text style={styles.Name}>Julian</Text>
              <View className="flex flex-row items-center">
                <Image source={startImage}></Image>
                <Text style={styles.review}>SIN RESEÑAS</Text>
              </View>
            </View>
          </View>
          <Text className="mt-5" style={styles.statistics}>
            Tus estadisticas
          </Text>
          <View className="flex flex-row items-baseline justify-around mt-4">
            <View>
              <Text style={styles.responRate} className="text-center">
                N/A
              </Text>
              <Text style={styles.key} className="mt-2">
                Tasa de respuesta
              </Text>
            </View>
            <View>
              <Text className="p-2 text-white">0</Text>
              <Text style={styles.key} className="mt-1">
                Tasa de respuesta
              </Text>
            </View>
            <View>
              <Text className="p-2 text-white">$1000</Text>
              <Text style={styles.key} className="mt-1">
                Tasa de respuesta
              </Text>
            </View>
          </View>
        </View>
        <View
          style={styles.action}
          className="flex flex-row justify-between mt-4"
        >
          <View style={styles.card} className="flex flex-row items-center">
            <Text style={styles.item}>Mensajes</Text>
            <Image source={messageImage} className="ml-4"></Image>
          </View>
          <View style={styles.card} className="flex flex-row items-center">
            <Text style={styles.item}>Reservas</Text>
            <Image source={reservarImage} className="ml-4"></Image>
          </View>
        </View>
        <View className="flex flex-row items-center justify-start px-6">
          <Image source={payhistoryImge}></Image>
          <Text className="ml-6">Preferencias de Pago</Text>
        </View>
        <TouchableOpacity onPress={() => nextStep("PaymentHistory")}>
          <View className="flex flex-row items-center justify-start px-6 mt-2">
            <Image source={paytypeImge}></Image>
            <Text className="ml-6">Historial de Pago</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nextStep("HostProfile")}>
          <View className="flex flex-row items-center justify-start px-6 mt-3">
            <Image source={addhostImge}></Image>
            <Text className="ml-6">Agregar un gestor de embarcaciones</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nextStep("HostBoats")}>
          <View className="flex flex-row items-center justify-start px-6 mt-3">
            <Image source={boataddImge}></Image>
            <Text className="ml-6">Agregar Embarcación</Text>
          </View>
        </TouchableOpacity>
        <Convert></Convert>
      </ScrollView>
      <Navbar></Navbar>
    </>
  );
};

const styles = StyleSheet.create({
  head: {
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    backgroundColor: "#17233c",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  Title: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 26,
  },
  Name: {
    color: "#ffffff",
    fontSize: 17,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 27,
  },
  review: {
    color: "#ffffff",
    fontSize: 9,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 14,
  },
  statistics: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  key: {
    color: "#ffffff",
    fontSize: 13,
    fontFamily: "Lexend Deca",
    fontWeight: "600",
  },
  responRate: {
    borderRadius: 4,
    backgroundColor: "#dbdfe4",
    width: "50%",
    padding: 5,
  },
  action: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#efefef",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
    padding: 16,
  },
  item: {
    color: "#17233c",
    fontSize: 15,
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: 26,
  },
});
export default DashBoard;
