import Squere from './squire';
const App = () => {
  let a = ['blue', 'yellow', 'yellow', 'yellow', 'aqua', 'aqua', 'aqua', 'red']
  
  return (
    <div className='row'>
      {
        a.map((a, i) => {
          return <Squere color={a} key={i} />
        })
      }
    </div>
  )
}

export default App;
