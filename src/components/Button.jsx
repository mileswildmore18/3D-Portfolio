// Add button
const Button = ({name, isBeam = false, containerClass}) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && (
                // Add ping
                <span className='relative flex h-3 w-3'>
                    {/* Add ping and dot */}
                    <span className="btn-ping"/>
                    <span className="btn-ping_dot"/>
                </span>
            )}
            {name}
        </button>
    )
}
export default Button
