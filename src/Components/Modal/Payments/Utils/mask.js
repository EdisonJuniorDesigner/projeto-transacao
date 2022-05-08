function Mask(e) {
    const currentFormat = e.target.value
        .replace(/\D/g, "")
        .replace(/^0*/, "")
        .padStart(3, "0");

    e.target.value =
        "R$ " +
        currentFormat.slice(0, -2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
        "," +
        currentFormat.slice(-2);
}

export default Mask;
