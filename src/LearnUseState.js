import { useState } from "react";

const courses = [
  {
    id: 1,
    name : "React Js" ,
    coin : 150
  },
  {
    id: 2,
    name : "HTML CSS" ,
    coin : 200
  },
  {
    id: 3,
    name : "Web Reponsive",
    coin : 300
  }
]

function LearnUseState() {
  const [total , setTotal] = useState()
  const [checked, setChecked] = useState([])
  const handleClick = () => {
    let totalValue  = courses.reduce((acc, course) => course.coin + acc ,0)
    setTotal(totalValue)
  } 
  const handleChecked = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) {
        return checked.filter(item => item !== id)
      }else {
        return [...prev, id]
      }
    });
  } 
  
  return (
    <div>
      <ul style = {{listStyle: 'none'}}>
        {courses.map(course => 
          <li key = {course.id}>
            <input type="checkbox"
              checked = {checked.includes(course.id)}
              onChange ={() => handleChecked(course.id)}
            />
            {course.name}, {course.coin} coin
          </li>
        )}
      </ul>
      <p style = {{paddingLeft: 20}} >Total Coin: {total || 'Chưa có coin nào! '}</p>
      <button 
        style = {{marginLeft: 20}}
        onClick = {handleClick}
      >
        Show Total
      </button>
      
    </div>
  );
}

export default LearnUseState;
