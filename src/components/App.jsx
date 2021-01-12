import React from "react";
import Layout from "../hoc/Layout/Layout";
import Movie from "./Movie/Movie";
import "./App.scss"

class App extends React.Component {

    render() {
        return (
            <Layout>
                <h1>Movie</h1>

                <Movie />
            </Layout>
        )
    }
}

export default App;
