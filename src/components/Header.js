import React, { Component } from 'react';

import {Header} from 'react-native-elements'

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            // <View style={styles.header}>
            //     <Text style={styles.brand}>Remember</Text>
            //     <Button title="toggle" onPress={()=>{alert('ok dfdkflk')}} />
            // </View>
            <Header
             placement="left"
             leftComponent={{icon:'menu',color:'#fff'}}
             centerComponent={{text:'Remember',style:{color:'#fff',fontWeight:'bold'}}}
             rightComponent={{icon:'home',color:'#fff'}}
            />
         );
    }
}

// const styles = StyleSheet.create({
//     header:{
      
//         justifyContent:'space-between',
//         alignItems: 'center',
//         padding: 10,
//         flexDirection: 'row',
//         backgroundColor:'#42b3f4',
//         height:60
//     },
//     brand:{
//         fontSize:20,
//         color:'white',
//         fontWeight:'bold'
        
//     }
// })


export default Head;