import React, { Component } from "react";
import Like from "./like";

class Counter extends Component {
    state = {
        value: this.props.counter.value,
    };

    render() {
        const {
            counter,
            onIncrement,
            onDecrement,
            onDelete,
            onLike,
        } = this.props;
        return (
            <div className="row">
                <div className="col-sm-1">
                    <span className={this.badgeClasses(counter)}>
                        {this.formatCount(counter)}
                    </span>
                </div>
                <div className="col-sm-1">
                    <Like
                        onClick={() => onLike(counter)}
                        isLiked={counter.isLiked}
                    />
                </div>
                <div className="col-sm-3">
                    <button
                        onClick={() => onIncrement(counter)}
                        className="btn btn-secondary m-1"
                    >
                        +
                    </button>
                    <button
                        disabled={counter.value === 0}
                        onClick={() => onDecrement(counter)}
                        className="btn btn-secondary m-1"
                    >
                        -
                    </button>
                    <button
                        onClick={() => onDelete(counter)}
                        className="btn btn-danger m-1"
                    >
                        x
                    </button>
                </div>
            </div>
        );
    }

    formatCount(counter) {
        return counter.value === 0 ? "Zero" : counter.value;
    }

    badgeClasses(counter) {
        let classes = "badge m-2 badge-";
        return classes + (counter.value === 0 ? "warning" : "primary");
    }
}

export default Counter;
