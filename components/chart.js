export default class Chart {

    constructor(data, injectJsFn) {
        this.data = data
        this.injectJsFn = injectJsFn
    }

    resetView() {
        this.injectJsFn('chart.resetView()');
    }

    startNewSession() {
        this.injectJsFn('chart.startNewSession()');
    }

    listSelectedObjects(callback) {
        this.injectJsFn(`chart.listSelectedObjects(${callback.toString()})`);
    }

    clearSelection() {
        this.injectJsFn('chart.clearSelection()');
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
        this.injectJsFn('chart.changeConfig(' + JSON.stringify(newConfig) + ')');
    }



}
