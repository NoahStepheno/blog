function main() {
  var c = document.querySelectorAll(
    ".segment-text.style-scope.ytd-transcript-segment-renderer"
  );
  copy(
    Array.from(c)
      .map((item) => item.innerText)
      .join(" ")
  );
}

main();
