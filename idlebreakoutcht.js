(function () {
    const menu = document.createElement("div");
    menu.style.position = "fixed";
    menu.style.top = "100px";
    menu.style.left = "100px";
    menu.style.background = "#222";
    menu.style.color = "#fff";
    menu.style.padding = "10px";
    menu.style.border = "2px solid #fff";
    menu.style.borderRadius = "8px";
    menu.style.zIndex = "9999";
    menu.style.cursor = "move";
    menu.style.fontFamily = "Arial";
    menu.style.boxSizing = "border-box";
    menu.style.maxWidth = "250px";
    menu.style.transition = "all 0.5s ease-in-out";

    let isMinimized = false;
    const originalPosition = { top: "100px", left: "100px", width: "", height: "" };

    menu.innerHTML = `
        <div id="menuContent">
            <strong>Idle Breakout - Menu by blakecakeyt</strong><br><br>
            <button id="doubleMoney" style="margin:5px;">OP Money</button>
            <button id="doubleGold" style="margin:5px;">OP Gold</button>
            <button id="doubleSkill" style="margin:5px;">OP Skill Points</button>
            <button id="doubleBB" style="margin:5px;">OP Black Bricks</button>
        </div>
        <button id="toggleMenu" style="margin-top:10px; width:100%;">Minimize</button>
    `;

    document.body.appendChild(menu);

    // Drag logic (no smoothing)
    let isDragging = false;

    menu.addEventListener("mousedown", function (e) {
        if (e.target.closest("#toggleMenu") || isMinimized) return;

        isDragging = true;
        const shiftX = e.clientX - menu.getBoundingClientRect().left;
        const shiftY = e.clientY - menu.getBoundingClientRect().top;

        function onMouseMove(e) {
            if (!isDragging) return;
            menu.style.transition = "none";
            menu.style.left = e.pageX - shiftX + 'px';
            menu.style.top = e.pageY - shiftY + 'px';
        }

        function onMouseUp() {
            isDragging = false;
            menu.style.transition = "all 0.5s ease-in-out";
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    menu.ondragstart = () => false;

    // Button logic
    document.getElementById("doubleMoney").onclick = () => {
        try {
            _E7(0)._F8 *= 9999999999999999999999999999999999999999999999999;
        } catch {
            alert("Error doubling money.");
        }
    };

    document.getElementById("doubleGold").onclick = () => {
        try {
            _E7(0)._Y8 *= 9999999999999999999999999999999999999999999999999;
        } catch {
            alert("Error doubling gold.");
        }
    };

    document.getElementById("doubleSkill").onclick = () => {
        try {
            _E7(0)._49 *= 9999999999999999999999999999999999999999999999999;
        } catch {
            alert("Error doubling skill points.");
        }
    };

    document.getElementById("doubleBB").onclick = () => {
        try {
            _E7(0)._39 *= 9999999999999999999999999999999999999999999999999;
        } catch {
            alert("Error doubling black bricks.");
        }
    };

    // Minimize logic
    const toggleBtn = document.getElementById("toggleMenu");
    const contentDiv = document.getElementById("menuContent");

    toggleBtn.onclick = (e) => {
        e.stopPropagation();

        if (!isMinimized) {
            // Save current position and size
            const rect = menu.getBoundingClientRect();
            originalPosition.top = menu.style.top = rect.top + "px";
            originalPosition.left = menu.style.left = rect.left + "px";
            originalPosition.width = rect.width + "px";
            originalPosition.height = rect.height + "px";

            // Begin animation to bottom-left
            contentDiv.style.display = "none";
            toggleBtn.textContent = "Open";
            toggleBtn.style.width = "100%";
            menu.style.width = "100px";
            menu.style.height = "30px";
            menu.style.top = "unset";
            menu.style.left = "unset";
            menu.style.bottom = "10px";
            menu.style.left = "10px";
            menu.style.borderRadius = "20px";
            isMinimized = true;
        } else {
            // Restore position and size
            menu.style.bottom = "unset";
            menu.style.left = originalPosition.left;
            menu.style.top = originalPosition.top;
            menu.style.width = originalPosition.width;
            menu.style.height = originalPosition.height;
            menu.style.borderRadius = "8px";

            setTimeout(() => {
                contentDiv.style.display = "block";
                toggleBtn.textContent = "Minimize";
                isMinimized = false;
            }, 500); // match animation duration
        }
    };
})();
