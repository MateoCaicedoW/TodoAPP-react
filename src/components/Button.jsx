export function Button({name, handleClick, type}) {
    return (
        <button type={type} onClick={handleClick}>{name}</button>
    )
}

