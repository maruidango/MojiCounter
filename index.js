let textElement;
let ptags = {};

window.onload = () => {
	textElement = document.getElementById("text");
	ptags = {
		all: document.getElementById("all"),
		noSpace: document.getElementById("noSpace"),
		noLines: document.getElementById("noLines"),
		lines: document.getElementById("lines"),
		paragraph: document.getElementById("paragraph"),
		paper: document.getElementById("paper"),
	};
};

function countLength() {
	const noline = textElement.value.replace(/\n/g, "");
	const noSpaceText = textElement.value.replace(" ", "");
	const lineCount = textElement.value.split("\n").length;
	const paragraph = textElement.value.split("\n ").length;
	// Write the values to ptags
	ptags.all.textContent = `${textElement.value.length}文字`;
	ptags.noLines.textContent = `改行なし ${noline.length}文字`;
	ptags.noSpace.textContent = `スペースなし ${noSpaceText.length}文字`;
	ptags.lines.textContent = `行数 ${lineCount}行`;
	ptags.paragraph.textContent = `段落数 ${paragraph}段落`;
	ptags.paper.textContent = `原稿用紙 ${textElement.value.length / 400}枚`;
}
