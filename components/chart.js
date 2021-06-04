import Deferred from "./deferred"
import {randomUuid} from "./util"

export default class Chart {

    constructor(data, injectJsFn, registerPromiseFn) {
        this.data = data
        this.injectJsFn = injectJsFn
        this.registerPromiseFn = registerPromiseFn
    }

    resetView() {
        this.injectJsFn('chart.resetView()')
    }

    startNewSession() {
        this.injectJsFn('chart.startNewSession()')
    }

    listSelectedObjects(callback) {
        this.injectJsFn(`chart.listSelectedObjects(${callback.toString()})`)
    }

    clearSelection() {
        this.injectJsFn('chart.clearSelection()')
    }

    selectObjects(objects) {
        this.injectJsFn(`chart.selectObjects(${JSON.stringify(objects)})`)
    }

    deselectObjects(objects) {
        this.injectJsFn(`chart.deselectObjects(${JSON.stringify(objects)})`)
    }

    selectCategories(categories) {
        this.injectJsFn(`chart.selectCategories(${JSON.stringify(categories)})`)
    }

    deselectCategories(categories) {
        this.injectJsFn(`chart.deselectCategories(${JSON.stringify(categories)})`)
    }

    changeConfig(newConfig) {
        if (newConfig.objectColor) {
            newConfig.objectColor = newConfig.objectColor.toString()
        }
        if (newConfig.objectLabel) {
            newConfig.objectLabel = newConfig.objectLabel.toString()
        }
        this.injectJsFn('chart.changeConfig(' + JSON.stringify(newConfig) + ')')
    }

    findObject(label) {
        return this._injectJsAndReturnDeferred(`chart.findObject(${JSON.stringify(label)})`)
    }

    listCategories() {
        return this._injectJsAndReturnDeferred(`chart.listCategories()`)
    }

    zoomToSelectedObjects() {
        return this._injectJsAndReturnDeferred(`chart.zoomToSelectedObjects()`)
    }

    zoomToFilteredCategories() {
        return this._injectJsAndReturnDeferred(`chart.zoomToFilteredCategories()`)
    }

    _injectJsAndReturnDeferred(js) {
        const deferred = new Deferred()
        const uuid = randomUuid()
        this.registerPromiseFn(uuid, deferred)
        this.injectJsFn(js + `
            .then((o) => {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: "${uuid}",
                    promiseResult: "resolve",
                    data: o
                }))
            })
            .catch((e) => {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: "${uuid}",
                    promiseResult: "reject",
                    data: e
                }))
            })
        `)
        return deferred
    }
}
