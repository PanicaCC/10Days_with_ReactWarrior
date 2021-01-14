import React, {Component} from "react";
import Layout from "../hoc/Layout/Layout";
import Movie from "./Movie/Movie";
import "./App.scss" 

class App extends Component {

    render() {
        return (
            <Layout>
                <h1>Movie Catalog</h1>

                <Movie />
            </Layout>
        )
    }
}

export default App;
