import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, ViewStyle } from 'react-native';
import { EmptyList } from '../empty-list';

interface CustomFlatListProps<T> extends Omit<FlatListProps<T>, 'keyExtractor' | 'renderItem'> {
    keyExtractor?: (item: T, index: number) => string;
    renderItem: ListRenderItem<T>;
    emptyList?: React.ReactElement;
    contentContainerStyle?: ViewStyle;

}

const CustomFlatList = <T,>({ keyExtractor, renderItem, emptyList, contentContainerStyle, ...props }: CustomFlatListProps<T>) => {
    const defaultKeyExtractor = (item: T, index: number) => index.toString();
    const defaultContentContainerStyle: ViewStyle = {
        flexGrow: 1,
    };
    const mergedProps = {
        ...props,
        keyExtractor: keyExtractor || defaultKeyExtractor,
        ListEmptyComponent: emptyList || <EmptyList />,
        renderItem,
        contentContainerStyle: [defaultContentContainerStyle, contentContainerStyle],
    };

    return <FlatList<T> {...mergedProps} />;
};



export default CustomFlatList;
