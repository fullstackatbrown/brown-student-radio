import { useEffect, useRef, useState } from "react";
import "./Shows.css";

export default function Shows() {
    const [shows, setShows] = useState(null);

    const showsBox = useRef(null);
    const [showsBoxOpen, setShowsBoxOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://corsproxy.io/?https://programs.testradio.org/WBRU/");
            const doc = new DOMParser().parseFromString(await response.text(), "text/html");

            setShows(
                Array.from(doc.getElementById("w0")
                    .getElementsByTagName("tr"))
                    .map(row => Array.from(row.children)
                        .map(col => col.innerText)));
        })();
    }, []);

    useEffect(() => {
        if (showsBox.current) {
            const factor = showsBoxOpen ? 1 : 0.2;
            showsBox.current.style.maxHeight = showsBox.current.scrollHeight * factor + "px";
        }
    }, [showsBox.current, showsBoxOpen]);

    if (shows) {
        return (
            <>
                <h3>Next Shows</h3>
                <div className="shows-box" ref={showsBox} onClick={() => setShowsBoxOpen(!showsBoxOpen)}>
                    <table className="shows-table">
                        {shows.map(show => (
                            <tr>
                                <td>{show[0]}</td>
                                <td>{show[1]}</td>

                            </tr>
                        ))}
                    </table>
                </div>
            </>
        );
    } else {
        return null;
    }
}