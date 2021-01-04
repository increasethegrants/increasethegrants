import scrollToElement from "scroll-to-element";

const Quicklinks = function (quicklinks, offsetElement) {
    this.quicklinks = quicklinks;
    this.offsetElement = offsetElement;
    this.targetElementsByHash = {};
    this.quicklinksByHash = {};

    for (var i = 0; i < quicklinks.length; i++) {
        let link = quicklinks[i];
        let hash = link.getAttribute('href');
        link.addEventListener('click', this.clickHandler.bind(this), false);
        this.quicklinksByHash[hash] = link;
        this.targetElementsByHash[hash] = document.getElementById(hash.substring(1));
    }

    window.addEventListener('scroll', this.scrollHandler.bind(this), false)
    this.scrollHandler();
}

Quicklinks.prototype.clickHandler = function (e) {
    e.preventDefault();
    let hash = e.target.getAttribute('href');
    // window.history.pushState({}, document.title, hash);
    this.scrollToHash(hash, 1000);
};

Quicklinks.prototype.scrollHandler = function () {
    let bestHash = '';
    for (const hash in this.targetElementsByHash) {
        if (this.targetElementsByHash.hasOwnProperty(hash)) {
            let visibleArea = getVisibleArea(this.targetElementsByHash[hash]);
            if (visibleArea > window.innerHeight / 4) {
                bestHash = hash
            }
        }
    }
    for (const hash in this.quicklinksByHash) {
        if (this.quicklinksByHash.hasOwnProperty(hash)) {
            this.quicklinksByHash[hash].classList.toggle('focused', bestHash === hash);
        }
    }
};

Quicklinks.prototype.scrollToHash = function (hash, duration) {
    if (!this.targetElementsByHash.hasOwnProperty(hash)) {
        return;
    }
    setTimeout(() => {
        scrollToElement(this.targetElementsByHash[hash], {
            offset: this.offsetElement ? -this.offsetElement.offsetHeight : 0,
            duration: duration
        });
    }, 1);
}

const getVisibleArea = function (el) {
    var rect = el.getBoundingClientRect();
    return Math.min(
        Math.max(0, rect.bottom),
        window.innerHeight
    ) - Math.min(
        Math.max(0, rect.top),
        window.innerHeight
    );
}

export default Quicklinks;