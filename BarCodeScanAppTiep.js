import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.greeting}>Hello 👋🏻</Text>
                    <Text style={styles.username}>Christie Doe</Text>
                </View>
                <Image source={require('./assets/avatar.png')} style={styles.profileImage} />
            </View>
            <Text style={styles.insightsTitle}>Your Insights</Text>

            <View style={styles.row}>
                <Card title="Scan new" value="Scanned 483" image={require('./assets/scannew.png')} />
                <Card title="Counterfeits" value="Counterfeited 32" image={require('./assets/couter.png')} />
            </View>
            <View style={styles.row}>
                <Card title="Success" value="Checkouts 8" image={require('./assets/success.png')} />
                <Card title="Directory" value="History 26" image={require('./assets/directory.png')} />
            </View>
            <View style={styles.exploreMore}>
                <TouchableOpacity>
                    <Text style={styles.exploreText}>Explore More</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const thongbao = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.greeting}>Notifications</Text>
      </View>
  );
};

const ScanScreen = ({navigation}) => {
    return (
      <View style={styles.scanContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.backButtonText}>{'<'}</Text>
            </TouchableOpacity>
            <Image source={require('./assets/nuoccam.png')} style={styles.scanImage} />
            <View style={styles.productContainer}>
                <Image source={require('./assets/nuoccam.png')} style={styles.productImage} />
                <Text style={styles.productName}>Orange Juice   </Text>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('payment')}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const dongho = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.greeting}>lịch sử</Text>
      </View>
  );
};

const payment = ({navigation}) => {
  return (
      <View>
        <View style={styles.paymenthead}>
          <Buttonback color="#25D482" onPress={() => navigation.navigate('ScanScreen')}/>
          <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/checkout.png')} style={{top:80,left:22,width:180,height:32}} />
            <View style={{top:80,marginLeft:60}}>
                <Image source={require('./assets/tien.png')} style={{width:100,height:29,marginLeft:60,marginBottom:5}} />
                <Text style={{color:'#B1B1B1',fontSize:20,fontWeight:400}}>Icluding GST(18%)</Text>
            </View>
          </View>
        </View>
        <View>
            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',backgroundColor:'#F8F8FB',width:340,height:80,marginLeft:50,borderRadius:16}}>
                <TouchableOpacity style={{backgroundColor: '#25D482',borderRadius: 16,flexDirection: 'row',justifyContent:'center',alignItems: 'center',width:170,height:80}}>
                    <Text style={{fontSize: 16,color: '#FFFFFF',fontWeight:600}}>Credit card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#F8F8FB',borderTopRightRadius: 16,borderBottomRightRadius:16,flexDirection: 'row',justifyContent:'center',alignItems: 'center',width:170,height:80}}>
                    <Image source={require('./assets/apple.jpg')} style={{width: 25, height: 31, marginRight: 10}}></Image>
                    <Text style={{fontSize: 16,color: '#3A3C3F',fontWeight:600}}>Apple Pay</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:35,marginTop:20}}>
                <Text style={{fontFamily: 'Helvetica Now Display',fontWeight: 600,fontSize: 18}}>
                    Card number
                </Text>
                <TextInput  style={{width: 355,height: 56,borderRadius: 16,marginTop: 10,backgroundColor: '#F8F8FB',paddingLeft: 20}}>
                    
                </TextInput>
            </View>
            <View style={{marginLeft:35,marginTop:20}}>
                <Text style={{fontFamily: 'Helvetica Now Display',fontWeight: 600,fontSize: 18}}>
                    Cardholder name 
                </Text>
                <TextInput style={{width: 355,height: 56,borderRadius: 16,marginTop: 10,backgroundColor: '#F8F8FB',paddingLeft: 20}}>
                    
                </TextInput>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{marginLeft:35,marginTop:20}}>
                    <Text style={{fontFamily: 'Helvetica Now Display',fontWeight: 600,fontSize: 18}}>
                        Expiry date
                    </Text>
                    <TextInput style={{width: 156,height: 56,borderRadius: 16,marginTop: 10,backgroundColor: '#F8F8FB',paddingLeft: 20}}>
                        
                    </TextInput>
                </View>
                <View style={{marginLeft:35,marginTop:20}}>
                <Text style={{fontFamily: 'Helvetica Now Display',fontWeight: 600,fontSize: 18}}>
                    CVV / CVC
                </Text>
                <TextInput style={{width: 156,height: 56,borderRadius: 16,marginTop: 10,backgroundColor: '#F8F8FB',paddingLeft: 20}}>
                </TextInput>
            </View>
            </View>
            <Text style={{color:'#B1B1B1',textAlign:'center',width:290,marginLeft:70,marginTop:50,fontSize:14,fontWeight:600}}>We will send you an order details to your email after the successfull payment</Text>
            <TouchableOpacity style={{width:335,height:62,backgroundColor:'#25D482',borderRadius:16,justifyContent:'center',alignItems:'center',marginLeft:40,marginTop:30,flexDirection:'row'}}
            onPress={() => navigation.navigate('SuccessScreen')}>
                <Image source={require('./assets/khoa.png')}></Image>
                <Text style={{color:'#FFFFFF',fontSize:20,fontWeight:600,marginLeft:10}}>
                    Pay for the order
                </Text>
            </TouchableOpacity>
        </View>
      </View>
  );
};
const SuccessScreen = ({navigation}) => {
    return (
        <View style={{backgroundColor:'white',height:'100%'}}>
            <Buttonback color="#5A6CF3" onPress={() => navigation.navigate('payment')}/>
            <View style={{marginTop:100,height:280.39,width:250.55,marginLeft:75}}>
                <Image source={require('./assets/hoadon.png')}></Image>
            </View>
            <Text style={{fontFamily: 'Helvetica Now Display',fontWeight: 700,fontSize: 18,marginTop:50,textAlign:'center'}}>Payment Success, Yayy!</Text>
            <Text style={{textAlign:'center',marginTop:20,fontSize:16,color:'#7A7A7A',width:300,marginLeft:65}}
            >we will send order details and invoice in your contact no. and registered email</Text>
            <Image source={require('./assets/checkdetails.png')}
            style={{marginTop:30,marginLeft:150}}></Image>
            <TouchableOpacity style={{backgroundColor:'#5A6CF3',width:334,height:62,borderRadius:16,justifyContent:'center',alignItems:'center',marginLeft:40,marginTop:40}}>
                <Text style={{color:'white',fontSize:20,fontWeight:600}}>
                    Download Invoice
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const Card = ({ title, value, image }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardValue}>{value}</Text>
        </View>
    );
};
 
const Buttonback = ({color,onPress}) => {
    return (
        <TouchableOpacity style={{
            width: 60,
            height: 60,
            top: 57,
            left: 20,
            borderRadius: 9,
            backgroundColor:'#F8F8FB',
            justifyContent: 'center',
            alignItems: 'center',
        }} onPress={onPress}>
            <Text style={{color:color,fontSize:25,fontWeight:600}}>{'<'}</Text>
        </TouchableOpacity>
    );
}

const BarCodeScanAppTiep = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        position: 'absolute',
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 30,
                        height: 70,
                        shadowColor: '#7F5DF0',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.5,
                        elevation: 5,
                    },
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/nha.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="thongbao" 
                    component={thongbao} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/thongbao.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="ScanScreen" 
                    component={ScanScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/scan.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="dongho" 
                    component={dongho} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/dongho.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="payment" 
                    component={payment} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/giohang.png')} style={{ width: size, height: size, tintColor: color }} />
                        ),
                        headerShown: false,
                        tabBarStyle: { display: 'none' },
                    }}
                />
                <Tab.Screen 
                    name="SuccessScreen" 
                    component={SuccessScreen} 
                    options={{
                        headerShown: false,
                        tabBarStyle: { display: 'none' },
                        tabBarIconStyle: { display: 'none' },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    headerText: {
        flexDirection: 'column',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    greeting: {
        fontSize: 24,
        margin: 0,
    },
    username: {
        fontSize: 16,
        color: '#666',
    },
    insightsTitle: {
        fontSize: 20,
        color: '#333',
        marginLeft: 20,
        paddingBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        width: 158,
        height: 176,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 30,
        margin: 10,
        width: '45%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        alignItems: 'center',
    },
    cardImage: {
        width: 55,
        height: 55,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        marginBottom: 5,
    },
    cardValue: {
        fontSize: 16,
    },
    exploreMore: {
        alignItems: 'center',
        marginTop: 20,
    },
    exploreText: {
        color: '#007bff',
        fontSize: 16,
    },
    scanContainer: {
      flex: 1,
      backgroundColor: '#f9f9f9',
    },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 1,
      backgroundColor: '#FFFFFFB2',
      borderRadius: 5,
      width: 45,
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backButtonText: {
        fontSize: 24,
        color: '#5A6CF3',
    },
    scanImage: {
      width: '100%',
      height:750,
      alignSelf: 'center',
      position: 'relative',
    },
    productContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginHorizontal: 20,
      marginTop: 20,
      position: 'absolute',
      marginTop:650,
      marginLeft:85
    },
    productImage: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    productName: {
        fontSize: 18,
        color: '#333',
    },
    addButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 45,
      height: 44,
      backgroundColor: '#5A6CF3',
      padding: 10,
      borderRadius: 5,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    paymenthead: {
        height: 253,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        backgroundColor: '#F8F8FB',
        shadowColor: '#01763F', 
        shadowOffset: { width: 1, height: 5 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation: 5,
        position:'relative'
    }
});

export default BarCodeScanAppTiep;