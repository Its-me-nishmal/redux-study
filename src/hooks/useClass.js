const useClass = (c) => {
    let backgroundClass = "container";
    if (c >= 20) {
        backgroundClass += " background-thousand";
    } else if (c >= 10) {
        backgroundClass += " background-hundred";
    }
    return backgroundClass;
}
export default useClass;