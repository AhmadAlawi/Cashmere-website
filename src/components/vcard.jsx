import React from 'react';
import counterData from '../data/counterData';
import Counter from '../components/common/Counter';


const {
    StyleSheet,
    View,
    Image
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch"
    },
    cover: {
        flex: 1,
        width: null,
        height: null
    }
});


const Vcard = () => {
    return (
      <>
      <section className='imagevcard'>
        <div className='img-vcard'>
        <img src="assets/img/about/cta/gpu-server.jpg" alt="cta-img"  />
        </div>
      </section>
        {/* <section className="tpfact-area">
          <div className="container">
            <div className="row g-0">
              {counterData.map(item => {
                return (
                  <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                    <div className={`tpfact__item tpfact__item-df tpfact-border-right text-center mb-30 
                       ${item.border === false && 'border-end-0'}`}>
                      <div className="fact-icon mb-40">
                        <img src={item.iconImg} alt="fact-icon" />
                      </div>
                      <div className="fact-number mb-20">
                        <Counter number={item.number} />
                      </div>
                      <span className="fact-title">{item.title}</span>
                    </div>
                  </div>
                )
              })}
  
            </div>
          </div>
        </section> */}
        
            <View style={styles.container}>
                <Image source={require("image!my_image")} style={styles.cover}>
                    ...
                </Image>
            </View>
        
      </>
    );
  };
  
  export default Vcard;