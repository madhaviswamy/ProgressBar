// Create a class for the element
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "progress-bar-wrapper");

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");

    const progressValue = this.getAttribute("value");

    style.textContent = `
      .progress-bar-wrapper {
        position: relative;
      }

      .background {
        background-color: #e9ecef;
        width: 100%;
        height: 20px;
        text-align: center;
      }

      .foreground {
        background-color: #0d6efd;
        height: 20px;
        width: ${progressValue}%;
      }
    `;

    const progressBarBackground = document.createElement("div");
    progressBarBackground.setAttribute("class", "background");

    const progressBarForeground = document.createElement("div");
    progressBarForeground.setAttribute("class", "foreground");

    // Attach the created elements to the shadow dom

    const progressBarIndicator = document.createElement("div");
    progressBarIndicator.innerText = `Progress: ${progressValue}%`;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    progressBarBackground.appendChild(progressBarForeground);
    progressBarBackground.appendChild(progressBarIndicator);
    wrapper.appendChild(progressBarBackground);
  }
}

// Define the new element
customElements.define("co-progress", PopUpInfo);
