import Squere from './squire';
const App2= () => {
  let a = [
    ['b', 'y', 'b', ],
    ['y', 'b', 'y', ],
    ['b', 'y', 'b', ],
    ['y', 'b', 'y', ],]
  
  return (
    <div className='row'>
      {
        a.map((babel) => {
            return (
           <div className='col'> {babel.map((a,i) => {
                console.log(a)
                return <Squere color={a} key={i} />
            })}
            </div>)
        }
        )
      }
    </div>
  )
}

export default App2;

