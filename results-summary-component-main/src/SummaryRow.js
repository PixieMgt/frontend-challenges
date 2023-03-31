import { useEffect, useState } from "react";
import data from './data'

const SummaryRow = ({ summaryItem }) => {
    const [item] = useState(summaryItem)
    const [icon, setIcon] = useState(null)
    const [score, setScore] = useState(null)

    useEffect(() => {
        import(`./images/icon-${item.title.toLowerCase()}.svg`).then(data => {
            setIcon(data.default)
        })

        data.forEach(item => {
            if (item.category === summaryItem.title) {
                setScore(item.score)
            }
        })
    }, [])

    return (
        <div className={`${item.title}Row row`} key={item.title}>
            <img className="icon" src={icon} alt="icon" />
            <p className="rowTitle">{item.title}</p>
            {score && <p className="rowScore">{score} </p>}
            {!score && <p className="rowScore">...</p>}
            <p className="rowTotalScore">/ 100</p>
        </div>
    );
}

export default SummaryRow;