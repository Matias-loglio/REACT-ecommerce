
export const ItemCount = ({ count, handleCount }) => {
    return (
    <div >
        <button
        className='btn btn-primary'
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
        className='btn btn-primary'
        onClick={() => handleCount("plus")}
        
        >
        +
        </button>
    </div>
    );
};