import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Photo from "../assets/photo.png";
import Video from "../assets/video.png";

const Home = () => {
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  const pickImage = async () => {
    // Request permission to access the media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library required!');
      return;
    }

    // Launch image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted'){
      alert('Permission to access media library required!');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos
    });
    if (!result.canceled){
      setVideo(result.uri);
    }
  }

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={pickImage}
        style={{
          position: 'relative',
        }}>
        <Image source={Photo} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={pickVideo}
        style =
        {{
          position:"relative"
        }}>
          <Image source={Video} style={{width: 20, height:20}} />
        </TouchableOpacity>
      {image ? <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> : null}
    </View>
  );
}

export default Home;
