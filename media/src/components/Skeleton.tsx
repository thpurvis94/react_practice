import classNames from 'classnames'

interface Props {
    times: number,
    className?: string
}

const Skeleton: React.FC<Props> = (props: Props) => {
    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        props.className
    )
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    )
    
    const boxes = Array(props.times).fill(0).map((_, i) => {
        return (
            <div key={i} className={outerClassNames}>
                <div className={innerClassNames}/>
            </div>
        )
    })
    
    return (
        <div>
            {boxes}
        </div>
    )
}
export default Skeleton