import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
// import {Header} from "./components/common";
import Header from "./components/common/Header";
// Import our LoginForm component to be displayed on the screen
import LoginForm from "./components/LoginForm";

class App extends Component {
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
  apiKey: "AIzaSyBOtt3jlELN_OG61n_tZd6qAFxYU5R-9W8",
    authDomain: "rnapp-auth-class1.firebaseapp.com",
    databaseURL: "https://rnapp-auth-class1.firebaseio.com",
    projectId: "rnapp-auth-class1",
    storageBucket: "rnapp-auth-class1.appspot.com",
    messagingSenderId: "456490350678"
});
}
render() {
return (
<View>
<Header  />
<LoginForm />
</View>
);
}
}

export default App;
