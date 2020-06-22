export const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message)
    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms)
    },
}