import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeProfile } from "../../Actions/Auth/auth.acitons";

import CustomTextInput from "../Basic/Input";

const Personal = () => {
  const dispatch = useDispatch();

  const curuser = useSelector((state) => state.Slice.user);
  const [user, setUser] = useState({
    firstName: curuser.firstName,
    lastName: curuser.lastName,
    email: curuser.email,
    phoneNumber: curuser.phoneNumber,
    birthDay:
      String(new Date(curuser.birthDay).getUTCMonth() + 1) +
      "/" +
      String(new Date(curuser.birthDay).getUTCDate()).padStart(2, "0") +
      "/" +
      new Date(curuser.birthDay).getUTCFullYear(),
    address: curuser.address,
    country: curuser.country,
    city: curuser.city,
    bio : curuser.bio
  });
  const [isEdit, setEdit] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevData) => ({
      ...prevData,
      [name]: value, // Update the 'year' property
    }));
  };

  const handleSubmit = async () => {
    const result = await dispatch(changeProfile(curuser._id, user));
    if (result.errors) {
      setErrorMessages(result.errors);
    } else {
      setUser({
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        phoneNumber: result.phoneNumber,
        birthDay:
          String(new Date(result.birthDay).getUTCMonth() + 1) +
          "/" +
          String(new Date(result.birthDay).getUTCDate()).padStart(2, "0") +
          "/" +
          new Date(result.birthDay).getUTCFullYear(),
        address: result.address,
        country: result.country,
        city: result.city,
        bio : result.bio
      });
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.Title}>User Information</Text>
        <View className="mt-7">
          <Text style={styles.key}>FirstName</Text>

          {!isEdit && <Text style={styles.value}>{user.firstName}</Text>}
          {isEdit && (
            <CustomTextInput
              value={user.firstName} // Ensure you're using the correct property
              onChange={handleChange}
              name="firstName"
            ></CustomTextInput>
          )}
          {errorMessages.firstName && (
            <Text style={styles.error}>{errorMessages.firstName}</Text>
          )}
        </View>
        <View className="mt-2">
          <Text style={styles.key}>LastName</Text>

          {!isEdit && <Text style={styles.value}>{user.lastName}</Text>}
          {isEdit && (
            <CustomTextInput
              value={user.lastName} // Ensure you're using the correct property
              onChange={handleChange}
              name="lastName"
            ></CustomTextInput>
          )}
          {errorMessages.lastName && (
            <Text style={styles.error}>{errorMessages.lastName}</Text>
          )}
        </View>
        <View className="mt-2">
          <Text style={styles.key}>Email</Text>
          {!isEdit && <Text style={styles.value}>{user.email}</Text>}
          {isEdit && (
            <CustomTextInput
              value={user.email}
              onChange={handleChange}
              name="email"
            ></CustomTextInput>
          )}
          {errorMessages.email && (
            <Text style={styles.error}>{errorMessages.email}</Text>
          )}
        </View>
        <View className="mt-2">
          <Text style={styles.key}>Telephone Number</Text>
          {!isEdit && <Text style={styles.value}>{user.phoneNumber}</Text>}
          {isEdit && (
            <CustomTextInput
              value={user.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
            ></CustomTextInput>
          )}
        </View>
        <View className="mt-2">
          <Text style={styles.key}>Birthday</Text>
          {!isEdit && <Text style={styles.value}>{user.birthDay}</Text>}
          {isEdit && (
            <CustomTextInput
              value={user.birthDay}
              onChange={handleChange}
              name="birthDay"
              placeholder="01/01/1990"
            ></CustomTextInput>
          )}
          {errorMessages.birthDay && (
            <Text style={styles.error}>{errorMessages.birthDay}</Text>
          )}
        </View>
        <View className="mt-2">
          <Text style={styles.key}>Address</Text>
          {!isEdit && <Text style={styles.value}>{user.address}</Text>}
          {isEdit && (
            <CustomTextInput
              value={user.address}
              onChange={handleChange}
              name="address"
              placeholder="Calle Falsa 123"
            ></CustomTextInput>
          )}
        </View>
        <View className="mt-2">
          <Text style={styles.key}>Country</Text>
          {!isEdit && <Text style={styles.value}>{user.country}</Text>}
          {isEdit && (
            <CustomTextInput
              value={user.country}
              onChange={handleChange}
              name="country"
              placeholder="Argentina"
            ></CustomTextInput>
          )}
        </View>
        <View className="mt-2">
          <Text style={styles.key}>City</Text>
          {!isEdit && <Text style={styles.value}>{user.city}</Text>}
          {isEdit && (
            <CustomTextInput
              value={user.city}
              onChange={handleChange}
              name="city"
              placeholder="Buenos Aires"
            ></CustomTextInput>
          )}
        </View>
        <View className="mt-2">
            <Text style={styles.key}>Bio</Text>
            {!isEdit && <Text style={styles.value}>{user.bio}</Text>}
            {isEdit && (
            <CustomTextInput
              value={user.bio}
              onChange={handleChange}
              name="bio"
            ></CustomTextInput>
          )}
        </View>
        <View className="flex items-center mt-3">
          <TouchableOpacity
            onPress={() => {
              if(isEdit){
                handleSubmit();
              }else{
                setEdit(!isEdit)
              }
            }}
          >
            <Text
              style={[
                styles.button,
                { backgroundColor: isEdit ? "#2a8500" : "#0a4195" },
              ]}
              className="text-center w-80"
            >
              {isEdit == true ? "Guardar" : "Editar"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 45,
    marginRight: 45,
  },
  Title: {
    paddingTop: 20,
    color: "#030303", 
    fontSize: 20, 
    fontFamily: "Lexend Deca",
    fontWeight: "700",
  },
  key: {
    color: "#17233c",
    fontSize: 17, 
    fontFamily: "Lexend Deca", 
    lineHeight: 20,
    fontWeight: "500", 
  },
  value: {
    color: "#17233c", 
    fontSize: 18,
    fontFamily: "Lexend Deca",
    fontWeight: "700",
    lineHeight: 20,
    marginTop : 5,
  },
  button: {
    backgroundColor: "#0a4195", 
    borderRadius: 8, 
    padding: 15,
    margin: 10,
    color: "#ffffff", 
    fontSize: 14, 
    fontFamily: "Lexend Deca", 
    fontWeight: "500",
    lineHeight: 16,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
});
export default Personal;
