
.wrapper{
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

}
.accordion{
  width: 500px;
}
.item{
  background-color: #f8f8f8;
  margin-bottom: 8px;
  padding: 10px 20px;
}
.title{
  color:#ff9001;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.content{
  color: black;
  max-height: 0;
  overflow: hidden;
  transform: all 0.5s cubic-bezier(0,1,0,1);

}
.content.show{
  height: auto;
  max-height: 9999px;
  transform: all 0.5s cubic-bezier(0,1,0,1);

}



import './App.css'
import { useState } from 'react';
function App() {
  const [selected, setSelected]=useState(null)
  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }
  return (

    
    
    <div className='wrapper'>
    <div className='accordion'>
    {data.map((item, i) => (
      <div className='item'>
        <div className='title' onClick={() => toggle(i)}>
          <h2>{item.question}</h2>
          <span>{selected === i ? '-' :'+'}</span>
        </div>
        <div className={selected === i ? 'content show' :'content'}>{item.answer}</div>
      </div>
      ))}
    </div>
    </div>
    
  )
}

const data = [  
      {
          question: "Lorem ipsum dolor sit amet1,",
          answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        question: "Lorem ipsum dolor sit amet2,",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
          ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
          In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
          Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      question: "Lorem ipsum dolor sit amet1,",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
        ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
        In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
        Fusce sed commodo purus, at tempus turpis.`,
  },
  {
    question: "Lorem ipsum dolor sit amet1,",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
      ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
      In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
      Fusce sed commodo purus, at tempus turpis.`,
},
      
  ]




export default App;
