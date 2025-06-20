const texts = ["Web Developer", "Web Designer"]; // Texts to type
let textIndex = 0; // Track which text is being typed
let charIndex = 0; // Track character index
let isDeleting = false;
let speed = 100; // Typing speed

function typeEffect() {
    const typingElement = document.getElementById("typing-text");
    const currentText = texts[textIndex];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pause before deleting
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Switch text
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : speed);
}

window.onload = () => {
    typeEffect();
};
document.getElementById("web-dev").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#DC758F";
    this.style.color = "white";
});

document.getElementById("web-dev").addEventListener("mouseout", function() {
    this.style.backgroundColor = "white";
    this.style.color = "#333";
});

document.getElementById("web-design").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#DC758F";
    this.style.color = "white";
});

document.getElementById("web-design").addEventListener("mouseout", function() {
    this.style.backgroundColor = "white";
    this.style.color = "#333";
});
document.addEventListener("DOMContentLoaded", function () {
    function startTypingEffect(element, text) {
        let index = 0;
        element.textContent = ""; // Clear text before typing starts
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    }

    document.getElementById("web-dev").addEventListener("mouseenter", function () {
        startTypingEffect(document.getElementById("dev-text"), "Web Development");
    });

    document.getElementById("web-design").addEventListener("mouseenter", function () {
        startTypingEffect(document.getElementById("design-text"), "Web Design");
    });
});
