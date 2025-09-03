import React from 'react';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import Icon from 'react-native-vector-icons/MaterialIcons'; // <--- You need this import for the icon2 prop usage


const DrawerHomeCard = ({
  icon1,
  icon2, // This is expected to be a string (icon name)
  label1,
  label2,
  br = 0,
  containerStyle,
  onPress = () => {},
  // color, // <--- Add this if you intend to use the color prop
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Row
        style={[
          styles.homeContainer,
          containerStyle,
          {
            borderRadius: mvs(br),
          },
        ]}>
        <Row>
          {icon1 && (
            // {icon1} <--- THIS IS THE PRIMARY SYNTAX ERROR
            icon1 // Correct way to render a passed React element
          )}
          <Medium
            label={label1}
            fontSize={mvs(18)}
            color={colors.black}
            style={{marginLeft: mvs(10)}}
          />
        </Row>
        { // This outer curly brace for conditional rendering is unnecessary
          <Row style={{marginRight: mvs(22)}}>
            {label2 && (
              <>
                {icon2 && (
                  <Icon
                    name={icon2}
                    size={mvs(20)}
                    // color={color.black} // <--- 'color' is undefined here unless passed as a prop
                    color={colors.black} // Assuming you want a default black
                  />
                )}
                <Medium label={label2} fontSize={mvs(15)} />
              </>
            )}
          </Row>
        }
      </Row>
    </TouchableOpacity>
  );
};

export default DrawerHomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: mvs(30),
  },
  profileContainer: {
    paddingHorizontal: mvs(30),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeContainer: {
    backgroundColor: colors.white,
    height: mvs(48),
    width: width - 100,
    marginHorizontal: mvs(17),
    paddingHorizontal: mvs(17.5),
    alignItems: 'center',
    marginBottom: mvs(30),
  },
});