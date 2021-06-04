export default class Deferred {

    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.reject = reject
            this.resolve = resolve
        })
    }

    then(fn) {
        return this.promise.then(fn)
    }

    catch(fn) {
        return this.promise.catch(fn)
    }
}


