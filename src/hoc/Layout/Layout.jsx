import React, {Component} from "react";

class Layout extends Component {
    render() {
        return (
            <div className={'Layout'}>

                <main>
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
}

export default Layout