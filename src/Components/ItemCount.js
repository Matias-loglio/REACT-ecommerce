
export const ItemCount = ({ count, handleCount }) => {
    return (
    <div >
        <button
        className='btn btn-secondary'
        onClick={() => handleCount("minus")}
    
        >
        -
        </button>
        <span
        id="counter"
        
        >
        {count}
        </span>
        <button
        className='btn btn-secondary'
        onClick={() => handleCount("plus")}
        
        >
        +
        </button>
    </div>
    );
};