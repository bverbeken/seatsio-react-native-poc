export default class SeatsioObject {

    constructor(data, injectJsFn) {
        console.log(data)
        this.data = data
        this.injectJsFn = injectJsFn
    }

    isInChannel(channelKey) {
        return true; // TODO bver implement
    }


}
