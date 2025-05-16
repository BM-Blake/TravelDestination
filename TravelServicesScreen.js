import { View, Text, Pressable, ImageBackground } from 'react-native';
import { styles } from "./App";

const TravelServicesScreen = () => (
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.backgroundImage} blurRadius={5}>
        <View style={styles.container}>
            <Text style={styles.text}>Travel Services</Text>
            <Pressable>
                {({ pressed }) => (
                    <Text style={[styles.link, { color: pressed ? 'red' : 'blue' }]}>
                        Book a Flight
                    </Text>
                )}
            </Pressable>
        </View>
    </ImageBackground>
);
export default TravelServicesScreen