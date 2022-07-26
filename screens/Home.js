import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTab from '../components/home/HeaderTab';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';

export default function Home(props) {
    const [restaurantsData, setRestaurantsData] = useState(localRestaurants);

    return (
        <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
            <View style={{backgroundColor: 'white', padding: 15}}>
                <HeaderTab />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantsData={restaurantsData}/>
            </ScrollView>
            <BottomTabs />
        </SafeAreaView>
    );
}
