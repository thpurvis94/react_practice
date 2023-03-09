import { LookupTable } from "./Dropdown"
import Link from "./Link"

const Sidebar: React.FC = () => {

    const links: LookupTable[] = [
        {code: '/', name: 'Dropdown'},
        {code: '/accordion', name: 'Accordion'},
        {code: '/buttons', name: 'Buttons'},
        {code: '/modal', name: 'Modal'},
        {code: '/table', name: 'Table'},
        {code: '/counter', name: 'Counter'}
    ]

    const renderedLinks = links.map((x) => {
        return (
            <Link 
                key={x.name} 
                to={x.code} 
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
                >
                    {x.name}
            </Link>
        )
    })

    return (
        <div className="sticky top-0 flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}
export default Sidebar