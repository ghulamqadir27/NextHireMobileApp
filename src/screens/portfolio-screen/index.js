import * as IMG from 'assets/images';
import { mvs} from 'config/metrices';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {
  SearchInput,
} from 'components/atoms/inputs';
import Bold from 'typography/bold-text';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import {useNavigation} from '@react-navigation/native';
import CustomFlatList from 'components/atoms/custom-flatlist';
import PortfolioCard from 'components/molecules/modals/portfolio-card';

const PortfolioScreen = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const portfolioType = [
    {
      id: 0,
      title: 'Mobile App Development',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      category: 'Mobile App Development',
    },
    {
      id: 1,
      title: 'Web Development',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      category: 'Web Development',
    },
  ];
  const renderItem = ({item}) => <PortfolioCard item={item} />;

  return (
    <ScrollView style={styles.container}>
      <Row style={{marginTop: mvs(15), alignItems: 'center'}}>
        <Bold label={'Portfolio'} fontSize={18} color={colors.primary} />
        <TouchableOpacity onPress={() =>navigate("AddPortfolio")}>
          <Image source={IMG.add} style={styles.img} resizeMode="contain" />
        </TouchableOpacity>
      </Row>
      <SearchInput
        containerStyle={styles.searchInputContainer}
      />
      <View style={{marginTop: mvs(20)}}>
        <CustomFlatList
          showsVerticalScrollIndicator={false}
          data={portfolioType}
          renderItem={renderItem}
          contentContainerStyle={{
            backgroundColor: colors.white,
            marginTop: mvs(10),
          }}
        />
      </View>
      </ScrollView>
  );
};
export default PortfolioScreen;
