// =====================================
// مكتبة الطالب المغربي
// JavaScript
// =====================================


// فتح المادة

function openSubject(subject) {

    alert(
        "📚 سيتم فتح قسم " +
        subject +
        " قريبًا."
    );

}


// =====================================
// البحث
// =====================================

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const searchableItems =
    document.querySelectorAll(".searchable");


function searchContent() {

    const query =
        searchInput.value
        .trim()
        .toLowerCase();


    searchableItems.forEach(function(item) {

        const text =
            item.innerText.toLowerCase();


        if (text.includes(query)) {

            item.classList.remove("hidden");

        } else {

            item.classList.add("hidden");

        }

    });

}


// البحث أثناء الكتابة

searchInput.addEventListener(
    "input",
    searchContent
);


// البحث عند الضغط على الزر

searchButton.addEventListener(
    "click",
    searchContent
);


// =====================================
// رسالة عند الضغط على Enter
// =====================================

searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            searchContent();

        }

    }
);
