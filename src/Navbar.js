import React from "react"
class Navbar extends React.Component {
    render() {
        return (
            <>
                <div style={{
                    width: "100%",
                    height: "70px",
                    background: "red",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <div className="title">
                        Movie App
                    </div>
                    <div>
                        <img alt="Cart Icon"></img>
                        <span>3</span>
                    </div>
                </div>
            </>
        )
    }
}

export const Feed = () => {
    return (
        <div classname="feed">

            <h3>Feed</h3>
            <p>This is the feed component.</p>
        </div>
        );
    };


export default Navbar;

// width: 100%;
//   height: 70px;
//   background-color: cadetblue;
//   display: flex;
//   justify-content: space-between;