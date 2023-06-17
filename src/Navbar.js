import React from "react"
class Navbar extends React.Component {
    render() {
        return (
            <>
                <div style={styles.nav}>
                    <div style={styles.title}>
                        Movie App
                    </div>
                    <div style={styles.cartContainer}>
                        <img alt="Cart Icon" src= "https://cdn-icons-png.flaticon.com/128/5474/5474875.png" style={styles.cartIcon}></img>
                        <span style={styles.cartCount}>3</span>
                    </div>
                </div>
            </>
        )
    }
}



export default Navbar;

const styles = {
    cartIcon: {
        height: 48,
        marginRight: 20,
    },
    nav: {
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
    },
    title: {
        fontSize: 30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft: 20
    },

    cartContainer: {
        position: "relative",
        cursor: "pointer",
    },
    cartCount: {
        background: "orange",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right: 10,
        top: -5,
        fontSize: 12,
    }
}