import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function HeaderTab(props) {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20,}}>
            <HeaderButton 
                text="Delivery" 
                btnColor="black" 
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            ></HeaderButton>
            <HeaderButton 
                text="Pickup" 
                btnColor="white" 
                textColor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            ></HeaderButton>
        </View>
    );
}


const HeaderButton = (props) => (
        <TouchableOpacity 
            style={{
                backgroundColor: props.activeTab == props.text ? "black" : "white",
                borderRadius: 30,
                paddingVertical: 6,
                paddingHorizontal: 16
            }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{
                color: props.activeTab == props.text ?  "white" : "black", 
                fontSize: 15, 
                fontWeight: "900"}}
            >{props.text}</Text>

        </TouchableOpacity>
);

