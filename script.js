const input = document.getElementById("input");
const content = document.getElementById("content");

const vanessa = document.getElementById("vanessa-dion-fletcher");
const kelsey = document.getElementById("kelsey-pugh");
const anna = document.getElementById("anna-stielau");

const terminal = document.getElementById("terminal");

// 初始隐藏所有speaker（保险）
content.style.display = "none";

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const command = input.value.toLowerCase().trim();
        handleCommand(command);
        input.value = "";
    }
});

function print(text) {
    const p = document.createElement("p");
    p.textContent = text;
    terminal.appendChild(p);
}

function handleCommand(cmd) {

    // 👉 帮助
    if (cmd === "help") {
        print("Available commands:");
        print("- start (show all talks)");
        print("- vanessa");
        print("- kelsey");
        print("- anna");
    }

    // 👉 显示全部
    else if (cmd === "start") {
        content.style.display = "block";

        vanessa.style.display = "block";
        kelsey.style.display = "block";
        anna.style.display = "block";

        print("Loading all research talks...");
    }

    // 👉 单独显示
    else if (cmd === "vanessa") {
        content.style.display = "block";

        vanessa.style.display = "block";
        kelsey.style.display = "none";
        anna.style.display = "none";

        print("Loading Vanessa...");
    }

    else if (cmd === "kelsey") {
        content.style.display = "block";

        vanessa.style.display = "none";
        kelsey.style.display = "block";
        anna.style.display = "none";

        print("Loading Kelsey...");
    }

    else if (cmd === "anna") {
        content.style.display = "block";

        vanessa.style.display = "none";
        kelsey.style.display = "none";
        anna.style.display = "block";

        print("Loading Anna...");
    }

    // 👉 错误提示
    else {
        print("Command not found. Type 'help'.");
    }
}
