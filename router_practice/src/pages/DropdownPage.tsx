import { useState } from "react"
import Dropdown, { LookupTable } from "../components/Dropdown"

const DropdownPage: React.FC = () => {
    const [item, setItem] = useState<LookupTable | null>(null)

  const handleSelect = (selected: LookupTable): void => {
    if (selected.code === item?.code){
      setItem(null)
    }else{
      setItem(selected)
    }
  }

  const items: LookupTable[] = [
    {
      code: 'red',
      name: 'Red'
    },
    {
      code: 'blue',
      name: 'Blue'
    },
    {
      code: 'green',
      name: 'Green'
    }
  ]

  return (
    <div className="flex">
      <Dropdown values={items} value={item} onChange={handleSelect}/>
    </div>
  )
}

export default DropdownPage