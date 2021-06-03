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
