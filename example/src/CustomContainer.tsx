
import { type PropsWithChildren } from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';
type Props = {
  style?: StyleProp<ViewStyle>;
};
export const CustomContainer: React.FC<PropsWithChildren<Props>> = ({ children, style }) => {
  return (
    <View style={[style]} onTouchStart={(e) => e.stopPropagation()}>
      {children}
    </View>
  );
};
