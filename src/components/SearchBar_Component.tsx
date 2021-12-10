import React from 'react'
import { Image, TextInput, View } from 'react-native'
import { Styles } from '../styles/Styles'

export const SearchBar_Component = () => {
    const [text, onChangeText] = React.useState("");
    const searchImage = require("../../assets/search.png");
    return (
        <View style={Styles.sectionStyleInputSearch}>
        <TextInput
          style={Styles.inputSearch}
          onChangeText={onChangeText}
          placeholder="Buscar Empleado"
          value={text}
          underlineColorAndroid="transparent"
          placeholderTextColor= '#CACACA'
        />
        <Image
          source={searchImage}
          style={Styles.imageStyleInputSearch}
        />
      </View>
        
    )
}

