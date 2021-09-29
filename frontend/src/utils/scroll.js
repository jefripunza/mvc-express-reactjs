import $ from "jquery";

function smoothScrollToBottomChat(selector) {
    if ($(selector).length > 0) {
        $(selector).stop().animate({ scrollTop: $(selector)[0].scrollHeight }, 500);
    }
}

function scrollToBottomChat(selector) {
    // auto scroll bottom chat
    if (document.querySelector(selector)) {
        const chatWindow = document.querySelector(selector);
        var xH = chatWindow.scrollHeight;
        chatWindow.scrollTo(0, xH);
    }
}

export {
    smoothScrollToBottomChat,
    scrollToBottomChat,
}