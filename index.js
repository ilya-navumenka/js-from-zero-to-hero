window.onload = function() {
    addTagsClickHandler();
    addHamburger();
    removeHamburger();
}

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            let selectedTag = clickedTag.innerText;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            let textAll = 'All';
            if (selectedTag === textAll) {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(selectedTag);
            }
        }
    })
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
        tags.forEach(tag => {
            tag.classList.remove('tag_selected');
            tag.classList.add('tag_bordered');
        })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    })
}

const filterStrategyBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
            if (tag.innerText === selectedTag) {
                strategy.classList.remove('strategy_hidden');
            }
        })
    })
}

const addHamburger = () => {
    const hamburger = document.querySelector('.hamburger');
    const popup = document.querySelector('.popup');
    const menu = document.querySelector('.navigation').cloneNode(1);
    const body = document.body;

    hamburger.addEventListener('click', hamburgerHandler);

    function hamburgerHandler(e) {
        e.preventDefault();
        popup.classList.toggle('open');
        hamburger.classList.toggle('active');
        body.classList.toggle('noscroll');
        renderPopup();
    }

    function renderPopup() {
        popup.appendChild(menu)
    }
}

const removeHamburger = () => {
    const popup = document.querySelector('.popup');

    popup.addEventListener('click', closeHamburger);

    function closeHamburger(e) {
        let classes = e.target.classList;
        if (!classes.contains('popup')) {
            popup.classList.toggle('open').remove();
        }
    }
}
