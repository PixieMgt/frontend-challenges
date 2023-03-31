import { useState } from "react";
import SummaryRow from "./SummaryRow";

const SummaryList = () => {
    return (
        <div>
            <SummaryRow summaryItem={{ title: "Reaction" }} />
            <SummaryRow summaryItem={{ title: "Memory" }} />
            <SummaryRow summaryItem={{ title: "Verbal" }} />
            <SummaryRow summaryItem={{ title: "Visual" }} />
        </div>
    );
}

export default SummaryList;