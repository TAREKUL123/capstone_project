function toggleAITutor() {
    const popup = document.getElementById("aiTutorPopup");
    popup.classList.toggle("show");
}

async function askAI() {
    const questionField = document.getElementById("userQuestion");
    const answerBox = document.getElementById("aiAnswer");

    if (!questionField || !answerBox) return;

    const question = questionField.value.trim();
    if (!question) {
        alert("Please type a question!");
        return;
    }

    answerBox.innerText = "Thinking...";

    try {
        const formData = new FormData();
        formData.append("question", question);

        const response = await fetch("http://localhost/onusiloni/ai_tutor_gemini.php", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        answerBox.innerText = data.answer || "No response received.";
    } catch (error) {
        console.error("AI Tutor fetch error:", error);
        answerBox.innerText = "Error connecting to AI server!";
    }
}
