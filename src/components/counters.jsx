import React from "react";
import Counter from "./counter";

const Counters = ({
    counters,
    onReset,
    onDelete,
    onIncrement,
    onDecrement,
    onLike,
}) => {
    return (
        <div>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
                Reset
            </button>
            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    counter={counter}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                    onLike={onLike}
                />
            ))}
        </div>
    );
};

export default Counters;
