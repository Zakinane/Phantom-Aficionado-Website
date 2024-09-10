let addTopicBtn : HTMLElement|null = document.getElementById("add-btn-phorum");
let closeTopicPageBtn : HTMLElement|null = document.getElementById("close-topic-btn");
let addTopicPage : HTMLElement|null = document.getElementById("add-topic-page")

function closeAddTopicPage() {
    if (addTopicPage) {
        addTopicPage.style.display = "none";
    }
}

function openAddTopicPage() {
    if (addTopicPage){
        addTopicPage.style.display = "flex";
    }
 }
