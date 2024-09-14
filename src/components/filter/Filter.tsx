import useScreenSize from '../../hooks/useScreenSize'
import Expandable from '../expandable/Expandable';
import './Filter.css'

function Filter({ children }: { children: React.ReactNode }) {
  const screenSize = useScreenSize();
  return (
    <>
      <div className="card  p-32 min-w-260 h-full min-h-filter  text-capitalize ">

        {screenSize === "md" ? <>
          <h1>Filter</h1>
          {children}

        </> :
          <Expandable title='Filter' >
            {children}
          </Expandable>}
      </div>
    </>
  )
}

export default Filter
