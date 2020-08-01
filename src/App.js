import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
    firstCreation = {
        counters: [
            { id: 1, value: 4, title: "Alu", isLiked: false },
            { id: 2, value: 0, title: "Potol", isLiked: true },
            { id: 3, value: 7, title: "Shim", isLiked: false },
            { id: 4, value: 0, title: "Gajor", isLiked: false },
        ],
    };

    state = {};
    constructor() {
        super();
        this.state.counters = [...this.firstCreation.counters];
    }

    handleDelete = (counter) => {
        const counters = this.state.counters.filter((c) => c.id !== counter.id);
        this.setState({ counters });
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = { ...counter };
        counters[index].value++;

        this.setState({ counters });
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = { ...counter };
        counters[index].value--;

        this.setState({ counters });
    };

    handleReset = () => {
        const counters = [...this.firstCreation.counters];
        this.setState({ counters });
    };

    handleLike = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = { ...counter };
        counters[index].isLiked = !counters[index].isLiked;

        this.setState({ counters });
    };

    render() {
        return (
            <React.Fragment>
                <Navbar
                    totalCounters={
                        this.state.counters.filter((c) => c.value > 0).length
                    }
                />
                <div className="container-fluid">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
