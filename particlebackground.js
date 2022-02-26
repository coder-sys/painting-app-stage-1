import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Particles from 'react-tsparticles';
export default  function ParticleBackground() {
    return(
    <Particles options={{
        background:{
            color:'#0000'
        },
        fpsLimit:50,
        interactivity:{
            detect_on:"canvas",
            events:{
                resize:true
            },

        },
        particles:{
            color:{
                value:'9fafca'
            },
            number:{
                density:{
                    enable:true,
                    area:1080
                },
                limit:0,
                value:400,

            },
            opacity:{
                animation:{
                    enable:true,
                    minimumValue:0.05,
                    speed:3,
                    sync:true
                },
                random:{
                    enable:true,
                    minimumValue:0.05,
                },
                value:12,

            },
            shape:{
                type:'square'
            },
            size:{
                random:{
                    enable:true,
                    minimumValue:0.5
                },
                value:2.
            }
        
                
            
        }
    }}/>
    )
}
