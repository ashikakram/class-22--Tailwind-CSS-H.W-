tailwind.config = {
    theme: {
      extend: {
        // customize css start 
        colors: {
          navcolor: '#160C6D',
          hovColor:'#1BBF00',
          contactColor:'#1BBF00',
          overlay:'#6B62C5',
          btncolor:'#1BBF00',
          gallery:'#C4C4C4',
          overview_gallery:'#F9F9FB'



        },
        opacity: {
          overlay: '.9',
          btncolor:'1',
          navcolor:'.7'
       
          

        },

        zIndex: {
          z: '100',
        },
        maxWidth: {
          commonContainer: '1170px',
        },
        fontSize: {
          sm: '0.8rem',

        },
        fontFamily: {
          open: ['Open Sans'],
          papri:['Paprika'],
         
        },
        backgroundImage: {
          banner: "url('./image/image.png')",
         
        },



        // customize css end
      }
    }
  }