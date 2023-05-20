import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center">
      <Text className="text-teal-100 font-bold text-4xl">Finish it!!</Text>
      <Text className="text-teal-100 font-bold text-4xl">Who are you?</Text>
      <Text className="text-teal-100 font-bold text-4xl">
        Did you now who i am? !!
      </Text>

      <StatusBar style="light" translucent />
    </View>
  )
}
