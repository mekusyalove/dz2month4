import  {useState} from "react";

const App = () => {
  const [redCube, setRedCube] = useState('red')
  const [blueCube, setBlueCube] = useState('blue')
  const handleClick = () => {
    setRedCube(blueCube)
    setBlueCube(redCube)
  }
  return (
      <div>
        <div onClick={handleClick} style={{background: redCube, width: 180, height: 180}}></div>
        <div onClick={handleClick} style={{background: blueCube, width: 180, height: 180}}></div>
      </div>
  )
}


export default  App