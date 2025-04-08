export const goToNextStage = (currentStage: number) => {
    const nextStage = currentStage + 1;
    const localStorageCurrentStage = parseInt(localStorage.getItem("currentStage") || "1");
    if (!(localStorageCurrentStage > nextStage)) {
        localStorage.setItem("currentStage", nextStage.toString());
    }
}