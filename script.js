const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

// Create tags

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if(e.key === 'Enter') {
    setTimeout(() => {
        e.target.value = ''
    }, 10)

    randomSelect()
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// Random Select functionality

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {

        // shift it to each one, highlight and highlight after a certain amount of time

        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

        // stop it and pick a random tag to land on and highlight

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

// Select Random Tag

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}