import useScreenSize from '../../hooks/useScreenSize'
import Expandable from '../expandable/Expandable';
import './FilterWrap.css'

function FilterWrap({ children }: { children: React.ReactNode }) {
  const screenSize = useScreenSize();
  return (
    <>
      <div className="card  p-32 min-w-260 h-full min-h-filter  text-capitalize filter-position">

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

export default FilterWrap
